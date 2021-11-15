import { Button } from '@mantine/core';
import { useState } from 'react';
import AddCoinModal from "./AddCoinModal";

export default function AddCoin() {
  const [opened, setOpened] = useState(false);
  return (
    <div>
      <AddCoinModal
        // TODO: opened should link to the Add Coin button
        opened={opened}

        // TODO: We should add the coin in the onClose function, also we need to hide the modal
        onClose={() => setOpened(false)}
      />
      {/* ปุ่ม Add Coin คลิกแล้วต้องโชว์ AddCoinModal */}
      <Button onClick={() => setOpened(true)}>Add Coin</Button>
    </div>
  );
}