import React, { useState } from 'react';
import { Route } from "react-router-dom";
import { Row, Col } from 'react-flexbox-grid';
import firebase from '../../firebaseconfig';
import Footer from '../footer/Footer';
import { Logo, Header, HeaderLink, ContentBox, Text, SignupButton } from '../../components/styledComponents/StyledSignUpIn';
import Encor from '../../assets/images/logo.png';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

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
        firebase.createUserDB();
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <React.Fragment>
      <Header>
        <Col xs={6}>
          <Logo src={Encor} alt='Encor logo' />
        </Col>
        <Col xs={6}>
          <HeaderLink href="/login">Login</HeaderLink>
        </Col>
      </Header>
      <ContentBox>
        <Logo src={Encor} alt='Encor logo' style={{width: '200px', height: '46px'}} />
          <TextField
            style={{marginTop: '10px'}}
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
          <TextField
            style={{marginTop: '10px'}}
            variant="standard"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onBlur={e => {setEmail(e.target.value)}}
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
            autoComplete="current-password"
            onBlur={e => {setPassword(e.target.value)}}
          />
          <TextField
            style={{marginTop: '10px'}}
            variant="standard"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
          />
      <br />
      <br />
      <Row style={{marginTop: '10px'}}>
        <div style={{margin: 'auto'}}>
          <Row>
            <Checkbox color="primary" />
            <Text>I agree to <strong>Terms of Services</strong></Text>
          </Row>
        </div>
      </Row>
      <br />
      <Route render={({ history }) => (
      <SignupButton
        className='primary'
        style={{marginTop: '10px'}}
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
      </SignupButton>
      )} />
      {error && <Text style={{color: 'red'}}>Please enter all fields</Text> }
      </ContentBox>
      <br />
      <br />
      <Footer />
    </React.Fragment>
  );
}

export default Register;