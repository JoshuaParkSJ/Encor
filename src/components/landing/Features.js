import React, { useEffect, useRef} from 'react';
import {FeaturesContainer, TextContainer2, TextContainer3, BannerAnimation, BannerAnimation2, Tagline} from '../styledComponents/StyledLanding';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import lottie from 'lottie-web';
import Fade from '@material-ui/core/Fade';
import Box from "@material-ui/core/Box";

const Features = () => {

  const animation1 = useRef(null);
  const animation2 = useRef(null);
  const animation3 = useRef(null);
  const animation4 = useRef(null);
  

  useEffect(() => {
    lottie.loadAnimation({
      container: animation1.current,
      renderer: 'svg',
      loop: true,
      autoplay: true, 
      animationData: require('../../assets/images/banner-card-animation.json'),
      rendererSettings: {
        scaleMode: 'noScale',
      }
    })
  }, [])

  useEffect(() => {
    lottie.loadAnimation({
      container: animation2.current,
      renderer: 'svg',
      loop: true,
      autoplay: true, 
      animationData: require('../../assets/images/feature-card.json'),
      rendererSettings: {
        scaleMode: 'noScale',
      }
    })
  }, [])

  useEffect(() => {
    lottie.loadAnimation({
      container: animation3.current,
      renderer: 'svg',
      loop: true,
      autoplay: true, 
      animationData: require('../../assets/images/feature-card-2.json'),
      rendererSettings: {
        scaleMode: 'noScale',
      }
    })
  }, [])

  useEffect(() => {
    lottie.loadAnimation({
      container: animation4.current,
      renderer: 'svg',
      loop: true,
      autoplay: true, 
      animationData: require('../../assets/images/feature-card-3.json'),
      rendererSettings: {
        scaleMode: 'noScale',
      }
    })
  }, [])

  return  (
  <>
  <FeaturesContainer>
    <Grid container spacing={3} alignItems="center" justify="center">
      <Box clone order={{ xs: 3, md: 2 }}>
        <Grid item lg={6}>
            <BannerAnimation2 ref={animation2}></BannerAnimation2>
        </Grid>
      </Box>
      <Box clone order={{ xs: 2, md: 3 }}>
        <Grid item lg={6}>
        <Fade in='true' timeout={1000}>
            <TextContainer2>
              <Tagline style={{fontFamily: 'Roboto'}}>Add Your Social Media</Tagline>
              <Typography > Out of our 30+ generic social media icons <br/>
                  click them to enable as many social<br/>
                  media handles as you want!s</Typography >
            </TextContainer2>
          </Fade>
        </Grid>
      </Box>
    </Grid>
    </FeaturesContainer>

    <FeaturesContainer>
    <Grid container spacing={3}  alignItems="center" justify="center">
        <Grid item md={6}>
        <Fade in='true' timeout={1000}>
            <TextContainer3>
              <Tagline style={{fontFamily: 'Roboto'}}>Minimalist Design</Tagline>
              <Typography > Customize your card to<br/> help you connect with<br/> your peers</Typography >
            </TextContainer3>
          </Fade>
        </Grid>
        <Grid item md={6}>
          <BannerAnimation ref={animation4}></BannerAnimation>
        </Grid>
    </Grid>
    </FeaturesContainer>

    <FeaturesContainer>
    <Grid container spacing={3} alignItems="center" justify="center">
      <Box clone order={{ xs: 3, md: 2 }}>
        <Grid item lg={6}>
            <BannerAnimation2 ref={animation3}></BannerAnimation2>
        </Grid>
      </Box>
      <Box clone order={{ xs: 2, md: 3 }}>
        <Grid item lg={6}>
        <Fade in='true' timeout={1000}>
            <TextContainer2>
              <Tagline style={{fontFamily: 'Roboto'}}>Real Time Data</Tagline>
              <Typography > Get live data analyitics to <br/>enhance better user reach </Typography >
            </TextContainer2>
          </Fade>
        </Grid>
      </Box>
    </Grid>
    </FeaturesContainer>
  </>
  )};

export default Features;



