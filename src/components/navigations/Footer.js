import React from 'react';
import { GlobalStyle } from '../styledComponents/GlobalStyle';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../partials/Typography';
import Facebook from '../../assets/images/social-media-icons/facebook-icon.png';
import Instagram from '../../assets/images/social-media-icons/instagram-icon.png'
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
      <GlobalStyle />
      <Container className={classes.container}>
        <Grid container spacing={2} xs={12}>
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
                <Link href="/l/terms" color='inherit'>Terms</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/l/privacy" color='inherit'>Privacy</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/l/contact" color='inherit'>Contact</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Company
            </Typography>
            <ul className={classes.list}>
            <li className={classes.listItem}>
                <Link href="/l/about" color='inherit'>About us</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/l/plans" color='inherit'>Plans</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/l/blog" color='inherit'>Blog</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Help
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="/l/faq" color='inherit'>FAQ</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/l/forgot" color='inherit'>Forgot</Link>
              </li>
            </ul>
          </Grid>
          <Grid item alignItems='center' justify='center'>
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