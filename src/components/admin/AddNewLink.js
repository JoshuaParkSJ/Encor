import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const AddNewLink = props => {
  const [socialMedia, setSocialMedia] = useState('');
  const [url, setUrl] = useState('');
  const { updateLinks } = props.linkData;

  const handleSubmit = () => {
    updateLinks(socialMedia, url)
}

  return (
    <>
      <FormControl style={{marginTop: '30px', marginLeft: '35px', width: '90%'}}>
        <InputLabel>Select Social Media</InputLabel>
          <Select
            value={socialMedia}
            onChange={e => {setSocialMedia(e.target.value)}}
          >
            <MenuItem value={'facebook'}>Facebook</MenuItem>
            <MenuItem value={'instagram'}>Instagram</MenuItem>
            <MenuItem value={'tiktok'}>TikTok</MenuItem>
            <MenuItem value={'twitter'}>Twitter</MenuItem>
            <MenuItem value={'whatsapp'}>WhatsApp</MenuItem>
            <MenuItem value={'linkedin'}>LinkedIn</MenuItem>
          </Select>
      </FormControl>
      <form noValidate autoComplete="off" style={{marginBottom: '30px', marginLeft: '35px'}}>
        <TextField id="standard-basic" label="Enter link" style={{width: '95%'}} onChange={e => {setUrl(e.target.value)}}/>
      </form>
      <div className="container-sm">
        <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        style={{marginBottom: '30px'}}
        onClick={() => handleSubmit()}
      >
        Submit
      </Button>
      </div>
    </>
  )
}

export default AddNewLink;