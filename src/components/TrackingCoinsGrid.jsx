import CoinCard from "./CoinCard";

export default function TrackingCoinsGrid() {
  return (
    <div>
      {/*TODO: Show message 'No tracking coin.' if there is no coin to show.*/}

      {/*TODO: Change this to grid of 4 columns*/}

      {/* วนลูปโชว์เหรียญทุกตัวที่ track อยู่ */}
      {/* ให้ update ราคา auto ทุก 30 วิ (challenge) */}
      <CoinCard ticker={`NANO/USDT`} price={7500} />
    </div>
  );
}