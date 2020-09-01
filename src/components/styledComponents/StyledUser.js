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
  background: linear-gradient(148.51deg, #F8634E 1.8%, #FBD58C 40.75%, #FBE98C 74.84%, #F9FB8C 107.1%);
`

export const Avatar = styled.img`
  margin: auto;
  margin-top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`

export const Username = styled.div`
  margin: auto;
  padding-top: 20px;
  font-family: Roboto;
  font-style: normal;
  line-height: 13px;
  color: #1D1D1D;
`

export const SpotlightLink = styled.a`
  margin: auto;
  padding: 5px;
  font-size: 11px;
  font-weight: 600;
  text-decoration: none;
  color: #1D1D1D;
  background: white;
  border-radius: 20px;
  border-color: white;
  border-width: 1px;
  border-style: solid;
  width: 150px;
  margin-top: 20px;
`
export const Links = styled.div`
  text-align: center;
  padding-top: 20px;
  
  `
export const IconContainer = styled.div`
  text-align: center;
  padding-top: 5px;
  margin: 0 auto;
  width: 300px;
`
export const SocialMediaIcon = styled.button`
  position: relative;
  border-radius: 50%;
  margin-left: auto%;
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