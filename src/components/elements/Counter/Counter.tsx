"use client";

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="price-counter border border-accent-300 p-2 items-center inline-flex bg-white rounded-sm">
      <button className="px-2" onClick={decrement}>
        <Minus size={20} />
      </button>
      <span className="px-2 w-8 text-lg text-center">{count}</span>
      <button className="px-2" onClick={increment}>
        {" "}
        <Plus size={20} />
      </button>
    </div>
  );
};

export default Counter;
