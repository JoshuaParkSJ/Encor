import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

export const ProfileContainer = styled(Grid)`
  text-align: center;
  color: white;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  background: -webkit-linear-gradient(221.2deg, #4E64F8 5.74%, #7E74F9 33%, #CA8CFB 61.35%, #FB8C8C 108.23%); 
`

export const Avatar = styled.img`
  margin: auto;
  margin-top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`

export const Username = styled.div`
  margin: auto;
  padding-top: 20px;
  font-family: Roboto;
  font-style: normal;
  line-height: 13px;
  color: #FFFFF;
`

export const SpotlightLink = styled.a`
  margin: auto;
  padding: 5px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #1D1D1D;
  background: white;
  border-radius: 20px;
  border-color: white;
  border-width: 1px;
  border-style: solid;
  width: 250px;
  margin-top: 20px;

  &:hover { 
    background: none;
    color: white;
  }




`
export const Links = styled.div`
  text-align: center;
  padding-top: 20px;
  
  `
export const IconContainer = styled.div`
  text-align: center;
  padding-top: 5px;
  margin: 0 auto;
  width: 350px;

  @media (max-width: 320px) {
    width: 300px
  }

`
export const SocialMediaIcon = styled.button`
  position: relative;
  border-radius: 50%;
  margin-left: auto%;
  margin-top: 20px;
  width: 3.5em;
  height: 3.5em;  
  border: none;

  &:hover { 
    width: 3.7em;
    height:3.7em;
  }

  &:active { 
    transform: translateY(4px); 
  }


`
export const CardLogo = styled.div`
  position: fixed;
  left: 48.5%;
  bottom: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 14px;
  text-align: center;
  color: #FFFFF;
`;