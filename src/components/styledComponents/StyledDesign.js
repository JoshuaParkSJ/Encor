import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

export const DesignBox = styled.div`
  height: auto;
  width: 600px;
  position: center;
  right: 100px;
  border-radius: 10px;
  background: #FFFFFF;
  @media (max-width: 980px) {
    height: auto;
    width: 400px;
    right: 0px;
  }
`;

export const StyledGrid = styled(Grid)`
  height: auto;
  width: auto;
  padding: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StyledRow = styled(Row)`
  margin: 50px;
`;

export const StyledCol = styled(Col)`
  margin: 10px;
`;

export const ColorPallete = styled.button.attrs(props => ({
    className: props.className,
}))`
  &.one {
    background: linear-gradient(137.77deg, #664EF8 15.74%, #9B8CFB 36.81%, #CA8CFB 56.55%, #FB8C8C 83.76%);
  }
  &.two {
    background: linear-gradient(135deg, #F8634E 11.56%, #FBD58C 37.68%, #FBE98C 60.26%, #F9FB8C 84.61%);
  }
  &.three {
    background: linear-gradient(134.6deg, #4EE3F8 10.62%, rgba(140, 251, 244, 0.76) 30.64%, #8CFBBF 54.84%, #A9FB8C 82.78%);
  }
  &.four {
    background: #FDFDFD;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);  
  }
  &.five {
    background: #5FA684;
  }
  &.six {
    background: #FFF7AD;
  }
  &.seven {
    background: #8CEAF7;
  }
  &.eight {
    background: #2B2B2B;
  }
  &.nine {
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  height: 80px;
  width: 80px;
  border-radius: 10px;
  border: none;
  outline: none;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
  &:active { 
    transform: translateY(4px); 
  }
}
`