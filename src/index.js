import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
 

ReactDOM.render(
  // <Provider>
  //   <BrowserRouter>
    
  //   </BrowserRouter>
    
  // </Provider>
   <App />
     
  ,
  document.getElementById('root')
);

