import React, { useState, useEffect } from 'react'
import firebase from '../../firebaseconfig';
import { Grid, Row, Col } from 'react-flexbox-grid';
import{
  Background, 
  ProfileContainer, 
  Username, 
  Bio, 
  SpotlightLink,
  SocialMediaIcon, 
  IconContainer, 
  CardLogo
} from "../styledComponents/StyledUser";
import MockAvatar from '../../assets/images/mockavatar.png'
import Avatar from '@material-ui/core/Avatar';

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
    <Background>
      { userLinks.exists ? 
        <ProfileContainer>
        <Grid>
          <Row>
            <Avatar src={MockAvatar} style={{margin: 'auto', width: '120px', height: '120px'}}/>
          </Row>
          <Row>
            <Username>@{match.params.user}</Username>
          </Row>
          <Row>
            <Bio>{userLinks.bio}</Bio>
          </Row>
          <Row>
            <SpotlightLink href={spotLink} target="_blank">{userLinks.spotlightLabel}</SpotlightLink>
          </Row>
          <IconContainer>
            {icons}
          </IconContainer>
          <CardLogo>Adripa</CardLogo>
        </Grid> 
        </ProfileContainer>
       :
      <h1>User does not exist</h1> }
    </Background>
  )
}

export default User;