"use client";

import CardAddress from "@/components/modules/Cards/CardAddress";
import React from "react";
import { useAuth } from "@/context/auth.context";
import { Loader2 } from "lucide-react";

export default function Addresses() {
  const { user, loading } = useAuth();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Addresses</h2>
      <div className="grid gap-4 md:gap-6 max-w-2xl">
        {loading ? (
          <div className="flex items-center justify-center w-full py-6">
            <Loader2 size={48} className="animate-spin text-primary" />
          </div>
        ) : (
          <>
            <CardAddress data={user?.billing} title="Billing Address" />
            <CardAddress data={user?.shipping} title="Shipping Address" />
          </>
        )}
      </div>
    </div>
  );
}
