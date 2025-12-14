type ShopProps = {
  points: number;
  setPoints: (points: number) => void;
  upgrades: {
    multiplier: number;
    autoClicker: number;
  };
  setUpgrades: (upgrades: { multiplier: number; autoClicker: number }) => void;
};

export default function Shop({ points, setPoints, upgrades, setUpgrades }: ShopProps) {
  function handlePurchase(moneymoney: number, upgradeType: keyof typeof upgrades) {
    if (points >= moneymoney) {
      setPoints(points - moneymoney);
      setUpgrades({ ...upgrades, [upgradeType]: upgrades[upgradeType] + 1 });
    } else {
      // eventually maybe like a thing saying no monay broke boi or smth
      console.log("no monay broke boi"); // this is good for now
    }
  }

  return (
    <div>
      <h2>Shop</h2>
      <button onClick={() => handlePurchase(100, "multiplier")}>
        Buy Multiplier (Cost: 100)
      </button>
      <button onClick={() => handlePurchase(500, "autoClicker")}>
        Buy Auto-clicker (Cost: 500)
      </button>
    </div>
  );
}
