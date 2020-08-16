import React, { useState, useRef } from 'react';
import firebase from '../../firebaseconfig';
import MockAvatar from '../../assets/images/mockavatar.png'
import Add from '../../assets/images/add.png';
import { ProfileBox, Profile, LinkBox, UploadImage, RemoveImage, Title, Link, AddLinkButton } from '../styledComponents/StyledLinks';

const AdminCustomizer = () => {
  const [links, setLinks] = useState({});
  const [newLink, setNewLink] = useState([]);
  const [spotlightLabel, setSpotlightLabel] = useState('');
  const [spotlightLink, setSpotlightLink] = useState('')

  const linkRef = useRef();

  const updateLinks = url => {
     linkRef.current = { 
       ...linkRef.current,
       link: url,
      };
     setLinks(linkRef.current);
  };

  const linkData = {
    links,
    updateLinks,
  }

  const AddNewLink = props => {
    const { updateLinks } = props.linkData;
    const handleBlur = e => {
      updateLinks(e.target.value);
    }
  
    return (
      <form noValidate autoComplete="off">
        <Link label="Social" onBlur={handleBlur}/>
      </form>
    )
  }

  const handleClick = e => {
    setNewLink([ ...newLink, <AddNewLink key={Math.random()} linkData={linkData} /> ])
  }

  const applyChanges = () => {
    firebase.addLinksToUser({ spotlightLabel, spotlightLink, links });
  }
  
  return (
    <React.Fragment>
      <ProfileBox>
        <Title>Profile</Title>
        <Profile src={MockAvatar} />
        <UploadImage className="secondary">Upload Image</UploadImage>
        <RemoveImage className="white">Remove</RemoveImage>
      </ProfileBox>
      <LinkBox>
        <Title>Link</Title>
        <Link label="Link One Website" onBlur={e => setSpotlightLabel(e.target.value)}/>
        <Link label="Website URL" onBlur={e => setSpotlightLink(e.target.value)}/>
        <Title>Social</Title>
        <AddLinkButton onClick={handleClick}>
          <img src={Add} alt="add social media" style={{width: '15px', height: '15px'}} />
        </AddLinkButton>
        <div style={{marginTop: '-30px'}}>
        {newLink ? newLink.map(child => child) : null}
        </div>
        </LinkBox>
      </React.Fragment>
  );
}

export default AdminCustomizer;
