import { useEffect, useState } from 'react'
import { Container } from '@mantine/core';
import './App.css'
import Nav from "./components/Nav";
import AddCoin from "./components/AddCoin";
import TrackingCoinsGrid from "./components/TrackingCoinsGrid";
import './index.css';
import axios from 'axios';
import { Provider, useSelector } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';


function App() {

  // useEffect(() => {
  //   axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT`).then(res => {
  //     console.log(res.data);
  //   });

  // }, []);


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Container>
          <div className="grid gap-4 my-8">
            <Nav />
            <AddCoin />
            <TrackingCoinsGrid />
          </div>
        </Container>
      </PersistGate>
    </Provider>
  );
}

export default App
