
import {
  ADD_USER,
  CHANGE_STEP,
  ADD_CHILDREN,
  ADD_COUNTRY,
  RESET_INFO
} from '../constants/constants';

export const initialState = {
  user: '',
  step: 'user-information',
  children: '',
  country: ''
};
const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER: {
      return {
        ...state,
        user: payload,
      };
    }
    case CHANGE_STEP: {
      return {
        ...state,
        step: payload,
      };
    }
    case ADD_CHILDREN: {
      return {
        ...state,
        children: payload,
      };
    }
    case ADD_COUNTRY: {
      return {
        ...state,
        country: payload,
      };
    }
    case RESET_INFO: {
      return {
        ...state,
        user: '',
        step: 'user-information',
        children: '',
        country: ''
      };
    }
    default:
      return state;
  }
};

export default rootReducer;