import TYPES from '../../utils/types';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.SET_CATEGORY_LIST: {
      return { ...state, ...action.payload };
    }
    case TYPES.SET_HOTELS_LIST: {
      return { ...state, ...action.payload };
    }
    case TYPES.SET_HOTELS_ID: {
      return { ...state, selectedHotel: action.payload.selectedHotel };
    }
    default:
      return state;
  }
};

export default reducer;
