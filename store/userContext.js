import React, { useCallback, useState, useEffect } from "react";


const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({});

  const handleUser = (user) => {
    setUser(user);
  };

  const contextProps = {
    user,
    handleUser,
  };

  return (
    <UserContext.Provider value={contextProps}>{children}</UserContext.Provider>
  );
};

export default UserContext;
