import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { MenuItem, Grid } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import swal from "sweetalert";

const defaultValues = {
  dni: "",
  password: "",
  role: "nurse",
  hospitalId: "",
};

export default function Register(props) {
  const router = useRouter();

  const { hospitals } = props;

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

    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (response.ok) {
      swal({
        title: `${formValues.dni}`,
        text: "Usuario registrado",
        timer: "2000",
        icon: "success",
      });

      router.push("/");
    } else {
      swal({
        title: `${formValues.dni}`,
        text: "Usuario ya existe",
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
      {" "}
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
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
            <TextField
              margin="normal"
              required
              fullWidth
              select
              name="role"
              label="Rol"
              type="role"
              id="role"
              autoComplete="role"
              value={formValues.role}
              onChange={handleInputChange}
            >
              <MenuItem key={"chief"} value={"chief"}>
                Jefe de piso
              </MenuItem>
              <MenuItem key={"nurse"} value={"nurse"}>
                Enfermeria
              </MenuItem>
            </TextField>
            <TextField
              margin="normal"
              required
              fullWidth
              select
              name="hospitalId"
              label="Hospital"
              type="hospitalId"
              id="hospitalId"
              autoComplete="hospitalId"
              value={formValues.hospital}
              onChange={handleInputChange}
            >
              {hospitals &&
                hospitals.map((hospital) => (
                  <MenuItem key={hospital.id} value={hospital.id}>
                    {hospital.name}
                  </MenuItem>
                ))}
            </TextField>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
