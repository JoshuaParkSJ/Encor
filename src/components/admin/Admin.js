import React from 'react';
import firebase from '../../firebaseconfig';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import User from '../user/User';
import { SocialCard } from '../styledComponents/DemoCard';
import { URLHandler }from '../styledComponents/StyledAdminCustomizer';
import Logo from '../../assets/images/logo.png';
import AdminCustomizer from './AdminCustomizer';

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';

let classRoot = 'non-mobile';

if (window.innerWidth < 992) {
  classRoot = 'mobile';
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: '0',
  },
  navbar: {
    color: 'black',
    backgroundColor: '#FFFFFF',
    boxShadow: 'none',
  },
  tab: {
    marginLeft: '-180px',
  },
  tabMobile: {
    marginLeft: '0px',
  },
  logo: {
    width: '100px',
    height: '23px',
    marginTop: '18px',
    marginRight: '30px',
  },
}));

const TabPanel = props => {
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

const a11yProps = index => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Admin = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const username = {
    params: {
      user: `${firebase.getCurrentUsername()}`
    }
  }

  const classes = useStyles();

  const ResponsiveTabPanel = props => {
    return (
      <React.Fragment>
        {classRoot === 'non-mobile' ? 
        <TabPanel value={props.value} index={props.index} className={classes.tab}>
          {props.children}
        </TabPanel>
        :
        <TabPanel value={props.value} index={props.index} className={classes.tabMobile}>
          {props.children}
        </TabPanel>
        }
      </React.Fragment>
    )
  }
  return (
    <Grid className={classes.root}>
      <Row>
        <img src={Logo} className={classes.logo} alt="Encor logo" />
        <Col xs>
          <AppBar position="static" className={classes.navbar}>
            <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {background:'black'}}}>
              <Tab label="Links" {...a11yProps(0)} />
              <Tab label="Design" {...a11yProps(1)} />
              <Tab label="Settings" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <ResponsiveTabPanel value={value} index={0}>
            <AdminCustomizer />
          </ResponsiveTabPanel>
          <ResponsiveTabPanel value={value} index={1}>
            Item Two
          </ResponsiveTabPanel>
          <ResponsiveTabPanel value={value} index={2}>
            Item Three
          </ResponsiveTabPanel>
        </Col>
        <Col xs>
          <URLHandler>
            <a href={`//www.encor.cc/${firebase.getCurrentUsername()}`} target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
              encor.cc/{firebase.getCurrentUsername()}
            </a>
          </URLHandler>
          <SocialCard>
            <User match={username}/>
          </SocialCard>
        </Col>
      </Row>
    </Grid>
  );
}

export default Admin;