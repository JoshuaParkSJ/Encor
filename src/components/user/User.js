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
import MockAvatar from '../../assets/images/mockavatar.jpg'

const User = ({ match, location }) => {
  const [username, setUsername] = useState(null);
  const [spotlightLabel, setSpotlightLabel] = useState('');
  const [spotlightLink, setSpotlightLink] = useState('');
  const [links, setLinks] = useState([]);
  const [pfpURL, setPfpURL] = useState(MockAvatar);
  const linkAmount = links ? Object.keys(links).length : 0

  useEffect(() => {
    firebase.getUserInfo(match.params.user).then(result => {
      firebase.pfpGet(match.params.user).then(url => {
        setPfpURL(url);
      }).catch(e => {
        setPfpURL(MockAvatar);
      })
      console.log(result);
      setUsername(result.username);
      setLinks(result.links);
      setSpotlightLabel(result.spotlightLabel);
      setSpotlightLink(`//${result.spotlightLink}`);
    })
  }, []);
  
  const matchIcon = link => {
    if (!link) {
      return null;
    }
    if (link && link.startsWith('https://')) {
      return link.split('https://www.')[1].split('.com')[0];
    }
    if (link && link.startsWith('www.')) {
      return link.split('www.')[1].split('.com')[0];
    }
    if (!link.startsWith('https://') && !link.startsWith('www.')) {
      return link.split('.com')[0];
    }
    else {
      return null;
    }
  };

  const mapLinks = rowCount => {
    const linkCount = rowCount * 5;
    const lessThanFiveLinks = links.length - linkCount ? true : false;
    const amountToFillRow = lessThanFiveLinks ? links.length - linkCount : 5;
    const linksArray = links;
    const singleRow = linksArray.slice(linkCount, linkCount + amountToFillRow).map(link => {
      return (
        <Col key={link.id} xs>
          {matchIcon(link.link) && 
            <SocialMediaIcon 
              key={link.id}
              onClick={() => window.location.replace(`//${link.link}`)} 
              style={{background: `url(${require(`../../assets/images/social-media-icons/${matchIcon(link.link)}-icon.png`)})`, backgroundSize: 'cover', backgroundPosition: 'center'}} 
            />
          }
        </Col>
        )
    })
    return singleRow;
  }

  const loadIcons = () => {
    const rows = Math.ceil(linkAmount / 5);
    const createRows = () => {
      let rowWithIcons = null;
      for (let i = 0; i < rows; i++) {
        rowWithIcons = mapLinks(i);
      }; 
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
      { username ? 
        <React.Fragment>
          <Row>
            <Avatar src={pfpURL} alt="profile picture" />
          </Row>
          <Row>
            <Username>@{match.params.user}</Username>
          </Row>
          <Row>
            <SpotlightLink href={spotlightLink} target="_blank">{spotlightLabel}</SpotlightLink>
          </Row>
          <IconContainer>
            {loadIcons()}
          </IconContainer>
          <CardLogo>encor</CardLogo>
        </React.Fragment>
       :
      <h3 style={{textAlign: 'center'}}>Username is free</h3> }
    </ProfileContainer>
  )
}

export default User;