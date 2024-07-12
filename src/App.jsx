import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Approuter from './Routes/Approuter';
import store from './redux/store'; // Adjust the path accordingly

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Approuter />
    </Provider>
  );
}

export default App;

