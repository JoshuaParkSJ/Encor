import styled from 'styled-components';
import Button from './Button';
import TextField from '@material-ui/core/TextField';

export const ProfileBox = styled.div`
  height: auto;
  width: 600px;
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

export const LinkBox = styled.div`
  height: auto;
  width: 600px;
  padding-bottom: 40px;
  margin-bottom: 20px;
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

export const UploadImage = styled(Button)`
  width: 200px;
  height: 30px;
  position: relative; 
  top: -100px;
  right: -120px;
`;

export const RemoveImage = styled(Button)`
  width: 200px;
  height: 30px; 
  position: relative; 
  top: -50px; 
  right: 80px;
`;

export const Title = styled.h1`
  font-family: 'Roboto';
  margin-left: 20px;
  padding-top: 20px;
`

export const Profile = styled.img`
  border-radius: 50%;
  margin-left: 100px;
  margin-bottom: 30px;
  width: 100px;
  height: 100px;
`;

export const Link = styled(TextField)`
  width: 90%;
  position: relaitve;
  left: 30px;
  bottom: 10px;
`;

export const AddLinkButton = styled.button`
  position: relative;
  top: -55px;
  left: 540px;
  width: 25px;
  height: 25px;
  border: none;
  background: transparent;
  outline: none;
`

export const ApplyButton = styled(Button)`
  position: relative;
  top: 45px;
  left: 245px;
  float: right;
  width: 200px;
  height: 30px; 
`