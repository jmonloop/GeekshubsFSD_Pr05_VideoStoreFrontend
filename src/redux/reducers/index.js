
//Importo la clase combineReducers para unir todos los reducers que tengamos (sería como una especie de "ruteo" de todas las funciones reducer)
import {combineReducers} from 'redux';

//Importo el reducer loginData-reducer.js
import credentials from './loginData-reducer';
//Importo el reducer filmsSearch-reducer.js
import search from './filmsSearch-reducer';

//Aquí metería todos los reducers importados para combinarlos
const rootReducer = combineReducers({
    credentials,
    search
});


//Exporto rootReducer con todos los reducers combinados
export default rootReducer;