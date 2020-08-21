import React from 'react';
import { Box } from '../styledComponents/StyledLegal';
import Footer from '../navigations/Footer';
import Navbar from '../navigations/Navbar';

const Terms = () => {
  return (
    <React.Fragment>
    <Navbar />
    <Box>
      <h1>Contact Us</h1>
      <br/>
      <h3>Got a question? We'd love to hear from you</h3>
      <h3>Email us at helloencor@gmail.com</h3>
    </Box>
    <Footer />
    </React.Fragment>
  )
}
      
export default Terms