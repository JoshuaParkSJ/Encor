import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Background, Text } from '../styledComponents/StyledFooter';

const Footer = () => {
  return (
    <Background>
      <Row style={{margin: '50px 20px 20px 20px'}}>
        <Col xs={6}>
          <Text>encor</Text>
        </Col>
        <Col xs={6}>
          <Row style={{float: 'right'}}>
            <Text>Terms of Service</Text>
            <Text>Privacy Policy</Text>
            <Text>Contact Us</Text>
            <Text>FAQ</Text>
            <Text>About Us</Text>
          </Row>
        </Col>
      </Row>
    </Background>
  )
}

export default Footer;