import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../partials/Typography';
import Facebook from '../../assets/images/facebook-icon.png';
import Instagram from '../../assets/images/instagram-icon.png'
import Logo from '../../assets/images/logo.svg';
import Icon from '@material-ui/core/Icon';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://encor.cc">
        encor
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#232323',
    color: 'white',
    width: '100%',

  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: '18px',
    height: '18px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

export default function Footer2() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5} xs={12}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a href="https://facebook.com" >
                  <img src={Facebook} alt="Facebook" style={{height: 30 + 'px', width: 30 + 'px'} }/>
                </a>
                <a href="https://instagram.com/encor.cc"  >
                  <img src={Instagram} alt="Facebook" style={{height: 30 + 'px', width: 30 + 'px', paddingLeft: 10 + 'px'} }/>
                </a>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="/terms/" color='inherit'>Terms</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/privacy" color='inherit'>Privacy</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Sponsorship
            </Typography>
            DDQIC
          </Grid>
          <Grid item>
            <Typography variant="h2">
              <Icon>
                <img src={Logo} alt='encor-logo'/>
              </Icon>

            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}