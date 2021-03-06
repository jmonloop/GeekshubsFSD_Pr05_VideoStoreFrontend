import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './globalCSS'

//Importo la clase Provider de react-redux para proveer estados a react
import { Provider } from 'react-redux';
//Importo la store para leer o escribir estados almacenados
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
      <Provider store={store}>
      <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
