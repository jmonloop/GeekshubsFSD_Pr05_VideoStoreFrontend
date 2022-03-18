//Importo los types para este reducer
import { ADD_TO_CHART, REMOVE_FROM_CHART, CLEAR_CHART } from '../types';

//Declaro las variables y su estado inicial antes de la acción. No tienen por qué llamarse igual que las que llegan desde el backend
const initialState = {
    chart: []
};
let chartArr = [];

//Función reducer: retorno una cosa u otra según el type que se esté ejecutando
const reducerChart = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CHART:
            chartArr.push(action.payload)
            return chartArr

        case REMOVE_FROM_CHART:
            for (let i = 0; i < chartArr.length; i++) {
                if (chartArr[i].id === action.payload) {
                    chartArr.splice(i, 1)
                }
            }
            return chartArr

        case CLEAR_CHART:
            chartArr = [];
            return chartArr;
        default:
            return state
    }
}

//Exporto la función reducer
export default reducerChart;