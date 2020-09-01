import styled from 'styled-components';
import button from '../styledComponents/Button.js';

export const FlexMarginedDiv = styled.div`
  display: flex;
  margin: 0 auto;
`

export const Logo = styled.img`
  width: 100px;
  height: 23px;
  margin-top: 17px;
  margin-right: 20px;
`

export const Navbar = styled.nav`
  display: flex;
  width: 100%;
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

export const LogoutButton = styled(button)`
  margin-top: 10px;
  padding: 12px;
`