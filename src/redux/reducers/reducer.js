import TYPES from '../../utils/types';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case TYPES.SET_HOTELS_LIST: {
            return { ...state, ...action.payload };
        }
        case TYPES.SET_HOTELS_ID: {
            return {
                ...state,
                selectedPokemon: action.payload.selectedPokemon,
            };
        }
        default:
            return state;
    }
};

export default reducer;
