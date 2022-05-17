import {
  Box,
  Avatar,
  TextField,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import React from "react";
import BedFields from "./BedFields";

const BasicForm = (props) => {
  
  const handleSubmit = (event) => {
    event.preventDefault()
  };

  return (
    <Box
      sx={{
        marginTop: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h4">"{props.title}aaaaaaaa"</Typography>
        </Grid>
        <Grid item>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <BedFields />
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Button type="button" color="info" variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Dar Alta
                </Button>
              </Grid>
              <Grid item>
                <Button type="button" color="error" variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Borrar cama
                </Button>
              </Grid>
              <Grid item>
                <Button type="submit" color="success" variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Guardar
                </Button>
              </Grid>
            </Grid>
           
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BasicForm;
