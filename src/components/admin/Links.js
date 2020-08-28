import React, { useState, useRef, useEffect } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import firebase from '../../firebaseconfig';
import MockAvatar from '../../assets/images/mockavatar.jpg'
import Add from '../../assets/images/add.png';
import UserPreview from './UserPreview.js';
// import AddLink from './AddLink';
import useContainerDimensions from '../../utilities/useContainerDimensions';
import { ProfileBox, Profile, LinkBox, UploadImage, RemoveImage, Title, Link, AddLinkButton, ApplyButton } from '../styledComponents/StyledLinks';
import { PhoneOutline, URLHandler } from '../styledComponents/StyledAdmin';

const AdminCustomizer = () => {
  const [username, setUsername] = useState(null);
  // use linkForm to keep track of how many links you have. refresh? delete all and replace with firebase call. added one? append
  // to array and make sure it actually gets called when applied changes
  // overall link informations should be attatched/dependant on linkForm array 
  const [linkForm, setlinkForm] = useState([]);
  // const [links, setLinks] = useState({});
  const [spotlightLabel, setSpotlightLabel] = useState('');
  const [spotlightLink, setSpotlightLink] = useState('');
  const [pfpURL, setPfpURL] = useState(MockAvatar);
  const [refresh, setRefresh] = useState(false);
  const [keyHook, setKeyHook] = useState(null);
  const [startCollect, setStartCollect] = useState(false);
  const fileRf = useRef(null);
  const linkRef = useRef({});
  const componentRef = useRef();
  const { width } = useContainerDimensions(componentRef);
  const userInfo = {username, linkRef, spotlightLabel, spotlightLink, pfpURL, refresh};

  if (!username) {
    firebase.getAuth().onAuthStateChanged(user => {
      if (user) {
        setUsername(user.displayName);
        firebase.pfpGet(user.displayName).then(url => {
          setPfpURL(url);
        });
        firebase.getUserInfo(user.displayName).then(result => {
          setSpotlightLabel(result.spotlightLabel);
          setSpotlightLink(result.spotlightLink);
          linkRef.current = result.links;
          if (result.links) {
            Object.values(result.links).forEach(link => {
              AddLinks(link);
            });
          }
        })
      }
    });
  }

  //reset everything on apply changes
  useEffect(() => {
    if (refresh) {
      firebase.getAuth().onAuthStateChanged(user => {
        if (user) {
          firebase.getUserInfo(user.displayName).then(result => {
            linkRef.current = result.links;
            Object.values(result.links).forEach(link => {
              AddLinks(link);
            });
          })
          setRefresh(false);
        }
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh])

  const AddLinks = url => {
    const hooks = { refresh, startCollect, keyHook, setKeyHook };
    if (url) setKeyHook(url);
    setlinkForm([ ...linkForm, <AddLink key={keyHook} keyHook={keyHook} hooks={hooks} /> ]);
  }

  const AddLink = props => {
    // const { url } = props.hooks;
    // const [link, setLink] = useState(url);


    // change to ref instead of setkeyYooks
    const handleChange = e => {setKeyHook(e.target.value); console.log(`${e.target.value} is the value and keyHook: ${keyHook}`)};
    // useEffect(() => {
    //   if (startCollect) {
    //     console.log('hi');
    //     console.log(`this form has this link ${link}`);
    //     linkRef.current = { 
    //       ...linkRef.current,
    //       link: link,
    //     }
    //   }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [startCollect]);
    return (
      <form noValidate autoComplete="off">
        <br />
        <Link label="Social" onChange={handleChange} value={props.key} /> 
      </form>
    )
  }

  if (startCollect) {
    console.log(linkForm);
    console.log('collect started');  
    linkForm.forEach(form => {
      linkRef.current = { 
        ...linkRef.current,
        link: form.keyHook,
      }
      console.log(linkRef);
    });
    firebase.addLinksToUser({ spotlightLabel, spotlightLink, linkRef }).then(() => {
      //force refresh to update userInfo for UserPreview
      setStartCollect(false);
      setRefresh(true);
    });
  }

  //mocking click for file input 
  const clickRef = e => {
    fileRf.current.click();
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
    } else {
      const file = fileUploaded.files[0];
      console.log("p", "File " + file.name + " is " + file.size + " bytes in size");
      firebase.pfpUpload(fileUploaded.files[0], firebase.getCurrentUsername());
    }
  };

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
          <AddLinkButton onClick={() => AddLinks(null)}>
            <img src={Add} alt="add link button" style={{width: '15px', height: '15px'}} />
          </AddLinkButton>
          <div style={{marginTop: '-30px'}}>{linkForm ? linkForm.map(child => child) : null}</div>
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
                <UserPreview userInfo={userInfo}/>
              </PhoneOutline>
            </div>
          )}
        </Col>
      </div>
  );
}

export default AdminCustomizer;
