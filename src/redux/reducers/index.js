
//Importo la clase combineReducers para unir todos los reducers que tengamos (sería como una especie de "ruteo" de todas las funciones reducer)
import {combineReducers} from 'redux';

//Importo el reducer loginData-reducer.js
import credentials from './loginData-reducer';
//Aquí importaría otros reducers si los hubiese
//************* */

//Aquí metería todos los reducers importados para combinarlos
const rootReducer = combineReducers({
    credentials
});


//Exporto rootReducer con todos los reducers combinados
export default rootReducer;