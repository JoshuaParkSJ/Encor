import styled from 'styled-components'

export const BoxDiv = styled.div`
  font-family: 'Roboto';
  margin: 250px;
  margin-top: 100px;

  @media (max-width: 960px) {
    padding-top: 50px;
    margin: 50px;
  }

  
`

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
    font-family: Roboto;
  }
`;

export const AboutBannerImage = styled.img`
  
  width: 100%;
`
