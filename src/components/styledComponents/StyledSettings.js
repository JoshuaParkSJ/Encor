import styled from 'styled-components';
import Button from './Button';

export const SettingsBox = styled.div`
  height: auto;
  width: 600px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  position: relative;
  right: 100px;
  border-radius: 10px;
  background: #FFFFFF;
  @media (max-width: 980px) {
    height: auto;
    width: 400px;
    right: 0px;
  }
`;

export const Free = styled.h4`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  margin-left: 30px;
`;

export const Pro = styled(Button)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  float: right;
  margin-right: 30px;
  margin-top: -45px;
  color: white;
  width: 150px;
`;

export const Reset = styled(Button)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  margin-left: 30px;
  color: white;
  width: 150px;
`;

export const Delete = styled(Button)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  margin-left: 30px;
  margin-bottom: 50px;
  position: relative;
  top: 50px;
  left: -180px;
  color: white;
  width: 150px;
`;