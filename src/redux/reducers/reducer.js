import TYPES from '../../utils/types';

const stateInitial = {
    count: 0,
    next: null,
    previous: null,
    results: [],
    errorMesage: false,
};

const reducer = (state = stateInitial, action) => {
    switch (action.type) {
        case TYPES.SET_POKEMONS_LIST: {
            return { ...state, ...action.payload };
        }
        case TYPES.SET_POKEMONS_ID: {
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
