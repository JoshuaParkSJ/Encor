import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';
import Button from './Button';

export const Logo = styled.img`
  width: 100px;
  height: 23px;
  margin: 30px;
  margin-right: 40px;
`

export const HeaderLink = styled.a`
  float: right;
  margin-top: 20px;
  margin-right: 40px;
  position: relative;
  top: 10px;
  text-decoration: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`

export const SignupButton = styled(Button)`
  margin: auto;
  marginTop: 10px;
  width: auto;
  height: auto;
  padding: 8px;
  padding-left: 80px;
  padding-right: 80px;
  border: none;
  color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 23px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  text-align: center;
`

export const Header = styled(Row)`
  display: 'flex';
`
export const ContentBox = styled.div`
  position: relative;
  text-align: center;
  margin: auto;
  width: 500px;
`

export const Text = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140.62%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
`