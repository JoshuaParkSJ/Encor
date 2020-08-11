import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import firebase from '../../firebaseconfig';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminState, setAdminState] = useState(false);

  const login = async () => {
    await firebase.login(email, password);
    console.log(firebase.isLoggedIn());
    setAdminState(true);
  }

  return (
    <React.Fragment>
    { !adminState ? 
    <section>
      <div className="container-sm">
        <div className="Hero-content">
            <h1 className="mt-2 mb-16 reveal-from-bottom" data-reveal-delay="200">
             encor
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Sign up for your Adripa account
              </p>
            </div>
          </div>
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="reveal-from-bottom">              
              <form noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      id="usernameOrEmail"
                      label="Email"
                      name="standard-basic"
                      value={email}
                      onChange={e => {setEmail(e.target.value)}}
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      value={password}
                      onChange={e => {setPassword(e.target.value)}}
                      autoComplete="current-password"
                    />
                  </Grid>
                </Grid>
                <br />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={e => {e.preventDefault(); login();}}
                >
                  Log in
                </Button>
                <br />
                <br />
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="/register" variant="body2">
                      Don't have an account? Register
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
      </div>
    </section> : 
    <Redirect to="/admin" />}
    </React.Fragment>
  );
}

export default Register;