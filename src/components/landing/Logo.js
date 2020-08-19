import React from 'react'
import { Icon } from "@material-ui/core";
import aLogo from '../../assets/images/logo.svg';

const Logo = () => (
    <Icon>
        <img src={aLogo} alt="Logo"width='150px' height='100px' />
    </Icon>
)
export default Logo;