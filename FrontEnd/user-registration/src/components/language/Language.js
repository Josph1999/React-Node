import React, { useState } from 'react'
import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { addCountry, changeStep } from '../../redux/actions/actions';

const Language = () => {
  const dispatch = useDispatch()
  const [language, setLanguage] = useState('none')
  const [country, setCountry] = useState('Germany')

  const handleChooseLevel = (event, newValue) => {
    setLanguage(newValue);
  };
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const inputList = {
    language: language,
    country: country
  }
  const handleSubmit = () => {

    dispatch(addCountry(inputList))
    dispatch(changeStep('photo'))


  }

  return (


    <>
      <Typography>English Level</Typography>
      <Box sx={{ width: '100%' }}>

        <Tabs

          value={language}
          onChange={handleChooseLevel}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="none" label="None" />
          <Tab value="begginer" label="Begginer" />
          <Tab value="intermediate" label="Intermediate" />
          <Tab value="advanced" label="Advanced" />
        </Tabs>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth sx={{ marginTop: '30px' }}>
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value='Georgia'>Georgia</MenuItem>
            <MenuItem value='Germany'>Germany</MenuItem>
            <MenuItem value='England'>England</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div className='button'>
        <Button onClick={handleSubmit} variant='contained' fullWidth>Next</Button>

      </div>
    </>


  )


}

export default Language