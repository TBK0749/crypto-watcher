import { Modal, Button, Group } from '@mantine/core';

export default function AddCoinModal({opened, onClose}) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Add coin"
    >
      {/*TODO: Implement the add coin form*/}
    </Modal>
  );
}