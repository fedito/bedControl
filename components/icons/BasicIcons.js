import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { Fragment, useContext, useEffect } from "react";
import BedIcon from "./BedIcon";
import FloorIcon from "./FloorIcon";
import NurseIcon from "./NurseIcon";
import RoomIcon from "./RoomIcon";
import { useRouter } from "next/router";
import AuthContext from "../../store/auth-context";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

export default function BasicIcons(props) {
  const router = useRouter();

  const auth = useContext(AuthContext);

  const { isLoggedIn } = auth;

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    showIconsHandler(props);
  });

  const showIconsHandler = (props) => {
    return showIcons(props);
  };

  return (
    <Box
      sx={{
        marginTop: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Button
        variant="outlined"
        fullWidth
        startIcon={
          props.icon != "floors" ? <ArrowBackRoundedIcon /> : null
        }
        onClick={
          props.icon != "floors"
            ? () => {
                router.back();
              }
            : null
        }
      >
        <Typography sx={{ fontWeight: 600 }} variant="h4">
          {props.title}
        </Typography>
      </Button>

      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
      >
        {showIcons(props)}
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <Button variant="contained" color="error">
            Borrar
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Nuevo
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="success">
            Editar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

const showIcons = (props) => {
  const iconType = props.icon;

  if (iconType === "beds") {
    return props.data.Beds.map((bed) => (
      <Fragment key={bed.id}>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <BedIcon data={bed} />
        </Grid>
      </Fragment>
    ));
  }
  if (iconType === "rooms") {
    return props.data.Rooms.map((room) => (
      <Fragment key={room.id}>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <RoomIcon data={room} />
        </Grid>
      </Fragment>
    ));
  }
  if (iconType === "nurses") {
    return (
      <Fragment>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <NurseIcon data={data} />
        </Grid>
      </Fragment>
    );
  }
  if (iconType === "floors") {
    return props.data.Floors.map((floor) => (
      <Fragment key={floor.id}>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <FloorIcon data={floor} />
        </Grid>
      </Fragment>
    ));
  }
};
