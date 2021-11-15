import { Modal, Button, Autocomplete } from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tracking } from './slice/trackedCoinsSlice';


export default function AddCoinModal({ opened, onClose }) {
  // ใช่้ API นี้เช็คได้ว่าเหรียญมีจริงมั้ย
  // https://api.binance.com/api/v3/ticker/price

  // The interested coins
  const [coins, setCoins] = useState([]);

  // Array with coin name as values (no 'USDT' at the end)
  const [coinNames, setCoinNames] = useState([]);

  // Value for the autocomplete
  const [addCoin, setAddCoin] = useState("");

  const dispatch = useDispatch();
  const trackedCoins = useSelector(state => state.trackedCoins);
  const [errorTracked, setErrorTracked] = useState("");
  const [errorAddCoin, setErrorAddCoin] = useState("");


  // https://mantine.dev/core/autocomplete/

  useEffect(() => {
    axios.get("https://api.binance.com/api/v3/ticker/price").then((res) => {

      const usdtCoinsWithoutUsdtSuffix = res.data
        .filter(coin => coin.symbol.endsWith('USDT'))
        .map(coin => ({ name: coin.symbol.replace('USDT', ''), price: Number(coin.price) }));

      const coinNames = usdtCoinsWithoutUsdtSuffix.map(coin => coin.name);

      setCoins(usdtCoinsWithoutUsdtSuffix);
      setCoinNames(coinNames);

    });

  }, []);

  const addCoinToSrackedCoin = () => {
    if (addCoin === "") {
      setErrorAddCoin("Please select a coin");
      return;
    }

    const coin = coins.find(coin => coin.name === addCoin);
    const tracked = trackedCoins.filter(coin => coin.name === addCoin);

    if (tracked.length === 0) {
      dispatch(tracking(coin));
      { onClose() }

    } else {
      setErrorTracked("You've already tracked this coin");
    }

    setErrorAddCoin("");
  }


  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        overflow="outside"
        title="Add coin"
        closeOnClickOutside={false}
      >
        {/*TODO: Implement the add coin form*/}
        {/* 1. Input field, รับชื่อเหรียญที่อยากจะ track (NANO, BNB) */}
        {/* 2. ปุ่ม Add กดแล้วให้ทำการ add เหรียญนี้เข้าไปในรายการเหรียญที่ต้องการ track */}
        {/* 2.1 ถ้าใส่เหรียญที่ไม่มีคู่ USDT ให้โชว์ error */}
        {/* 2.2 ถ้าใส่เหรียญที่ track อยู่แล้ว ให้โชว์ error ว่า You've already tracked this coin */}
        {/* 2.3 ถ้าไม่มี error ให้ทำการปิด modal ตามปกติ */}

        <div>
          <div>
            <Autocomplete
              label={errorAddCoin}
              placeholder="Coin"
              required
              data={coinNames}
              value={addCoin}
              onChange={value => (setAddCoin(value), setErrorTracked(""))}
            />
          </div>
          <div className="flex justify-start">{errorTracked}</div>
          <div className="flex justify-end pt-6">
            <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}
              onClick={() => { addCoinToSrackedCoin() }}
            >Add</Button>
          </div>
        </div>
      </Modal>
    </>

  );
}