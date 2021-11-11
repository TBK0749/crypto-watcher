import { Button } from '@mantine/core';
import AddCoinModal from "./AddCoinModal";

export default function AddCoin() {
  return (
    <div>
      <AddCoinModal
        // TODO: opened should link to the Add Coin button
        opened={false}

        // TODO: We should add the coin in the onClose function, also we need to hide the modal
        onClose={() => { }}
      />
      {/* ปุ่ม Add Coin คลิกแล้วต้องโชว์ AddCoinModal */}
      <Button>Add Coin</Button>
    </div>
  );
}