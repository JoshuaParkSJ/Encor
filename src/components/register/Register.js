import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import { Row, Col } from 'react-flexbox-grid';
import firebase from '../../firebaseconfig';
import Footer from '../navigations/Footer';
import { Logo, HeaderLink, ContentBox, Text, SignupButton, InvisibleButton, Text2 } from '../../components/styledComponents/StyledSignUpIn';
import Encor from '../../assets/images/logo.svg';
import Header from '../navigations/Navbar';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

const Register = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [existError, setExistError] = useState(false);
  const [existEmailError, setExistEmailError] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const [registerReady, setRegisterReady] = useState(false);

  const onRegister = () => {
    if (agree && username && email && password && password === confirmPassword) {
      setTermsError(false);
      setError(false);
      setPwError(false);
      firebase.getDB().collection('users').doc(username).get().then(doc => {
        if (doc.exists) {
          setExistError(true);
        } else {
          setExistError(false);
          firebase.getAuth().createUserWithEmailAndPassword(email, password).then(user => {
            firebase.getAuth().currentUser.updateProfile({
              displayName: username,
            });
            setExistEmailError(false);
            firebase.getDB().collection('users').doc(username).set({
              links: [],
            }).then(() => {
              setRegisterReady(true);
            })
          }).catch(e => {
            console.log(e);
            setExistEmailError(true);
          });
        }
      }).catch(e => {
        console.log(e);
      })
    } else if (!agree) {
      setTermsError(true);
    } else if (!(email && username && password)) {
      setError(true);
    } else if (password !== confirmPassword) {
      setPwError(true);
    }
  }

  useEffect(() => {
    if (registerReady) {
      window.location.href = '/admin';
    }
  }, [registerReady])

  return (
    <React.Fragment>
      <Header>
        <Col xs={6}>
          <InvisibleButton onClick={() => window.location.href = '/'}>
            <Logo src={Encor} alt='Encor logo'/>
          </InvisibleButton>
        </Col>
        <Col xs={6}>
          <HeaderLink href="/login">Login</HeaderLink>
        </Col>
      </Header>
      <ContentBox>
        <InvisibleButton onClick={() => window.location.href = '/'}>
          <Logo src={Encor} alt='Encor logo' style={{width: '200px', height: '46px'}} />
        </InvisibleButton>
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
            onChange={e => {setUsername(e.target.value.toLowerCase())}}
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
            onChange={e => {setEmail(e.target.value)}}
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
            onChange={e => {setPassword(e.target.value)}}
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
            onChange={e => {setConfirmPassword(e.target.value)}}
          />
      <br />
      <br />
      <Row style={{marginTop: '10px'}}>
        <div style={{margin: 'auto'}}>
          <Row>
            <Checkbox color="primary" style={{height: '0px', paddingTop: '20px'}} onClick={() => setAgree(!agree)} />
            <Text2>I agree to <strong><a href='/l/terms' style={{textDecoration: 'none'}}>Terms of Services</a></strong></Text2>
          </Row>
        </div>
      </Row>
      <br />
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
        }}
      >
        Sign Up
      </SignupButton>
      {error && <Text style={{color: 'red'}}>Please enter all fields</Text> }
      {pwError && <Text style={{color: 'red'}}>Passwords are not matching</Text> }
      {termsError && <Text style={{color: 'red'}}>Please agree with our terms of service</Text> }
      {existError && <Text style={{color: 'red'}}>Username already exists</Text> }
      {existEmailError && <Text style={{color: 'red'}}>User with email already exists</Text> }
      </ContentBox>
      <br />
      <br />
      <Footer />
    </React.Fragment>
  );
}

export default Register;