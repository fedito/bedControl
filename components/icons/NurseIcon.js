import React from "react";
import PropTypes from "prop-types";
import { Grid, IconButton, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';


// const useStyles = makeStyles((theme) => ({
//   icon: {
//     "& svg": {
//       fontSize: 100,
//     },
//   },
// }));

const NurseIcon = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Grid item>
        <IconButton
          className={classes.icon}
          onClick={() => {
            
          }}
        >
          <AssignmentIndIcon
            color={"success"}
            fontSize="large"
          />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">{props.data.name}</Typography>
        <Typography variant="subtitle1">{props.data.surname}</Typography>
        <Typography variant="subtitle1">{props.data.dni}</Typography>
      </Grid>
    </Grid>
  );
};

export default NurseIcon;
