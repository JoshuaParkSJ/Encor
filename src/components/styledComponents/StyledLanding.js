import styled from 'styled-components';

export const BannerContainer = styled.div`
  height: 550px;
  width: 100%;
  padding-top: 55px;

  @media (max-width: 1200px) {
      padding-top: 105px;
      height: 650px;
    }
`;

export const FeaturesContainer = styled.div`
  height: 650px;
  width: 100%;

  @media (max-width: 1200px) {
    height: 750px;

  }
  @media (max-width: 960px) {
    height: 650px;

  }
`;

export const Features2Container = styled.div`
  height: 550px;
  width: 100%;
`;

export const TextContainer = styled.div`
  width: 100%;
  padding-left: 150px;
  @media (max-width: 960px) {
      text-align:center;
      padding-left: 10px
    }
`;
export const TextContainer2 = styled.div`
  width: 550px;
  padding-left: 7%;
  position: relative;


    @media (max-width: 960px) {
        padding-top: 0px;
        padding-left: 0px;
        width: 100%;
      
    }
`;

export const TextContainer3 = styled.div`
  width: 550px;
  padding-left: 150px;
  @media (max-width: 960px) {
      padding-left: 0px;   
      padding-bottom: 30px;
      width: 100%  
    }
`;


export const Tagline = styled.h1`
  margin-bottom: 0;
  font-family: Roboto;
  src: url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap") format('woff2');
  background: -webkit-linear-gradient(221.2deg, #4E64F8 5.74%, #7E74F9 33%, #CA8CFB 61.35%, #FB8C8C 108.23%); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  visibility: visible;
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: opacity 1.5s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2.5s cubic-bezier(0.5, 0, 0, 1) 0s;
  font-size: 3.2em;

  @media (max-width: 960px) {
    font-size: 2em;
  }
`;

export const BannerAnimation = styled.div`
  width: 550px;
  text-align: center;
  padding-left: 5%;
  @media (max-width: 960px) {
      width: 400px;
      padding-left: 0px;
    }
`;

export const BannerAnimation2 = styled.div`
  width: 550px;
  text-align: center;
  padding-left 100px;

  @media (max-width: 960px) {
      width: 400px;
      padding-left: 0px
    }
`;

export const LogoStyling = styled.div`
  padding-left: 12px
`;

export const FooterContainer = styled.div`
  width: 100%;
  background-color: #888888;
  color: white;
`;


export const DynamicURLAnimation =  styled.div`
    width: 300px;
    color: black;
    border-radius: 25px;
    border: 1px solid;

    .border-gradient {
      border: 10px solid;
      border-image-slice: 1;
      border-width: 5px;
    }
    .border-gradient-purple {
      border-image-source: linear-gradient;
   
`