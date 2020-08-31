import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  background: 'linear-gradient(100.48deg, #1798FF -6.7%, #982886 133.72%)',
  border: 0,
  borderRadius: 200,
  boxShadow: '0px 4px 8px 2px rgba(218, 171, 255, 0.36))',
  color: 'white',
  height: 37,
  padding: '0 20px',
});

export default function () {
return <MyButton></MyButton>;
}