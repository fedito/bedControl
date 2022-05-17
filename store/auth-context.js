import React, { useCallback, useState, useEffect } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  dni: "",
  role: "",
  hospital: "",
  isLoggedIn: false,
  login: (token, dni, role, hospital) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  if (typeof window !== "undefined") {
    const storedDni = localStorage.getItem("dni");
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    const storedHospital = localStorage.getItem("hospital");
    const storedExpirationDate = localStorage.getItem("expirationTime");

    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if (remainingTime <= 60000) {
      localStorage.removeItem("dni");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("hospital");
      localStorage.removeItem("expirationTime");
      return null;
    }
    return {
      dni: storedDni,
      token: storedToken,
      role: storedRole,
      hospital: storedHospital,
      duration: remainingTime,
    };
  }
  return null;
};

export const AuthContextProvider = ({ children }) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  let initialDni;
  let initialRole;
  let initialHospital;

  if (tokenData) {
    initialToken = tokenData.token
    initialDni = tokenData.dni
    initialRole = tokenData.role
    initialHospital = tokenData.hospital
  }

  const [token, setToken] = useState(initialToken);
  const [dni, setDni] = useState(initialDni);
  const [role, setRole] = useState(initialRole);
  const [hospital, setHospital] = useState(initialHospital);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    setDni(null);
    setRole(null);
    setHospital(null);
    localStorage.removeItem("token");
    localStorage.removeItem("dni");
    localStorage.removeItem("role");
    localStorage.removeItem("hospital");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, dni, role, hospital) => {
    setToken(token);
    setDni(dni);
    setRole(role);
    setHospital(hospital);
    localStorage.setItem("token", token);
    localStorage.setItem("dni", dni);
    localStorage.setItem("role", role);
    localStorage.setItem("hospital", hospital);
    const expirationTime = new Date(new Date().getTime() + (+process.env.NEXT_PUBLIC_SECONDS * 1000)).toISOString();
    console.log("EXPIRATION TIME")
    console.log(expirationTime)
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);
    console.log("REMAINING")
    console.log(remainingTime)

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  let contextValue = {
    token: token,
    dni: dni,
    role: role,
    hospital: hospital,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
