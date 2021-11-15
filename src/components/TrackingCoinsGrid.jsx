import CoinCard from "./CoinCard";
import { useDispatch, useSelector } from "react-redux";
import { Col, Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { remove, updating } from "./slice/trackedCoinsSlice";


export default function TrackingCoinsGrid() {
  const trackedCoins = useSelector(state => state.trackedCoins);
  const dispatch = useDispatch();


  useEffect(() => {

    const interval = setInterval(() => {
      for (let coin of trackedCoins) {
        axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${coin.name}USDT`).then(res => {
          dispatch(updating(res.data));
        })
      }
    }, 30000);
    return () => clearInterval(interval);

  }, []);

  return (
    <div>
      {/*TODO: Show message 'No tracking coin.' if there is no coin to show.*/}

      {/*TODO: Change this to grid of 4 columns*/}

      {/* วนลูปโชว์เหรียญทุกตัวที่ track อยู่ */}
      {/* ให้ update ราคา auto ทุก 30 วิ (challenge) */}

      {trackedCoins.length === 0 ?
        <div className="flex justify-center text-8xl" >"No tracking coin."</div> :
        <Grid >{trackedCoins.map((coin, i) =>
          <Col span={3} key={i}>
            <CoinCard ticker={coin.name} price={Number(coin.price).toFixed(2)} remove={() => dispatch(remove(i))} />
          </Col>
        )}
        </Grid>
      }
    </div>
  );
}