import styled from 'styled-components';

const Button = styled.button.attrs(props => ({
    className: props.className,
}))`
  &.primary {
    background: linear-gradient(135.2deg, #4E64F8 5.74%, #7E74F9 33%, #CA8CFB 61.35%, #FB8C8C 108.23%);
    box-shadow: 0px 4px 8px 2px rgba(218, 171, 255, 0.36);
    border-radius: 20px;
    transition: all 0.3s ease 0s;
    outline: none;
    &:hover {
      background: #5E5E5E;
      box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
      color: #fff;
      transform: translateY(-7px);
    }
  }
  &.secondary {
    background: linear-gradient(100.48deg, #1798FF -6.7%, #982886 133.72%);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    transition: all 0.3s ease 0s;
    color: white;
    outline: none;
    &:hover {
      background: linear-gradient(0deg, rgba(89, 89, 89, 0.26), rgba(89, 89, 89, 0.26)), linear-gradient(100.48deg, #1798FF -6.7%, #982886 133.72%);      box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
      color: #fff;
      transform: translateY(-7px);
    }
  }
  &.white {
    background: #FFFFFF;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    transition: all 0.3s ease 0s;
    outline: none;
    &:hover {
      background: #5E5E5E;
      box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
      color: #fff;
      transform: translateY(-7px);
    }
  }
`;

export default Button;