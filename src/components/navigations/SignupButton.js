import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  background: ' linear-gradient(135.2deg, #4E64F8 5.74%, #7E74F9 33%, #CA8CFB 61.35%, #FB8C8C 108.23%);',
  border: 0,
  borderRadius: 200,
  boxShadow: '0px 4px 8px 2px rgba(218, 171, 255, 0.36))',
  color: 'white',
  height: 37,
  padding: '0 20px',

  '&:hover': {
    background: "linear-gradient(135.2deg, #2B46FF 5.74%, #BD69FF 57.53%, #FE6C6C 108.23%);",
  }

});

export default function SignupButton() {
  return <MyButton onClick={() => window.location = '/register'}>Free Sign Up</MyButton>;
}