import React, { useState } from 'react'
import "./PhotoPicker.css";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import useStorage from '../firebaseConfig/useStorage';
function PhotoPicker() {
  const [image, setImage] = useState(null)
  const [imgData, setImgData] = useState(null);
  const Input = styled('input')({
    display: 'none',
  });

  const formHandler = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setImage(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  return (
    <>
      <section className="main-section">
        <h2>Your Pictures</h2>
        <p>lorem ipsum dolor sit sit sumit ipsum dolor sit sit sumit </p>
        <div className="image-form">
          <Stack direction="row" alignItems="center" spacing={2}>
            <label htmlFor="contained-button-file">
              <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={formHandler} />
              <Button variant="contained" component="span">
                Upload <PhotoCamera />
              </Button>
            </label>
          </Stack>
        </div>
        <div className="user-img">
          <useStorage image={image} />
          <img src={imgData} />
        </div>
      </section>
    </>
  )
}

export default PhotoPicker
