import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

export default function CoinCard({ ticker, price }) {
  return (
    <Card shadow="sm" padding="lg" withBorder>
      <h1 className="font-semibold text-3xl">{ticker}</h1>
      <p>{price} USD</p>
    </Card>
  );
}