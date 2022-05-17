import React, { Fragment } from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/router";
import NightShelterRoundedIcon from "@mui/icons-material/NightShelterRounded";
import { color5 } from "../../helpers/colorHelpers";

const RoomIcon = (props) => {
  const router = useRouter();

  const { id, name, type, bedsTotal = 0, bedsFree = 0 } = props.data;

  const handleClick = () => {
    
    router.push("/rooms/" + id);
  };

  return (
    <Fragment>
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
            >{`Sala: ${name}`}</Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={handleClick}>
              <NightShelterRoundedIcon
                sx={{
                  "& svg": {
                    fontSize: 100,
                  },
                }}
                htmlColor={color5(bedsFree, bedsTotal)}
                style={{ fontSize: 100 }}
              />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography align="center" variant="subtitle1">
              {type}
            </Typography>
            <Typography
              align="left"
              variant="subtitle1"
            >{`Camas: ${bedsTotal}`}</Typography>
            <Typography
              align="left"
              variant="subtitle1"
            >{`Libres: ${bedsFree}`}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default RoomIcon;
