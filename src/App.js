import React from 'react';
import './App.css';
import Navbarjs from './components/navbar';
import { Provider } from './context/weatherContext'
import Routes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  return (

    <Provider>
      <BrowserRouter>
        <Navbarjs />
        <Routes />
      </BrowserRouter>
    </Provider>


  );
}

export default App;
