import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Logo from '../../assets/images/logo.svg'
import Links from './Links';
import AdminCustomizer from './AdminCustomizer';
// import HomeIcon from '@material-ui/icons/Home';
import { Route } from "react-router-dom";

function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// Altered tab css layout 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#B4B4B4',
   

  },
  AppBar: {
    background: 'transparent',
    boxShadow: 'none'
},
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={useStyles.AppBar} color={'white'} borderRadius={'10'}>
        <Tabs value={value} onChange={handleChange} 
        aria-label="simple tabs example" 
        TabIndicatorProps={{style: {background:'black'}}}>  
          <Tab label="Links" {...a11yProps} /> 
          <Tab label="Design" {...a11yProps(1)} disabled />
          <Tab label="Setting" {...a11yProps(2)} disabled />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} backgroundColor={'white'}>
       <AdminCustomizer/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Links/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
}