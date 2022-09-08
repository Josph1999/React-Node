import {
  ADD_USER,
  CHANGE_STEP,
  ADD_CHILDREN,
  ADD_COUNTRY,
  RESET_INFO
} from '../constants/constants';

const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

const changeStep = (payload) => ({
  type: CHANGE_STEP,
  payload
})
const addChildren = (payload) => ({
  type: ADD_CHILDREN,
  payload
})
const addCountry = (payload) => ({
  type: ADD_COUNTRY,
  payload
})

const resetInfo = (payload) => ({
  type: RESET_INFO,
  payload
})


export { addUser, changeStep, addChildren, addCountry, resetInfo };