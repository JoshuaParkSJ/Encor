import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

export const ProfileContainer = styled(Grid)`
  text-align: center;
  color: white;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: -webkit-linear-gradient(221.2deg, #4E64F8 5.74%, #7E74F9 33%, #CA8CFB 61.35%, #FB8C8C 108.23%); 
  border-radius: 9px;
  margin: 0 auto;
  

`

export const Avatar = styled.img`
  margin: auto;
  margin-top: 50px;
  vertical-align: middle;
  width: 60px;
  height: 60px;
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
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  color: #1D1D1D;
  background: white;
  border-radius: 20px;
  border-color: white;
  border-width: 1px;
  border-style: solid;
  text-align: center;
  width: 150px;
  height: 20px;
  margin-top: 20px;
`
export const Links = styled.div`
  text-align: center;
  padding-top: 20px;
  
  `
export const IconContainer = styled.div`
  text-align: center;
  padding-top: 2px;
  margin: 0 auto;
  width: 120px;
`
export const SocialMediaIcon = styled.button`
  position: relative;
  border-radius: 50%;
  margin-left: auto;
  margin-top: 20px;
  width: 2em;
  height: 2em;  
  border: none;
`
export const CardLogo = styled.div`
  position: relative;
  padding-top: 220px;
  bottom: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 14px;
  text-align: center;
  color: #1D1D1D;
`;