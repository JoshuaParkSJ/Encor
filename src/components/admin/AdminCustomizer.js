import React, { useState, useRef } from 'react';
import firebase from '../../firebaseconfig';
import MockAvatar from '../../assets/images/mockavatar.png'
import StyledButton from '../styledComponents/Button';
import Add from '../../assets/images/add.png';
import { ProfileBox, Profile, LinkBox } from '../styledComponents/StyledAdminCustomizer';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';


const Admin = () => {
  const [links, setLinks] = useState({});
  const [newLink, setNewLink] = useState([]);
  const [bio, setBio] = useState('');
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
      <form noValidate autoComplete="off" style={{marginBottom: '30px', marginLeft: '20px'}}>
        <TextField id="standard-basic" label="Social" style={{width: '95%', marginTop: '-20px'}} onBlur={handleBlur}/>
      </form>
    )
  }

  const handleClick = e => {
    setNewLink([ ...newLink, <AddNewLink key={Math.random()} linkData={linkData} style={useStyles} /> ])
  }

  const applyChanges = () => {
    firebase.addLinksToUser({ bio, spotlightLabel, spotlightLink, links });
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: 'linear-gradient(135.2deg, #4E64F8 5.74%, #CA8CFB 61.35%, #FB8C8C 108.23%)',
      boxShadow: '0px 4px 8px 2px rgba(218, 171, 255, 0.36)',
      borderRadius: '20px',
      paddingBottom: '90px',
      height: '100%',
    },
    addButton: {
      position: 'relative', 
      top: '-55px', 
      left: '410px', 
      width: '25px', 
      height: '25px', 
      border: 'none', 
      background: 'transparent', 
      outline: 'none',
    }
  }))

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ProfileBox>
        <h1 style={{marginTop: '-20px'}}>Profile</h1>
        <Profile src={MockAvatar} />
        <StyledButton className="secondary" style={{width: '200px', height: '30px', position: 'relative', top: '-70px', right: '-120px'}}>Upload Image</StyledButton>
        <StyledButton className="white" style={{width: '200px', height: '30px', position: 'relative', top: '-50px', right: '-220px'}}>Remove</StyledButton>
      </ProfileBox>
      <LinkBox>
        <h1 style={{marginTop: '-20px'}}>Link</h1>
        <TextField id="standard-basic" label="Website" style={{width: '90%', marginTop: '-20px', marginLeft: '20px'}} />
        <h1>Social</h1>
        <button className={classes.addButton} onClick={handleClick}>
          <img src={Add} alt="add social media" style={{width: '15px', height: '15px'}} />
        </button>
        <AddNewLink key={Math.random()} linkData={linkData} style={useStyles} />
        {newLink ? newLink.map(child => child) : null}
        </LinkBox>
      </div>
  );
}

export default Admin;
