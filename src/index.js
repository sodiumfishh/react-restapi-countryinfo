import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import App from './App';
import {MyContextProvider} from "./context"

ReactDOM.render(
  <Router>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </Router>,
  document.getElementById('root')
);
