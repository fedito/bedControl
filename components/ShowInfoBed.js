import {
  Box,
  Typography,
  Grid,
  Button,
  ListItem,
  List,
  ListItemText,
  Divider,
} from "@mui/material";
import React from "react";


const ShowInfoBed = (props) => {
  return (
    <Box
      sx={{
        margin: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontWeight: 600 }} variant="h5">{`Cama: ${props.number}`}</Typography>
      {props.surname && (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={"auto"}>
            <List dense>
              <ListItem>
                <ListItemText primary={"Nombre"} secondary={props.name} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={"auto"}>
            <List dense>
              <ListItem>
                <ListItemText primary={"Apellido"} secondary={props.surname} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={"auto"}>
            <List dense>
              <ListItem>
                <ListItemText primary={"Edad"} secondary={props.age} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={"auto"}>
            <List dense>
              <ListItem>
                <ListItemText primary={"DNI"} secondary={props.dni} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={"auto"}>
            <List dense>
              <ListItem>
                <ListItemText
                  primary={"Diagnostico"}
                  secondary={props.diagnosis}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={"auto"}>
            <List dense>
              <ListItem>
                <ListItemText
                  primary={"Tiempo de ocupacion"}
                  secondary={`${props.ocupationTime} dias`}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={"auto"}>
            <List dense>
              <ListItem>
                <ListItemText
                  primary={"Alta probable en"}
                  secondary={`${props.expectedDischarge} dias`}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      )}
      {!props.surname && <Divider />}
      <Button variant="contained">
        {props.surname ? "Modificar" : "Ocupar"}
      </Button>
    </Box>
  );
};

const showData = (data) => {};
export default ShowInfoBed;
