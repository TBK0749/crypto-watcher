import { useEffect, useState } from 'react'
import { Container } from '@mantine/core';
import './App.css'
import Nav from "./components/Nav";
import AddCoin from "./components/AddCoin";
import TrackingCoinsGrid from "./components/TrackingCoinsGrid";
import './index.css';

function App() {
  useEffect(() => {
    // axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=NANOUSDT`).then(res => {
    //   console.log(res.data);
    // });
  }, []);

  const [ opened, setOpened ] = useState(false);

  return (
    <Container>
      <div className="grid gap-4 my-8">
        <Nav/>
        <AddCoin/>
        <TrackingCoinsGrid/>
      </div>
    </Container>
    // <>
    //     <Modal
    //       opened={opened}
    //       onClose={() => setOpened(false)}
    //       title="Introduce yourself!"
    //     >
    //       This is a modal content
    //     </Modal>
    //     <Group position="center">
    //       <Button onClick={() => setOpened(true)}>Open Modal</Button>
    //     </Group>
    //   </>
  );
}

export default App
