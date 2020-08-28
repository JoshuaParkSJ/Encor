import React, { useState, useRef } from 'react';
import firebase from '../../firebaseconfig';
import { Row, Col } from 'react-flexbox-grid';
import { GlobalGray } from '../styledComponents/GlobalStyle';
import { Navbar, StyledTabs, Logo, FlexMarginedDiv } from '../styledComponents/StyledAdmin';
import Encor from '../../assets/images/logo.png';
import Links from './Links';
import Design from './Design';
import Settings from './Settings';

const Admin = () => {  
  const [username, setUsername] = useState('');
  const [activeTab, setActiveTab] = useState({
    links: 'active',
    design: 'not-active',
    settings: 'not-active',
  });

  if (!username) {
    firebase.getAuth().onAuthStateChanged(user => {
      if (user) {
        setUsername(user.displayName);
      }
    });
  }

  const handleClick = e => {
    if (e.target.value === 'links') {
      setActiveTab({
        links: 'active',
        design: 'not-active',
        settings: 'not-active',
      })
    }
    if (e.target.value === 'design') {
      setActiveTab({
        links: 'not-active',
        design: 'active',
        settings: 'not-active',
      })
    }
    if (e.target.value === 'settings') {
      setActiveTab({
        links: 'not-active',
        design: 'not-active',
        settings: 'active',
      })
    }
  }

  return (
    <React.Fragment>
      <GlobalGray />
      <Row style={{ background: 'white', position: 'relative', top: '-7px'}}>
        <FlexMarginedDiv>
          <Logo src={Encor} alt="Encor logo" />
          <Navbar>
            <StyledTabs className={activeTab.links} value='links' onClick={handleClick}>Links</StyledTabs>
            <StyledTabs className={activeTab.design} value='design' onClick={handleClick}>Design</StyledTabs>
            <StyledTabs className={activeTab.settings} value='settings' onClick={handleClick}>Settings</StyledTabs>
          </Navbar>
        </FlexMarginedDiv>
      </Row>
      <Row style={{ background: '#F2F2F2' }}>
        <FlexMarginedDiv>
          <Col xs>
            {activeTab.links === 'active' ? <Links /> : null}
            {activeTab.design === 'active' ? <Design /> : null}
            {activeTab.settings === 'active' ? <Settings /> : null}
          </Col>
        </FlexMarginedDiv>
      </Row>
    </React.Fragment>
  );
}

export default Admin;