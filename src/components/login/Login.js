import React, { useState } from 'react';
import { Route } from "react-router-dom";
import { Col } from 'react-flexbox-grid';
import firebase from '../../firebaseconfig';
import Footer from '../navigations/Footer';
import { Logo, HeaderLink, ContentBox, Text, SignupButton, InvisibleButton } from '../../components/styledComponents/StyledSignUpIn';
import Encor from '../../assets/images/logo.svg';
import Header from '../navigations/Navbar';

import TextField from '@material-ui/core/TextField';


const Register = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const login = async () => {
    let logged = false;
    try {
      await firebase.login(email, password);
      console.log(firebase.isLoggedIn());
      logged = true;
    } catch (e) {
      logged = false;
    }
    logged ? window.location.href = '/admin' : setError(true);
  }

  return (
      <React.Fragment>
      <Header>
        <Col xs={6}>
          <InvisibleButton onClick={() => window.location.href = '/'}>
            <Logo src={Encor} alt='Encor logo'/>
          </InvisibleButton>
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
          margin='normal'
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
          }}
        >
          Login
        </SignupButton>
        <br />
        <Text>Forgot password? <a href='/l/forgot' style={{color: 'black'}}>click here</a></Text>
        {error && <Text style={{color: 'red'}}>Invalid credentials</Text> }
      </ContentBox>
      <Footer />
    </React.Fragment>
  );
}

export default Register;