import React, { useState, useRef } from 'react';
import firebase from '../../firebaseconfig';
import { Row, Col } from 'react-flexbox-grid';
// import User from '../user/User';
import { PhoneOutline, Navbar, StyledTabs, URLHandler, Logo, FlexMarginedDiv } from '../styledComponents/StyledAdmin';
import Encor from '../../assets/images/logo.png';
import Links from './Links';
import Design from './Design';
import Settings from './Settings';
import useContainerDimensions from '../../utilities/useContainerDimensions';

const Admin = () => {

  const componentRef = useRef()
  const { width } = useContainerDimensions(componentRef);
  const [activeTab, setActiveTab] = useState({
    links: 'active',
    design: 'not-active',
    settings: 'not-active',
  });

  const username = {
    params: {
      user: `${firebase.getCurrentUsername()}`
    }
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
      <Row>
        <FlexMarginedDiv>
          <Logo src={Encor} alt="Encor logo" />
          <Navbar>
            <StyledTabs className={activeTab.links} value='links' onClick={handleClick}>Links</StyledTabs>
            <StyledTabs className={activeTab.design} value='design' onClick={handleClick}>Design</StyledTabs>
            <StyledTabs className={activeTab.settings} value='settings' onClick={handleClick}>Settings</StyledTabs>
          </Navbar>
          {width < 768 ? null : (
            <URLHandler >
              <a href={`//www.encor.cc/${firebase.getCurrentUsername()}`} target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
                encor.cc/{firebase.getCurrentUsername()}
              </a>
            </URLHandler>
          )}
        </FlexMarginedDiv>
      </Row>
      <div ref={componentRef}>
        <Row style={{ background: '#F2F2F2' }}>
          <FlexMarginedDiv>
            <Col xs>
              {activeTab.links === 'active' ? <Links /> : null}
              {activeTab.design === 'active' ? <Design /> : null}
              {activeTab.settings === 'active' ? <Settings /> : null}
            </Col>
            <Col xs>
              {width < 768 ? null : (
              <PhoneOutline>
                {/* <User match={username}/> */}
              </PhoneOutline>
              )}
            </Col>
          </FlexMarginedDiv>
        </Row>
      </div>
      <Row>
        Footer
      </Row>
    </React.Fragment>
  );
}

export default Admin;