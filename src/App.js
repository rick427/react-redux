import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeComponent from './components/CakeComponent';
import HooksCakeComponent from './components/hooksCakeComponent';
import IceCreamComponent from './components/IceCreamComponent';

function App() {
  return (
    <Provider store={store}>
      <CakeComponent/>
      <hr/>
      <HooksCakeComponent/>
      <hr/>
      <IceCreamComponent/>
    </Provider>
  );
}

export default App;
