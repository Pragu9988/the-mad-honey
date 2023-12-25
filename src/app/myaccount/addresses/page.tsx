import CardAddress from "@/components/modules/Cards/CardAddress";
import React from "react";

export default function Addresses() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Dashboard</h2>
      <div className="grid gap-4 md:gap-6 max-w-2xl">
        <CardAddress />
        <CardAddress />
      </div>
    </div>
  );
}
