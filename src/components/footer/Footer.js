import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Background, Text } from '../styledComponents/StyledHeaderFooter';
import GlobalStyle from '../styledComponents/GlobalStyle';

const Footer = () => {
  return (
    <Background>
      <GlobalStyle />
      <Row style={{position: 'relative', top: '55px', right: '20px'}}>
        <Col xs={6}>
          <Text href='/' style={{marginLeft: '40px'}}>encor</Text>
        </Col>
        <Col xs={6}>
          <Row style={{float: 'right'}}>
            <Text href='/l/terms'>Terms of Service</Text>
            <Text href='/l/privacy'>Privacy Policy</Text>
            <Text href='/l/contact'>Contact Us</Text>
            <Text href='/l/faq'>FAQ</Text>
            <Text href='/l/blog'>Blog</Text>
            <Text href='/l/about'>About Us</Text>
          </Row>
        </Col>
      </Row>
    </Background>
  )
}

export default Footer;