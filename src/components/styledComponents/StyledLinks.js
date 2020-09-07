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
  
  @media (max-width: 1250px) {
    height: auto;
    width: 400px;
    right: 0px;
  }

  @media (max-width: 1030px) {
    height: auto;
    width: 300px;
    right: 0px;
  }

  @media (max-width: 733px) {
    height: auto;
    width: 400px;
  }

  @media (max-width: 416px) {
    margin-left: 25px;
    width: 300px;
  }

`

export const URLHandler = styled.div`
  font-family: roboto;
  text-align: center;
  width: 400px;
  border-radius: 20px;
  border: transparent;
  height: 25px;
  margin: 0 auto;
  margin-top: 15px;
  background: linear-gradient(135.2deg, #4E64F8 5.74%, #CA8CFB 61.35%, #FB8C8C 108.23%);
  box-shadow: 0px 4px 8px 2px rgba(218, 171, 255, 0.36);  
  border-width: 1px;
  border-style: solid;

  @media (max-width: 1250px) {
    height: auto;
    width: 300px;
    right: 0px;
  }

  @media (max-width: 1030px) {
    height: auto;
    width: 250px;
    right: 0px;
  }

`

export const PhoneOutline = styled.div`
  background: black;
  border: 10px solid #272727;
  box-sizing: border-box;
  border-radius: 20px;
  width: 230px;
  height: 408.89px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 50px;
  padding:0p;

`;

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

  @media (max-width: 428px) {
    width: 75%;
  }
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
  @media (max-width: 981px) {
    left: 350px;
    top: -50px;
  }

  @media (max-width: 416px) {
    left: 300px;
  }
`

export const ApplyButton = styled(Button)`
  position: relative;
  top: 45px;
  left: 230px;
  float: right;
  width: 200px;
  height: 30px; 

  @media (max-width: 980px) {
    width: 100px;
    left: 170px;
    font-size: 12px;
  }

  @media (max-width: 420px) {
    left: 120px;
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

  @media (max-width: 428px) {
    top: 12px;
    left: 52px;
  }
`

export const MarginDiv = styled.div`
  margin-top: 21px;
  margin-left: 32px;

  @media (max-width: 733px) {
    margin-top: 15px;
    margin-left: 0px;
  }
`