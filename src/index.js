import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BX24 } from "bx24";
import store from './modules/redux/store';
import { render } from 'react-dom'
import App from './App'






  ReactDOM.render(

    // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      
          <App />
      
      </Provider>
    </BrowserRouter >,
    // </React.StrictMode>,
    document.getElementById('root')
  );



