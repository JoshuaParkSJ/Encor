import React, { useState, useRef, useEffect } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import firebase from '../../firebaseconfig';
import MockAvatar from '../../assets/images/mockavatar.jpg'
import Add from '../../assets/images/add.png';
import Multiply from '../../assets/images/remove.png';
import UserPreview from './UserPreview.js';
import useContainerDimensions from '../../utilities/useContainerDimensions';
import { ProfileBox, Profile, LinkBox, UploadImage, RemoveImage, Title, Link, AddLinkButton, ApplyButton, Remove, RemoveButton } from '../styledComponents/StyledLinks';
import { PhoneOutline, URLHandler } from '../styledComponents/StyledAdmin';

const Links = () => {
  const [username, setUsername] = useState(null);
  const [spotlightLabel, setSpotlightLabel] = useState('');
  const [spotlightLink, setSpotlightLink] = useState('');
  const [pfpURL, setPfpURL] = useState(MockAvatar);
  const [startCollect, setStartCollect] = useState(false);
  const [renderMap, setRenderMap] = useState(null);
  const fileRf = useRef(null);
  const formRef = useRef([]);
  const linkRef = useRef([]);
  const componentRef = useRef();
  const { width } = useContainerDimensions(componentRef);

  console.log(formRef.current);

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
            Object.values(result.links).forEach(() => AddLinks());
            setSpotlightLabel(result.spotlightLabel);
            setSpotlightLink(result.spotlightLink);
          })
        }
      });
    }
  }, [username])

  useEffect(() => {
    if (startCollect) {
      const collectedLinks = linkRef.current;
      firebase.addLinksToUser({ spotlightLabel, spotlightLink, collectedLinks }).then(() => {
        setStartCollect(false);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startCollect])

  const AddLinks = () => {
    formRef.current = [ ...formRef.current, <RenderLink key={formRef.current.length} id={formRef.current.length} />];
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
      setRenderMap(formRef.current);
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
      firebase.pfpUpload(fileUploaded.files[0], firebase.getCurrentUsername());
    }
  };

  const render = () => {
    if (linkRef.current) {
      return linkRef.current.map(child => {
        return <RenderLink key={child.id} id={child.id} />
      });
    }
  }

  return (
    <div ref={componentRef}>
      <Col>
        <ProfileBox>
          <Title>Profile</Title>
          <Profile src={pfpURL} />
          <input type="file" id="file" ref={fileRf} onChange={e => fileUpload(e)} style={{display: "none"}}/>
          <UploadImage className="secondary" onClick={clickRef}>Upload Image</UploadImage>
          <RemoveImage className="white" onClick={() => firebase.pfpRemove()}>Remove</RemoveImage>
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
          <AddLinkButton onClick={() => AddLinks()}>
            <img src={Add} alt="add link button" style={{width: '15px', height: '15px'}} />
          </AddLinkButton>
          <div style={{marginTop: '-30px'}}>{render()}</div>
        </LinkBox>
        </Col>
        <Col>
          {width && (
            <div>
              <URLHandler >
                <a href={`//www.encor.cc/${username}`} target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
                  encor.cc/{username}
                </a>
              </URLHandler>
              <PhoneOutline>
                {/* <UserPreview userInfo={userInfo}/> */}
              </PhoneOutline>
            </div>
          )}
        </Col>
      </div>
  );
}

export default Links;
