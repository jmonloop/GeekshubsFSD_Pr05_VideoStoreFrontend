//Importo los types para este reducer
import { ADD_TO_CHART, REMOVE_FROM_CHART, CLEAR_CHART } from '../types';

//Declaro el estado inicial antes de la acción.
const initialState = {
    chart: []
};

//Función reducer: retorno una cosa u otra según el type que se esté ejecutando
const reducerChart = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CHART:
            //Pusheo el elemento en chart
            state.chart.push(action.payload)
            //Devuelvo lo que había en el estado más chart modificado
            return { ...state, chart: state.chart }

        case REMOVE_FROM_CHART:
            //Cojo el estado como está y a chart le aplico un filtro donde solo deja pasar lo que no sea igual que el id que le llega
            return { ...state, chart: state.chart.filter((elmnt) => elmnt.id !== action.payload)}

        case CLEAR_CHART:
            return initialState;
        default:
            return state
    }
}

//Exporto la función reducer
export default reducerChart;