import React, { useState, useEffect } from 'react';
import firebase from '../../firebaseconfig';
import { Row, Col } from 'react-flexbox-grid';
import { GlobalGray } from '../styledComponents/GlobalStyle';
import { Navbar, StyledTabs, Logo, FlexMarginedDiv, LogoutButton } from '../styledComponents/StyledAdmin';
import { InvisibleButton } from '../styledComponents/StyledHeaderFooter';
import Encor from '../../assets/images/logo.svg';
import Links from './Links';
import Design from './Design';
import Settings from './Settings';
import Grid from '@material-ui/core/Grid';

const Admin = () => {  
  const [username, setUsername] = useState('');
  const [authStatus, setAuthStatus] = useState(false);
  const [activeTab, setActiveTab] = useState({
    links: 'active',
    design: 'not-active',
    settings: 'not-active',
  });

  useEffect(() => {
    if (!username) {
      firebase.getAuth().onAuthStateChanged(user => {
        if (user) {
          setUsername(user.displayName);
          setAuthStatus(true);
        } else {
          setAuthStatus(false);
        }
      });
    }
  }, [username])

  useEffect(() => {
    if (authStatus && !username) {
      window.location.href = "/login";
    }
  }, [authStatus])

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
      <Grid containter>      
        <GlobalGray />
        <Row style={{ background: 'white', position: 'relative', top: '-7px', margin: '0 auto', display: 'flex' }}>
          <Col xs style={{ margin: 'auto', textAlign: 'center', marginLeft: '50px' }}>
            <InvisibleButton onClick={() => window.location.href = '/'}><Logo src={Encor} alt="Encor logo"/></InvisibleButton>
          </Col>
          <Col xs>
            <Navbar>
              <StyledTabs className={activeTab.links} value='links' onClick={handleClick} style={{ background: 'white'}}>Links</StyledTabs>
              <StyledTabs className={activeTab.design} value='design' onClick={handleClick} style={{ background: 'white'}}>Design</StyledTabs>
              <StyledTabs className={activeTab.settings} value='settings' onClick={handleClick} style={{ background: 'white'}}>Settings</StyledTabs>
            </Navbar>
          </Col>
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
      </Grid>
    </React.Fragment>
  );
}

export default Admin;