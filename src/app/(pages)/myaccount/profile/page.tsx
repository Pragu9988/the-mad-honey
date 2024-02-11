import CardEditPassword from "@/components/modules/Cards/CardEditPassword";
import CardEditProfile from "@/components/modules/Cards/CardEditProfile";
import React from "react";

export default function Profile() {
  return (
    <div className="space-y-6">
      {/* <h2 className="text-xl font-semibold text-gray-900">Profile</h2> */}
      <div className="grid grid-cols-5 gap-4 md:gap-8">
        <div className="col-span-3">
          <CardEditProfile />
        </div>
        <div className="col-span-2">
          <CardEditPassword />
        </div>
      </div>
    </div>
  );
}
