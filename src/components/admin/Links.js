import React, { useState, useRef, useEffect } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import firebase from '../../firebaseconfig';
import MockAvatar from '../../assets/images/mockavatar.jpg'
import Add from '../../assets/images/add.png';
import Multiply from '../../assets/images/remove.png';
import UserPreview from './UserPreview.js';
import { ProfileBox, Profile, LinkBox, UserPreviewBox, UploadImage, RemoveImage, Title, Link, AddLinkButton, ApplyButton, Remove, RemoveButton, MarginDiv, URLHandler, PhoneOutline } from '../styledComponents/StyledLinks';
import useWindowDimensions from '../../utilities/useWindowDimensions';

const Links = () => {
  const [username, setUsername] = useState(null);
  const [spotlightLabel, setSpotlightLabel] = useState('');
  const [spotlightLink, setSpotlightLink] = useState('');
  const [pfpURL, setPfpURL] = useState(MockAvatar);
  const [startCollect, setStartCollect] = useState(false);
  const [renderMap, setRenderMap] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [formState, setFormState] = useState([]);
  const fileRf = useRef(null);
  const formRef = useRef([]);
  const linkRef = useRef([]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (!username) {
      firebase.getAuth().onAuthStateChanged(user => {
        if (user) {
          setUsername(user.displayName);
          firebase.pfpGet(user.displayName).then(url => {
            setPfpURL(url);
          });
          firebase.getUserInfo(user.displayName).then(result => {
            linkRef.current = result.links;
            if (result.links)
            Object.values(result.links).forEach((_, index) => {
              const loadComplete = Object.values(result.links).length === index + 1;
              AddLinks('firebase', loadComplete);
            });
            setSpotlightLabel(result.spotlightLabel);
            setSpotlightLink(result.spotlightLink);
          })
        }
      });
    }
  }, [username])

  useEffect(() => {
    // in case user is not loaded yet and tries to apply changes, do && username
    if (startCollect && username) {
      let collectedLinks = [];
      let collectedSpotlightLabel = '';
      let collectedSpotlightLink = '';
      if (spotlightLabel) {
        collectedSpotlightLabel = spotlightLabel;
      }
      if (spotlightLink) {
        collectedSpotlightLink = spotlightLink;
      }
      if (collectedLinks) {
        collectedLinks = linkRef.current;
      }
      firebase.getDB().collection('users').doc(username).set({
        spotlightLabel: collectedSpotlightLabel,
        spotlightLink: collectedSpotlightLink,
        links: collectedLinks
      }).then(() => {
        setStartCollect(false);
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startCollect])

  useEffect(() => {
    if (refresh) {
      setRefresh(false);
      window.location.href = "/admin";
    }
  }, [refresh]);

  const AddLinks = (dataSource, loadComplete) => {
    if (dataSource === 'firebase') {
      formRef.current = [ ...formRef.current, <RenderLink key={formRef.current.length} id={formRef.current.length} />];
    }
    if (dataSource === 'firebase' && loadComplete) {
      setFormState(formRef.current);
    }
    if (dataSource === 'user') {
      setFormState([ ...formState, <RenderLink key={formState.length} id={formState.length} /> ]);
    }
    setRenderMap(formRef.current);
  };
  
  const RenderLink = ({ id }) => {
    let exists = false;
    const initValue = linkRef.current[id] ? linkRef.current[id].link : '';
    const [value, setValue] = useState(initValue);
    const handleChange = e => { 
      setValue(e.target.value);
      linkRef.current = linkRef.current.map(link => {
        //case: editing form
        if (link.id === id) {
          exists = true;
          return {
            id: id,
            link: e.target.value,
          }
        } else {
          return link;
        }
      });
      // case: new form
      if (!exists) {
        linkRef.current = [
          ...linkRef.current,
          {
            id: id,
            link: e.target.value
          }
        ]
      }
    };
    const removeLinkForm = (e, id) => {
      console.log(id);
      e.preventDefault();
      // remove the link
      linkRef.current = linkRef.current.filter(link => link.id !== id);
      // fix the ids
      linkRef.current = linkRef.current.map((link, index) => {
        return {
          id: index,
          link: link.link
        }
      });    
      // copy to formRef
      formRef.current = linkRef.current.map(link => {
        return <RenderLink key={link.id} id={link.id} />;
      });
      // render formRef
      setFormState(formRef.current);
    }
    return (
      <form noValidate autoComplete="off">
        <br />
        <Link label="Social" onChange={handleChange} value={value} />
        <RemoveButton onClick={e => removeLinkForm(e, id)}>
          <Remove src={Multiply} alt='Remove button' />
        </RemoveButton>
      </form>
    )
  }

  //mocking click for file input 
  const clickRef = e => fileRf.current.click();

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
    } else {
      const file = fileUploaded.files[0];
      console.log("p", "File " + file.name + " is " + file.size + " bytes in size");
      const task = firebase.getStorage().ref(`profile_pictures/${username}/pfp`).put(fileUploaded.files[0]);
      task.on('state_changed', () => {
        firebase.getStorage().ref(`profile_pictures/${username}/pfp`).getDownloadURL().then(profilePicLink => {
          setRefresh(true);
          setPfpURL(profilePicLink);
        })
      });
    }
  }

  const pfpRemove = () => {
    setPfpURL(MockAvatar);
    firebase.pfpRemove(username);
  }

  return (
    <React.Fragment>
      <Row>
        <Col>
          <ProfileBox>
            <Title>Profile</Title>
            <Profile src={pfpURL} />
            <input type="file" id="file" ref={fileRf} onChange={e => fileUpload(e)} style={{display: "none"}}/>
            <UploadImage className="secondary" onClick={clickRef}>Upload Image</UploadImage> 
            <RemoveImage className="white"  onClick={() => pfpRemove()}>Remove</RemoveImage>
          </ProfileBox>
          <LinkBox>
            <Row style={{marginLeft: '10px'}}>
              <Title>Link</Title>
              <ApplyButton className='secondary' onClick={() => setStartCollect(true)}>Apply Changes</ApplyButton>
              <Link label="Website Title" onChange={e => setSpotlightLabel(e.target.value)} value={spotlightLabel} id="spotlightLabel" />
              <br /><br /><br />
              <Link label="Website URL" onChange={e => setSpotlightLink(e.target.value)} value={spotlightLink} id="spotlightLink" />
              <Title>Social</Title>
            </Row>
            <AddLinkButton onClick={() => AddLinks('user', false)}>
              <img src={Add} alt="add link button" style={{width: '10px', height: '10px'}} />
            </AddLinkButton>
            <div style={{marginTop: '-30px'}}>
              {formState.map(child => {
                return child;
              })}
            </div>
          </LinkBox>
        </Col>
          {width > 732 && (
            <Col>
              <MarginDiv>
                <UserPreviewBox>
                <URLHandler >
                  <a href={`//www.encor.cc/${username}`} target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
                    encor.cc/{username}
                  </a>
                </URLHandler>
                  <PhoneOutline>
                    <UserPreview userInfo={{ username, linkRef, spotlightLabel, spotlightLink, pfpURL }}/>
                  </PhoneOutline>
                </UserPreviewBox>
              </MarginDiv>
            </Col>
          )}
          </Row>
          {width < 733 && (
            <Row>
              <MarginDiv>
                <UserPreviewBox>
                  <URLHandler >
                    <a href={`//www.encor.cc/${username}`} target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
                      encor.cc/{username}
                    </a>
                  </URLHandler>
                  <PhoneOutline>
                    <UserPreview userInfo={{ username, linkRef, spotlightLabel, spotlightLink, pfpURL }}/>
                  </PhoneOutline>
                </UserPreviewBox>
              </MarginDiv>
            </Row>
          )}
    </React.Fragment>
  );
}

export default Links;
