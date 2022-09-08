import React, { useEffect } from "react";
import UserForm from "../userform/UserForm";
import Children from "../children/Children";
import { useDispatch, useSelector } from "react-redux";
import Language from "../language/Language";
import Photo from "../photo/Photo";
import { ToastContainer } from 'react-toastify';
import Confirmation from "../confirmation/Confirmation";
import { resetInfo } from "../../redux/actions/actions";
import './styles.css'
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    const dispatch = useDispatch()
    const { step } = useSelector(state => state)

    useEffect(() => {
        const resetInformation = () => {
            if (step === 'confirmation') {
                dispatch(resetInfo())
            }
        }
        setTimeout(resetInformation, 3000)
    })
    return (
        <div className="main-container">
            {step === 'user-information' ? <UserForm /> : null}
            {step === 'children' ? <Children /> : null}
            {step === 'language' ? <Language /> : null}
            {step === 'photo' ? <Photo /> : null}
            {step === 'confirmation' ? <Confirmation /> : null}
            <ToastContainer />

        </div>
    )
}



export default Main