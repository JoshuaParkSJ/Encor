import React from 'react'
import { Icon } from "@material-ui/core";
import aLogo from '../../assets/images/logo.svg';
import {LogoStyling} from '../styledComponents/StyledLanding';

const Logo = () => (
  <Icon>
    <LogoStyling>
      <img src={aLogo} />
    </LogoStyling>
  </Icon>
)
export default Logo;