import { useEffect, useState } from 'react'
import { Container } from '@mantine/core';
import './App.css'
import Nav from "./components/Nav";
import AddCoin from "./components/AddCoin";
import TrackingCoinsGrid from "./components/TrackingCoinsGrid";
import './index.css';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=NANOUSDT`).then(res => {
      console.log(res.data);
    });
  }, []);

  return (
    <Container>
      <div className="grid gap-4 my-8">
        <Nav />
        <AddCoin />
        <TrackingCoinsGrid />
      </div>
    </Container>
  );
}

export default App
