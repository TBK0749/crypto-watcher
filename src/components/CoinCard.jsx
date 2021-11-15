import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';


export default function CoinCard({ ticker, price, remove }) {


  return (
    <Card shadow="sm" padding="lg" withBorder>
      <div className="flex justify-end">
        <Button
          size="xs"
          onClick={remove}
        >X</Button></div>
      <h1 className="font-semibold text-3xl">{ticker}</h1>
      <p>{price} USD</p>
    </Card >
  );
}