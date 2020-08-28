import React, { useRef, useState } from 'react'
import { Link } from '../styledComponents/StyledLinks';

const AddLink = props => {
  const { url, startCollect } = props.hooks;
  const [link, setLink] = useState(url);
  const linkRef = useRef();
  const handleChange = e => setLink(e.target.value);
  if (startCollect) {
    console.log(`this form has this link ${link}`);
    linkRef.current = { 
      ...linkRef.current,
      link: link,
    }
  }
  return (
    <form noValidate autoComplete="off">
      <br />
      {url ? 
        <Link label="Social" onChange={handleChange} value={link} /> 
        : 
        <Link label="Social" onChange={handleChange} />
      }
    </form>
  )
}

export default AddLink;