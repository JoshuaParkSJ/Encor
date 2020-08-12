import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    
  },
}));
  
const Links = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={12}>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    </div>
  );
}

export default Links;