import React, { useState } from 'react'
import Webcam from "react-webcam"
import axios from 'axios';
import './styles.css'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { changeStep } from '../../redux/actions/actions';

const Photo = () => {
  const dispatch = useDispatch()
  const [image, setImage] = useState('');
  const data = useSelector(state => state)

  const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
  };

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc)
    },

    [webcamRef]
  );

  const handleSubmit = async () => {
    try {
      if (image) {
        await axios.post('http://localhost:7777/add-user', {
          name: data.user.name,
          city: data.user.city,
          country: data.country.country,
          date_of_birth: data.user.date_of_birth,
          child: data.children,
          english_level: data.country.language,
          photo: image

        });
        dispatch(changeStep('confirmation'))
      }
      if (!image) {
        toast.error('Please Take Selfie')
      }

    } catch (err) {
      toast.error('Something Went wrong')
    }

  }

  return (
    <>

      <div className="webcam-img">

        {image == '' ? <Webcam
          audio={false}
          height={600}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={650}
          videoConstraints={videoConstraints}
        /> : <img src={image} />}
      </div>
      <div>
        {image != '' ?
          <Button onClick={(e) => {
            e.preventDefault();
            setImage('')
          }}
            className="webcam-btn">
            Retake Image</Button> :
          <Button onClick={(e) => {
            e.preventDefault();
            capture();
          }}
            className="webcam-btn">Capture</Button>
        }
      </div>
      <div className='button'>
        <Button onClick={handleSubmit} variant='contained' fullWidth>Submit</Button>

      </div>
    </>
  )

}


export default Photo