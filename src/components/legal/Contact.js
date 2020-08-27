import React from 'react';
import { BoxDiv, Tagline} from '../styledComponents/StyledLegal';
import Footer from '../navigations/Footer';
import Navbar from '../navigations/Navbar';

const Terms = () => {
  return (
    <React.Fragment>
    <Navbar />
    <BoxDiv>
      <Tagline style={{fontFamily: 'Roboto'}}>Contact Us</Tagline>
      <br/>
      <h3>Got a question? We'd love to hear from you</h3>
      <h3>Email us at helloencor@gmail.com</h3>
    </BoxDiv>
    <Footer />
    </React.Fragment>
  )
}
      
export default Terms