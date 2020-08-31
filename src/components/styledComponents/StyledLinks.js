import styled from 'styled-components';
import Button from './Button';
import TextField from '@material-ui/core/TextField';

export const ProfileBox = styled.div`
  height: auto;
  width: 600px;
  position: center;
  
  border-radius: 10px;
  background: #FFFFFF;

  @media (max-width: 980px) {
    height: auto;
    width: 400px;
    right: 0px;
  }

  @media (max-width: 414px) {
    width: 350px;

  }

`;

export const UserPreviewBox = styled.div`
height: auto;
width: 600px;
position: center;
right: 100px;
border-radius: 10px;
background: #FFFFFF;
padding-top: 10px;
padding-bottom: 10px;

@media (max-width: 980px) {
  height: auto;
  width: 400px;
  right: 0px;
}

@media (max-width: 414px) {
  width: 350px;

}

`

export const LinkBox = styled.div`
  height: auto;
  width: 600px;
  padding-bottom: 40px;
  margin-bottom: 20px;
  margin-top: 30px;
  position: center;
  right: 100px;
  border-radius: 10px;
  background: #FFFFFF;
  @media (max-width: 980px) {
    height: auto;
    width: 400px;
    right: 0px;
  }

  @media (max-width: 414px) {
    height: auto;
    width: 350px;
    right: 0px;
    margin: auto;
    padding-top: 10px;
  }
`;

export const UploadImage = styled(Button)`
  width: 200px;
  height: 30px;
  position: relative; 
  top: -100px;
  right: -120px;

  @media (max-width: 980px) {
    width: 100px;
    right: -60px;
    font-size: 12px;
  }
`;

export const RemoveImage = styled(Button)`
  width: 200px;
  height: 30px; 
  position: relative; 
  top: -50px; 
  right: 80px;

  @media (max-width: 980px) {
    width: 100px;
    right: 40px;
    font-size: 12px;
  }

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
  object-fit: cover;

  @media (max-width: 980px) {
    margin-left: 50px;
  }
`;

export const Link = styled(TextField)`
  width: 85%;
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
  cursor: pointer;
`

export const ApplyButton = styled(Button)`
  position: relative;
  top: 45px;
  left: 245px;
  float: right;
  width: 200px;
  height: 30px; 

  @media (max-width: 980px) {
    width: 100px;
    left: 170px;
    font-size: 12px;
  }
`

export const Remove = styled.img`
  position: relative;
  right: 5px;
  width: 20px;
  height: 20px;
`

export const RemoveButton = styled.button`
  position: relative;
  border: none;
  outline: none;
  background: none;
  width: 20px;
  height: 20px;
  cursor: pointer;
  left: 33px;
  top: 17px;
`