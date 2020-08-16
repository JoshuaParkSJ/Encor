import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Features from './Features';
import Footer from './Footer';
import Grid from '@material-ui/core/Grid'

const Landing = () => 
  <div>
    <Navbar/>
    <Banner/>
    <Features/>
    <Footer/>
  </div>

export default Landing;