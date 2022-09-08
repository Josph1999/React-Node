import React, { useState } from "react"
import Checkbox from "@mui/material/Checkbox"
import { Button } from '@mui/material'
import './styles.css'
import { useDispatch } from "react-redux"
import { addChildren, changeStep } from "../../redux/actions/actions"


const Children = () => {
    const dispatch = useDispatch()
    const [hasChildren, setHasChildren] = useState(true)
    const [hasNoChildren, setHasNoChildren] = useState(false)

    const hasChildrenCheck = () => {
        setHasChildren(true)
        setHasNoChildren(false)
    }
    const hasNoChildrenCheck = () => {
        setHasChildren(false)
        setHasNoChildren(true)
    }

    const handleSubmit = () => {
        dispatch(addChildren(hasChildren))
        dispatch(changeStep('language'))
    }


    return (
        <div>
            <h1>Do you have children?</h1>
            <div className="checkBoxes">
                <div className="checkBox" value='yes'>
                    <Checkbox onClick={hasChildrenCheck} checked={hasChildren} />
                    <p>Yes</p>
                </div>
                <div className="checkBox" value='no' >
                    <Checkbox onClick={hasNoChildrenCheck} checked={hasNoChildren} />
                    <p>No</p>
                </div>

            </div>
            <div className='button'>
                <Button onClick={handleSubmit} variant='contained' fullWidth>Next</Button>

            </div>
        </div>

    )

}

export default Children

