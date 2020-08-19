import React, { useState, useRef } from 'react';
import { Row } from 'react-flexbox-grid';
import firebase from '../../firebaseconfig';
import MockAvatar from '../../assets/images/mockavatar.png'
import Add from '../../assets/images/add.png';
import { ProfileBox, Profile, LinkBox, UploadImage, RemoveImage, Title, Link, AddLinkButton, ApplyButton } from '../styledComponents/StyledLinks';

const AdminCustomizer = () => {
  const [links, setLinks] = useState({});
  const [newLink, setNewLink] = useState([]);
  const [spotlightLabel, setSpotlightLabel] = useState('');
  const [spotlightLink, setSpotlightLink] = useState('')
  const refContainer = useRef(null);

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
        <br />
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
  
  const clickRef = e => {
    refContainer.current.click();
  }

  const fileUpload = e => {
    const fileUploaded = e.target;
    if (!fileUploaded) {
      console.log("p", "Um, couldn't find the fileinput element.");
    }
    else if (!fileUploaded.files) {
        console.log("p", "This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!fileUploaded.files[0]) {
        console.log("p", "Please select a file before clicking 'Load'");
    }
        const file = fileUploaded.files[0];
        console.log("p", "File " + file.name + " is " + file.size + " bytes in size");
    
    // handleFile(fileUploaded); firebase manage
  };

  return (
    <React.Fragment>
      <ProfileBox>
        <Title>Profile</Title>
        <Profile src={MockAvatar} />
          <input type="file" id="file" ref={refContainer} onChange={fileUpload} style={{display: "none"}}/>
          <UploadImage className="secondary" onClick={clickRef}>
            Upload Image
          </UploadImage>
        <RemoveImage className="white">Remove</RemoveImage>
      </ProfileBox>
      <LinkBox>
        <Row style={{marginLeft: '10px'}}>
          <Title>Link</Title>
          <ApplyButton className='secondary' onClick={() => applyChanges()}>Apply Changes</ApplyButton>
          <Link label="Link One Website" onBlur={e => setSpotlightLabel(e.target.value)}/>
          <br />
          <br />
          <br />
          <Link label="Website URL" onBlur={e => setSpotlightLink(e.target.value)}/>
          <Title>Social</Title>
        </Row>
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
