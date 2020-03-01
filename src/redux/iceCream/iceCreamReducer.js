import {BUY_ICE_CREAM} from './iceCreamTypes'

const initialState = {
    numOfIcream: 20
};


const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICE_CREAM:
            return {
                ...state,
                numOfIcream: state.numOfIcream - 1
            }
        default:
            return state;
    }
}

export default iceCreamReducer;