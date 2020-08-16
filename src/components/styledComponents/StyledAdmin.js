import styled from 'styled-components';

export const URLHandler = styled.div`
  font-family: roboto;
  text-align: center;
  width: 400px;
  border-radius: 20px;
  border: transparent;
  height: 25px;
  margin-left: 60px;
  margin-top: 15px;
  background: linear-gradient(135.2deg, #4E64F8 5.74%, #CA8CFB 61.35%, #FB8C8C 108.23%);
  box-shadow: 0px 4px 8px 2px rgba(218, 171, 255, 0.36);  
  border-width: 1px;
  border-style: solid;
  @media (max-width: 980px) {
    width: 180px;
  }
`

export const FlexMarginedDiv = styled.div`
  display: flex;
  margin: auto;
`

export const Logo = styled.img`
  width: 100px;
  height: 23px;
  margin-top: 17px;
  margin-right: 20px;
`

export const PhoneOutline = styled.div`
  background: #FFFFFF;
  border: 10px solid #272727;
  box-sizing: border-box;
  border-radius: 20px;
  width: 230px;
  height: 408.89px;
  margin-top: 42px;
  @media (max-width: 980px) {
    flex-direction: column;
    width: 184px;
    height: 327px;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  width: 400px;
`;

export const StyledTabs = styled.button.attrs(props => ({
  className: props.className,
}))`
  &.not-active {
    font-style: 'Roboto';
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    list-style: none;
    margin-top: 5px;
    padding: 16px;
    background: none;
    border: none;
    width: 33%;
    cursor: pointer;
    &:focus {
      outline: 0;
    }
  }
  &.active {
    font-style: 'Roboto';
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    list-style: none;
    margin-top: 5px;
    padding: 16px;
    background: none;
    border: none;
    width: 33%;
    cursor: pointer;
    margin-top: 2px;
    border-bottom: 2px solid #7E74F9;
    outline: none;
  }
`