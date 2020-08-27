import React from 'react';
import { BoxDiv, Tagline, AboutBannerImage } from '../styledComponents/StyledLegal';
import Footer from '../navigations/Footer';
import Navbar from '../navigations/Navbar';
import { Typography, Box } from '@material-ui/core';
import Office from '../../assets/images/office.png'

const Terms = () => {
  return (
    <React.Fragment>
    <Navbar />
    <BoxDiv>
      <Tagline style={{fontFamily: 'Roboto'}}>About us</Tagline>
      <Typography variant='h5'> <br/>Encor puts your entire digital presence into one easy to share, find and customized place.<br/>
        <AboutBannerImage src={Office} alt="office"/>
        <br/>
        <Box fontWeight="fontWeightBold">We’re a tool for connecting with new friends and maintaining old ones. </Box><br/>
        An Encor card not only allows you to instantly share all your social media handles to new friends, it let’s you do it through 
        a completely customized and personalized link. Encor cards are also great for sharing new social media handles to your existing
        friend network.<br/>
      </Typography>

      <Tagline style={{fontFamily: 'Roboto'}}>Story</Tagline>
      <Typography variant='h5'>
      <br/>
      In 2020 four university students realized that connecting via social media was becoming an increasing pain point as the 
      number of platforms rised. Trying to find a specific person among billions of social media accounts was frustrating and difficult. 
      It was also extremely hard to keep track of all your usernames and links. To fix this problem Encor was born. 
      We’re a young team of developers, designers, marketers, and entrepreneurs who are passionate about making it easier for 
      students to connect with other students. Entering university can be a scary and difficult time, and we want to make that 
      transition easier for everyone. Using Encor it will be easier and better to connect with new friends. 
      <br/><br/><br/><br/>
      Encor is 100% founder-owned.
      </Typography>
    </BoxDiv>
    <Footer />
    </React.Fragment>
  )
}
      
export default Terms