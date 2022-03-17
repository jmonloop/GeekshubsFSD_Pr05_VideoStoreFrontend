//Importo los types para este reducer
import { ADMIN_MOD } from '../types';

//Declaro las variables y su estado inicial antes de la acción. No tienen por qué llamarse igual que las que llegan desde el backend
const initialState = {
    user: {}
};


//Función reducer: retorno una cosa u otra según el type que se esté ejecutando
const reducerAdminData = (state = initialState, action) => {
    switch (action.type) {
        //ACTUALIZAMOS DATOS DE USUARIO CON LO QUE NOS LLEGA DE ADMINFORM
        case ADMIN_MOD:
            return {...state, user: action.payload}

        default:
            return state
    }
}

//Exporto la función reducer
export default reducerAdminData;