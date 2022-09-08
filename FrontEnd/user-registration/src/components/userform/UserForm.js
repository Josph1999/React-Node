import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addUser } from '../../redux/actions/actions';
import * as Yup from 'yup';
import './styles.css'
import { Button } from '@mui/material';
import { changeStep } from '../../redux/actions/actions';
import { toast } from 'react-toastify';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const UserForm = () => {


    const dispatch = useDispatch()
    const [name, setName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [dateOfBirth, setDateOfBirth] = useState(null)
    const [city, setCity] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)


    const inputList = {
        name: name,
        last_name: lastName,
        date_of_birth: dateOfBirth,
        city: city,
        phone_number: phoneNumber
    }

    const yupObject = Yup.object().shape({
        name: Yup.string().required('required'),
        last_name: Yup.string().required('required'),
        city: Yup.string().required('required'),
        date_of_birth: Yup.string().required('required'),
        phone_number: Yup.number().required('required'),
    });

    const handleAddUser = async (e) => {
        try {
            e.preventDefault()
            await yupObject.validate(inputList)
            dispatch(addUser(inputList))
            dispatch(changeStep('children'))
        } catch (error) {
            toast.error('Please Enter All Fields Correctly!')
        }
    }
    return (
        <div>
            <div className='input-styles'>
                <div className='inputs'>
                    <TextField id="outlined-basic" onChange={e => setName(e.target.value)} placeholder='First Name' variant="outlined" className='text-input' sx={{ outline: 'none !important', marginTop: '10px', width: '362px', height: '56px', border: '0.5px solid #31087B', borderRadius: '8px' }} />
                    <TextField id="outlined-basic" onChange={e => setPhoneNumber(e.target.value)} placeholder='Phone Number' variant="outlined" className='text-input' sx={{ marginTop: '10px', width: '362px', height: '56px', border: '0.5px solid #31087B', borderRadius: '8px' }} />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            placeholder="Please Select Date Of Birth"
                            value={dateOfBirth}

                            onChange={(newValue) => {
                                setDateOfBirth(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} sx={{ marginTop: '10px', width: '362px', height: '56px', border: '0.5px solid #31087B', borderRadius: '8px' }} />}
                        />
                    </LocalizationProvider>
                </div>
                <div className='inputs-right'>
                    <TextField id="outlined-basic" onChange={e => setLastName(e.target.value)} placeholder='Last Name' variant="outlined" className='text-input' sx={{ marginTop: '10px', width: '362px', height: '56px', border: '0.5px solid #31087B', borderRadius: '8px' }} />
                    <TextField id="outlined-basic" onChange={e => setCity(e.target.value)} placeholder='City' variant="outlined" className='text-input' sx={{ marginTop: '10px', width: '362px', height: '56px', border: '0.5px solid #31087B', borderRadius: '8px' }} />
                </div>

            </div>
            <div className='button'>
                <Button onClick={handleAddUser} variant='contained' fullWidth>Next</Button>

            </div>
        </div>

    )

}
UserForm.propTypes = {
    setStep: PropTypes.func
};

export default UserForm