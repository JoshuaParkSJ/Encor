import React from 'react';
import { BoxDiv, Tagline } from '../styledComponents/StyledLegal';
import Footer from '../navigations/Footer';
import Navbar from '../navigations/Navbar';

const Terms = () => {
  return (
    <React.Fragment>
    <Navbar />
    <BoxDiv>
      <Tagline style={{fontFamily: 'Roboto'}}>Forgot Password</Tagline>
      <h3>Sorry, Website under constrution :(</h3>
    </BoxDiv>
    <Footer />
    </React.Fragment>
  )
}
      
export default Terms