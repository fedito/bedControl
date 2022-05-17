import { useContext, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AuthContext from "../store/auth-context";
import swal from "sweetalert";
import UserContext from "../store/userContext";

const defaultValues = {
  dni: "",
  password: "",
};

export default function SignIn() {
  const router = useRouter();
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (auth.isLoggedIn) {
      router.push("/hospitals/" + auth.hospital);
    } else {
      router.push("/");
    }
  }, [auth]);

  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = await response.json();

    const { token, user } = data;

    if (response.ok) {
      auth.login(token, user.dni, user.role, user.hospitalId);

      // swal({
      //   title: `Bienvenido`,
      //   text: `${user.dni}`,
      //   timer: "2000",
      //   icon: "success",
      // });

      router.push(`/hospitals/${user.hospitalId}`);
    } else {
      swal({
        title: `Ups`,
        text: "DNI o contraseña incorrecta",
        timer: "2000",
        icon: "error",
      });
    }
  };

  return (
    <Box
      sx={{
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
        </Grid>
        <Grid item xs>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="dni"
              label="DNI"
              name="dni"
              autoComplete="dni"
              value={formValues.dni}
              autoFocus
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formValues.password}
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
          </Box>
        </Grid>
        <Grid item xs>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => router.push("/auth/register")}
          >
            Registrar Nuevo
          </Button>
        </Grid>
        {/* {authContext.role === "chief" && (
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs>
              <Button
                variant="outlined"
                onClick={() => router.push("/auth/register")}
              >
                Registrar Nuevo
              </Button>
            </Grid>
            <Grid item xs>
              <Button
                variant="outlined"
                onClick={() => router.push("/auth/password")}
              >
                Recuperar contraseña
              </Button>
            </Grid>
          </Grid>
        )} */}
      </Grid>
    </Box>
  );
}
