"use client";
import { useState } from "react";
import Clicker from "./components/Clicker";
import Shop from "./components/Shop";
import { Shippori_Antique } from "next/font/google";

export default function Home() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [autoClickerLevel, setAutoClickerLevel] = useState(0);
  const [upgrades, setUpgrades] = useState({
    multiplier: 1,
    autoClicker: 0,
  });


  
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f472a] to-[#1a5a3a] flex flex-col">
      <main className="flex min-h-screen flex-col items-center justify-between py-32 px-16 bg-linear-to-br from-[#0f472a] to-[#1a5a3a]">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className={"text-6xl self-center my-10"}>Haxmas Day 1</h1>
          <p className={"text-3xl font-bold"}>Count: {count}</p>
          <Clicker 
          onClick=
          {
            () => {setCount(count + 1 * multiplier)}
          } />
          <Shop 
          points={count}
          setPoints={setCount}
          upgrades={upgrades} //so hard ik
          setUpgrades={setUpgrades}
          />
        </div>
      </main>
    </div>
  );
}