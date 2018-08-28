const initialState={
    price: '',
    user: {},
    clearPrice: ''
}

const UPDATE_PRICE = 'UPDATE_PRICE'
const UPDATE_USER = 'UPDATE_USER'
const CLEAR_PRICE = 'CLEAR_PRICE'

export function updatePrice(price){
    return{
        type: UPDATE_PRICE,
        payload:price
    }
}

export function updateUser(userObj){
    return{
        type: UPDATE_USER, 
        payload: userObj
    }
}

export function clearPrice(){
    return{
        type: CLEAR_PRICE,
        payload: ''
    }
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_PRICE:
        let newprice = state.price + action.payload
        return Object.assign({}, state, {price: newprice})
        case UPDATE_USER:
        return Object.assign({}, state, {user: action.payload})
        case CLEAR_PRICE:
        return Object.assign({},state,{}, {price: action.payload})
        default: return state
    }

}