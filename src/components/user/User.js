import React, { useState, useEffect } from 'react'
import firebase from '../../firebaseconfig';
import { Row, Col } from 'react-flexbox-grid';
import{
  ProfileContainer, 
  Avatar,
  Username, 
  SpotlightLink,
  SocialMediaIcon, 
  IconContainer, 
  CardLogo
} from "../styledComponents/StyledUser";
import MockAvatar from '../../assets/images/mockavatar.png'

const User = ({ match, location }) => {
  const [icons, setIcons] = useState(null);
  const [userLinks, setUserLinks] = useState({exists: false});
  const spotLink = `//${userLinks.spotlightLink}`
  const linkAmount = userLinks.links ? Object.keys(userLinks.links).length : 0
  const ICON_AMOUNT_PER_ROW = 5;


  useEffect(() => {
    firebase.getUserInfo(match.params.user).then(result => {
      setUserLinks(result);
    })
  }, []);

  useEffect(() => {
    if (linkAmount > 0) {
      setIcons(loadIcons());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linkAmount])
  
  const matchIcon = link => link.split('www.')[1].split('.com')[0];

  const mapLinks = amount => {

    const singleRow = Object.values(userLinks.links).map((link, index) => {
      if (index < amount + ICON_AMOUNT_PER_ROW) {
      return (
        <Col xs>
          <SocialMediaIcon 
            key={link}
            onClick={() => window.location.replace(`//${link}`)} 
            style={{background: `url(${require(`../../assets/images/${matchIcon(link)}-icon.png`)})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
        </Col>
      )
    }
    })
    return singleRow;
  }

  const loadIcons = () => {
    const rows = Math.ceil(linkAmount / ICON_AMOUNT_PER_ROW);
    const createRows = () => {
      let rowWithIcons = null;
      for (let i = 0; i < rows; i++) {
        rowWithIcons = mapLinks(i);
      }; 
      console.log(rowWithIcons);
      return rowWithIcons;
    }
    return (
      <Row key={Math.random()}>
        {createRows()} 
      </Row>
    )
  }

  return (
    <ProfileContainer>
      { userLinks.exists ? 
        <React.Fragment>
          <Row>
            <Avatar src={MockAvatar} alt="profile picture" />
          </Row>
          <Row>
            <Username>{match.params.user}</Username>
          </Row>
          <Row>
            <SpotlightLink href={spotLink} target="_blank">{userLinks.spotlightLabel}</SpotlightLink>
          </Row>
          <IconContainer>
            {icons}
          </IconContainer>
          <CardLogo>Encor</CardLogo>
        </React.Fragment>
       :
      <h3 style={{textAlign: 'center'}}>Username is free :)</h3> }
    </ProfileContainer>
  )
}

export default User;