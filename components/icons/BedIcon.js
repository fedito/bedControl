import React, { Fragment, useState } from "react";
import {
  AppBar,
  Box,
  Dialog,
  Grid,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

import HotelRoundedIcon from '@mui/icons-material/HotelRounded';
import CloseIcon from "@mui/icons-material/Close";
import ShowInfoBed from "../ShowInfoBed";

const Transition = React.forwardRef(function Transition(
  props,
  ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BedIcon = (props) => {
  const router = useRouter();

  const {
    id,
    number,
    name,
    surname,
    age,
    birthDate,
    dni,
    diagnosis,
    ocupationTime,
    expectedDischarge,
  } = props.data;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <ShowInfoBed
          id={id}
          number={number}
          name={name}
          surname={surname}
          age={age}
          birthDate={birthDate}
          dni={dni}
          diagnosis={diagnosis}
          ocupationTime={ocupationTime}
          expectedDischarge={expectedDischarge}
        />
      </Dialog>
      <Box
        sx={{
          p: 2,
          "&:hover": {
            background: "#e8f4fd",
          }, 
        }}
        boxShadow={3}
        borderRadius="10%"
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography
              align="center"
              sx={{ fontWeight: 600 }}
              variant="subtitle1"
            >{`Cama: ${number}`}</Typography>
          </Grid>

          <Grid>
            <IconButton onClick={handleClickOpen}>
              <HotelRoundedIcon
                sx={{
                  "& svg": {
                    fontSize: 100,
                  },
                }}
                color={!surname ? "success" : "error"}
                style={{ fontSize: 100 }}
              />
            </IconButton>
          </Grid>
          <Grid>
            <Typography align="left" variant="subtitle2">
              {name}
            </Typography>
            <Typography align="left" variant="subtitle2">
              {surname}
            </Typography>
            <Typography align="left" variant="subtitle2">
              {dni}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default BedIcon;
