//Importo los types para este reducer
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../types';

//Declaro el estado inicial antes de la acción.
const initialState = {
    cart: []
};

//Función reducer: retorno una cosa u otra según el type que se esté ejecutando
const reducerCart = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            //Pusheo el elemento en cart
            state.cart.push(action.payload)
            //Devuelvo lo que había en el estado más cart modificado
            return { ...state, cart: state.cart }

        case REMOVE_FROM_CART:
            //Cojo el estado como está y a cart le aplico un filtro donde solo deja pasar lo que no sea igual que el id que le llega
            return { ...state, cart: state.cart.filter((elmnt) => elmnt.id !== action.payload) }

        case CLEAR_CART:
            return initialState;
        default:
            return state
    }
}

//Exporto la función reducer
export default reducerCart;