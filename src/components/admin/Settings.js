import React from 'react';
import { SettingsBox, Free, Pro, Reset, Delete } from '../styledComponents/StyledSettings';
import { Title, Link } from '../styledComponents/StyledLinks';

const AdminCustomizer = () => {
  
  return (
    <SettingsBox>
      <Title>Settings</Title>
        <Link label="Name" />
        <Link label="Email" />
      <Title>My Link</Title>
        <Link label="Username" />
        <Free>Free</Free>
        <Pro className="secondary">upgrade PRO</Pro>
      <Title>Actions</Title>
        <Reset className="tertiary2">Reset</Reset>
        <Delete className="tertiary1">Delete</Delete>
    </SettingsBox>
  );
}

export default AdminCustomizer;
