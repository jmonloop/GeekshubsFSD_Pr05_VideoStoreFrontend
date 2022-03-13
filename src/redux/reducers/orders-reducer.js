//Importo los types para este reducer
import {USER_ORDERS} from '../types';

//Declaro las variables y su estado inicial antes de la acción. No tienen por qué llamarse igual que las que llegan desde el backend
const initialState = {
    orders : []
};


//Función reducer: retorno una cosa u otra según el type que se esté ejecutando
const reducerOrders = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO LOS DATOS DEL USUARIO LOGUEADO
        case USER_ORDERS :
            return action.payload;
        
        default :
            return state
    }
}

//Exporto la función reducer
export default reducerOrders;