import styled from 'styled-components';
import Button from './Button';

export const Background = styled.div`
  width: 100%;
  height: 130px; 
  position: relative;
  bottom: 0;
  left: 0;
  background-color: #232323;
`
export const Text = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-size: 14px;
  line-height: 18px;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  margin-right: 25px;
  text-decoration: none;
`

export const Logo = styled.img`
  width: 70px;
  height: 17px;
  margin-left: 50px;
`
export const Signup = styled(Button)`
  margin-top: -10px;
  margin-left: 40px;
  margin-right: 20px;
  width: auto;
  height: auto;
  padding: 8px;
  padding-left: 20px;
  padding-right: 20px;
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

export const HeaderText = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  text-decoration: none;
  line-height: 140.62%;
  color: #484848;
  margin-left: 20px;
  margin-top: -2px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
`

export const InvisibleButton = styled.button`
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
`
