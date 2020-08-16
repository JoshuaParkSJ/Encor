import React, { useState } from 'react';
import { Route } from "react-router-dom";
import { Col } from 'react-flexbox-grid';
import firebase from '../../firebaseconfig';
import Footer from '../footer/Footer';
import { Logo, Header, HeaderLink, ContentBox, Text, SignupButton } from '../../components/styledComponents/StyledSignUpIn';
import Encor from '../../assets/images/logo.png';

import TextField from '@material-ui/core/TextField';

const Register = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);

  const login = async () => {
    try {
      await firebase.login(email, password);
      console.log(firebase.isLoggedIn());
      setLogged(true);
    } catch (e) {
      setLogged(false)
    }
  }

  return (
      <React.Fragment>
      <Header>
        <Col xs={6}>
          <Logo src={Encor} alt='Encor logo'/>
        </Col>
        <Col xs={6}>
          <HeaderLink href="/register">Sign Up Free</HeaderLink>
        </Col>
      </Header>
      <ContentBox>
        <Logo src={Encor} alt='Encor logo' style={{width: '200px', height: '46px'}} />
        <TextField
          style={{marginTop: '10px'}}
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
        <TextField
          style={{marginTop: '10px'}}
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
        <br />
        <br />
        <Route render={({ history }) => (
          <SignupButton
            className='primary'
            style={{marginTop: '30px'}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={e => {
              e.preventDefault(); 
              login();
              email && password && logged ? history.push('/admin') : setError(true);
            }}
          >
            Login
          </SignupButton>
        )} />
        <br />
        <Text>Forgot password?</Text>
        {error && <Text style={{color: 'red'}}>Please enter all fields</Text> }
      </ContentBox>
      <Footer />
    </React.Fragment>
  );
}

export default Register;