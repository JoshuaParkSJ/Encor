import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import firebase from '../../firebaseconfig';
import { Settings, LinksContainer } from '../styledComponents/StyledAdmin'; 
import AddNewLink from './AddNewLink';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Redirect } from "react-router-dom";

const Admin = () => {
  const [links, setLinks] = useState({});
  const [newLink, setNewLink] = useState([]);
  const [bio, setBio] = useState('');
  const [spotlightLabel, setSpotlightLabel] = useState('');
  const [spotlightLink, setSpotlightLink] = useState('')

  const linkRef = useRef();

  const updateLinks = (socialMedia, url) => {
     linkRef.current = { 
       ...linkRef.current, 
       [socialMedia]: url 
      };
     setLinks(linkRef.current);
     console.log(linkRef.current);
  };

  const linkData = {
    links,
    updateLinks,
  }
  
  const applyChanges = () => {
    firebase.addLinksToUser({ bio, spotlightLabel, spotlightLink, links });
  }


  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#B4B4B4',
    },
    AppBar: {
      background: 'transparent',
      boxShadow: 'none'
    }
  }))

  return (
    <>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <LinksContainer>
          {newLink ? newLink.map(child => child) : null} 
          <div className="container-sm">
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              // key set to math.random() for now which is suboptimal solution
              setNewLink([ ...newLink, <AddNewLink key={Math.random()} linkData={linkData} style={useStyles} /> ])}
            }
          >
            Add new social media
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{marginTop: '50px'}}
            onClick={() => applyChanges()}
          >
            Apply Changes
          </Button>
        </div>
        </LinksContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default Admin;
