import React from 'react';
import firebase from '../../firebaseconfig';
import { SocialCard } from '../styledComponents/DemoCard';
import { SpacingUpper, SpacingBottom, URLHandler }from '../styledComponents/StyledAdminCustomizer';
import User from '../user/User';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabs from './Tabs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    shadows: ['none']
  },

}));

function TabPanel (props) {
  const { children, value, index, ...other } = props;
  return (
    <div
    
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Admin = () => {
  const username = {
    params: {
      user: `${firebase.getCurrentUsername()}`
    }
  }
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} >
          <Tabs />
        </Grid>
        <Grid item xs={12} md={4} direction='column'>
          <Paper className={classes.paper} square='false'>
            <URLHandler>encor.cc/{firebase.getCurrentUsername()}</URLHandler>
          </Paper>
          <SpacingUpper/>
          <Paper className="card" square='false'>
            <SocialCard>
              <User match={username}/>
            </SocialCard>
          </Paper>
          <SpacingBottom/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Admin;