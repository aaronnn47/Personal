const initialState={
    price: '$0'
}

const UPDATE_PRICE = 'UPDATE_PRICE'

export function updatePrice(price){
    return{
        type: UPDATE_PRICE,
        payload:price
    }
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_PRICE:
        return Object.assign({}, state, {price: action.payload})
        default: return state
    }

}