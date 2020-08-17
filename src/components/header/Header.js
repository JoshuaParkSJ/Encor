import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { HeaderText, Logo, Signup, InvisibleButton } from '../styledComponents/StyledHeaderFooter';
import GlobalStyle from '../styledComponents/GlobalStyle';
import Encor from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Row style={{position: 'relative', top: '30px', right: '20px'}}>
        <Col xs={6}>
          <Row>
            <InvisibleButton onClick={() => window.location.href = '/'}>
              <Logo src={Encor} alt="Encor Logo" />
            </InvisibleButton>
            <HeaderText href='/l/blog'>Blog</HeaderText>
            <HeaderText href='/l/plans'>Plans</HeaderText>
          </Row>
        </Col>
        <Col xs={6}>
          <Row style={{float: 'right'}}>
            <HeaderText href='/login'>Log In</HeaderText>
            <Signup onClick={() => window.location.href = '/register'} className='primary'>Sign Up</Signup>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Footer;