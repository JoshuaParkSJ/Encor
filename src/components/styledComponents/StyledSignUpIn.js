import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';
import Button from './Button';

export const Logo = styled.img`
  width: 100px;
  height: 23px;
  padding-top: 40px;
  padding-bottom: 40px;
  position: center;
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
  position: center;
  text-align: center;
  margin: 100px;
  margin-left: 25%;
  margin-right: 25%;
  padding-bottom: 50px;
`

export const Text = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140.62%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  padding-bottom: 100px;
`
export const Text2 = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140.62%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  padding-bottom: 0px;
`
export const InvisibleButton = styled.button`
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
`
