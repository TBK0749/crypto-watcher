import { Modal, Button, Group } from '@mantine/core';

export default function AddCoinModal({ opened, onClose }) {
  // ใช่้ API นี้เช็คได้ว่าเหรียญมีจริงมั้ย
  // https://api.binance.com/api/v3/ticker/price

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Add coin"
    >
      {/*TODO: Implement the add coin form*/}
      {/* 1. Input field, รับชื่อเหรียญที่อยากจะ track (NANO, BNB) */}
      {/* 2. ปุ่ม Add กดแล้วให้ทำการ add เหรียญนี้เข้าไปในรายการเหรียญที่ต้องการ track */}
      {/* 2.1 ถ้าใส่เหรียญที่ไม่มีคู่ USDT ให้โชว์ error */}
      {/* 2.2 ถ้าใส่เหรียญที่ track อยู่แล้ว ให้โชว์ error ว่า You've already tracked this coin */}
      {/* 2.3 ถ้าไม่มี error ให้ทำการปิด modal ตามปกติ */}
    </Modal>
  );
}