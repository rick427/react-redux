import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeComponent from './components/CakeComponent';
import HooksCakeComponent from './components/hooksCakeComponent';

function App() {
  return (
    <Provider store={store}>
      <CakeComponent/>
      <hr/>
      <HooksCakeComponent/>
    </Provider>
  );
}

export default App;
