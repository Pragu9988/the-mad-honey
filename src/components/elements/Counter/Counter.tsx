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
    <div className="price-counter items-center inline-flex bg-gray-100 p-0.5 rounded-sm">
      <button className="p-1 text-white bg-accent hover:bg-accent-400 rounded" onClick={decrement}>
        <Minus size={18} />
      </button>
      <span className="px-2 w-fit text-base text-left">{count}</span>
      <button className="p-1 text-white bg-accent hover:bg-accent-400 rounded" onClick={increment}>
        {" "}
        <Plus size={18} />
      </button>
    </div>
  );
};

export default Counter;
