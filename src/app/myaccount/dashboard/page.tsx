import React from "react";
import dashboardInfo from "@/data/dashboardInfo";
import CardDashboard from "@/components/modules/Cards/CardDashboard";
import { icons } from "@/utils/icons.utils";
export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Dashboard</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {dashboardInfo.map((info, index) => {
          return (
            <CardDashboard
              key={info.id}
              id={0}
              icon={icons[info.icon]}
              label={info.label}
              link={info.path}
            />
          );
        })}
      </div>
    </div>
  );
}
