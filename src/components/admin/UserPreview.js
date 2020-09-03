import React from 'react'
import { Row, Col } from 'react-flexbox-grid';
import{
  ProfileContainer, 
  Avatar,
  Username, 
  SpotlightLink,
  SocialMediaIcon, 
  IconContainer, 
} from "../styledComponents/StyledUserPreview";
import { SupportedMedia } from './SupportedMedia'; 

const UserPreview = props => {
  const { username, linkRef, spotlightLabel, spotlightLink, pfpURL } = props.userInfo;
  const linkAmount = linkRef.current ? Object.keys(linkRef.current).length : 0;

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
    const lessThanFiveLinks = linkRef.current.length - linkCount ? true : false;
    const amountToFillRow = lessThanFiveLinks ? linkRef.current.length - linkCount : 5;
    const linksArray = linkRef.current;
    const singleRow = linksArray.slice(linkCount, linkCount + amountToFillRow).map(link => {
      let mediaName = matchIcon(link.link);
      if (!(SupportedMedia.includes(link.link))) {
        mediaName = 'placeholder';
      }
      return (
        <Col key={link.id} xs>
          {matchIcon(link.link) && 
            <SocialMediaIcon 
              key={link.id}
              onClick={() => window.location.replace(`//${link.link}`)} 
              style={{background: `url(${require(`../../assets/images/social-media-icons/${mediaName}-icon.png`)})`, backgroundSize: 'cover', backgroundPosition: 'center'}} 
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
    <React.Fragment>
      <ProfileContainer>
        <Row>
          <Avatar src={pfpURL} alt="profile picture" />
        </Row>
        <Row>
          <Username>{username}</Username>
        </Row>
        <Row>
          <SpotlightLink href={spotlightLink} target="_blank">{spotlightLabel}</SpotlightLink>
        </Row>
        <IconContainer>
          {loadIcons()}
        </IconContainer>
      </ProfileContainer>    
    </React.Fragment>
  )
}

export default UserPreview;