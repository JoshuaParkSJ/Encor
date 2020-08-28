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

const UserPreview = props => {
  const { username, linkRef, spotlightLabel, spotlightLink, pfpURL, refresh } = props.userInfo;
  console.log(`user preview receieved ${JSON.stringify(linkRef, null, 4)}`);
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
    const linksArray = Object.values(linkRef.current);
    const singleRow = Object.values(linksArray.slice(linkCount, linkCount + amountToFillRow)).map(link => {
      return (
        <Col key={link} xs>
          {matchIcon(link) && 
            <SocialMediaIcon 
              key={link}
              onClick={() => window.location.replace(`//${link}`)} 
              style={{background: `url(${require(`../../assets/images/social-media-icons/${matchIcon(link)}-icon.png`)})`, backgroundSize: 'cover', backgroundPosition: 'center'}} 
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
      {!refresh ? 
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
      :
      <h3 style={{textAlign: 'center'}}>Loading...</h3> }
    </React.Fragment>
  )
}

export default UserPreview;