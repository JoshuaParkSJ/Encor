import styled from 'styled-components';

export const LinksContainer = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  background: white;
  border-radius: 20px;

`
export const SocialCard = styled.div`
  ${'' /* background: linear-gradient(135deg, #F395BA 0%, #FED182 100%);   */}
  background: linear-gradient(135deg, #1BA9B2 0%, #BCD1FF 100%);
  ${'' /* background: #808080; */}
  border-radius: 10px;
  width: 100%;
  height: 380px;
`;

export const ProfilePicture = styled.div`
  border-radius: 50%;
  position: relative;
  width: 130px;
  height: 130px;
  top: 30px;
  left: 380px;
`;

export const SpotlightLink = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 25px;
  text-align: center;
  color: white;
  margin-top: -20px;
`;

export const SocialMediaIcon = styled.div`
  border-radius: 50%;
  position: relative;
  width: 50px;
  height: 50px;  
`;