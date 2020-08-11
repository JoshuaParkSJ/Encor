import React, { useState } from 'react';
import { Route } from "react-router-dom";
import firebase from '../../firebaseconfig';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const Register = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const onRegister = async () => {
    if (username && email && password) {
      try {
        await firebase.register(username, email, password);
        await firebase.login(email, password);
        await firebase.createUserDB();
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <React.Fragment>
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
                      autoComplete="username"
                      name="username"
                      variant="standard"
                      required
                      fullWidth
                      id="userame"
                      label="Username"
                      autoFocus
                      onBlur={e => {setUsername(e.target.value.toLowerCase())}}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onBlur={e => {setEmail(e.target.value)}}
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
                      autoComplete="current-password"
                      onBlur={e => {setPassword(e.target.value)}}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      autoComplete="current-password"
                    />
                  </Grid>
                </Grid>
                <br />
                <Route render={({ history }) => (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={e => {
                    e.preventDefault(); 
                    onRegister();
                    username && email && password ? history.push('/admin') : setError(true);
                  }}
                >
                  Sign Up
                </Button>
                )} />
                {error && <h5>Please enter all the fields</h5>}
                <br />
                <br />
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={8}>
            </Box>
          </Container>
      </div>
    </React.Fragment>
  );
}

export default Register;