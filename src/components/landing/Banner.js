import React, { useEffect, useRef} from 'react';
import {BannerContainer, TextContainer, BannerAnimation, Tagline, DynamicURLAnimation, URLPlaceholder} from '../styledComponents/StyledLanding';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import lottie from 'lottie-web';
import Fade from '@material-ui/core/Fade';
import Input from '../../assets/images/input.png';
import 'fontsource-roboto';

const Banner = () => {

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true, 
      animationData: require('../../assets/images/banner-card-animation.json'),
      rendererSettings: {
        scaleMode: 'noScale',
      }
    })
  }, [])

  return  (

  <BannerContainer>
    <Grid container spacing={0} sm={12}  alignItems="center" justify="center" >
      <Grid item md={6}>
        <Fade in='true' timeout={1000}>
          <TextContainer>
            <Tagline>Link all your socials <br/> into a specialized platform</Tagline>
            <Typography variant="subtitle1" > Connect with your peers for free</Typography >
            <URLPlaceholder src={Input}/>
            {/*<DynamicURLAnimation><Typography> encor.cc</Typography></DynamicURLAnimation> */}
          </TextContainer>
        </Fade>
      </Grid>
      <Grid item md={6} justify='center' >
        <BannerAnimation ref={container}></BannerAnimation>
      </Grid>
    </Grid>
  </BannerContainer>
  )};

export default Banner;


