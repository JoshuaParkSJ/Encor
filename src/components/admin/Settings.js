import React, { useState } from 'react';
import firebase from '../../firebaseconfig';
import { SettingsBox, Free, Pro, Reset, Delete } from '../styledComponents/StyledSettings';
import { Title, Link } from '../styledComponents/StyledLinks';

const AdminCustomizer = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  if (!username) {
    firebase.getAuth().onAuthStateChanged(user => {
      if (user) {
        setEmail(user.email);
        setUsername(user.displayName);
      }
    });
  }
  return (
    <SettingsBox>
      <Title>Settings</Title>
        <Link label={email} disabled />
      <Title>My Link</Title>
        <Link label={username} disabled />
        <Free>Free</Free>
        <Pro className="secondary">upgrade PRO</Pro>
    </SettingsBox>
  );
}

export default AdminCustomizer;
