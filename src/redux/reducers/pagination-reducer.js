//Importo los types para este reducer
import {PAGINATION} from '../types';

//Declaro las variables y su estado inicial antes de la acción. No tienen por qué llamarse igual que las que llegan desde el backend
const initialState = {
    pageNum : ""
};


//Función reducer: retorno una cosa u otra según el type que se esté ejecutando
const reducerPagination = (state = initialState, action) => {
    switch(action.type){
        //GUARDO EN EL ESTADO LOS DATOS DEL USUARIO LOGUEADO
        case PAGINATION :
            return action.payload;
        
        default :
            return state
    }
}

//Exporto la función reducer
export default reducerPagination;