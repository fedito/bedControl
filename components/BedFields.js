import { Grid, TextField } from "@mui/material";
import React, { Fragment } from "react";

const BedFields = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12} sm={6}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="bedNumber"
          label="Numero de cama"
          name="bedNumber"
          autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="dni"
          label="DNI"
          name="dni"
          type="number"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Nombre"
          name="name"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="surname"
          label="Apellido"
          name="surname"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="age"
          label="Edad"
          name="age"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="diagnosis"
          label="Diagnostico"
          name="diagnosis"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="ocupationTime"
          label="Tiempo en cama"
          name="ocupationTime"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="expectedDischarge"
          label="Provable alta"
          name="expectedDischarge"
        />
      </Grid>
    </Grid>
  );
};

export default BedFields;
