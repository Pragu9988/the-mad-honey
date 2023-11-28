"use client";

import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Logo from "../Logo";
import AnnouncementBar from "../AnnouncementBar/AnnouncementBar";

const Header = () => {
  const [showAnnouncement, setShowAnnouncement] = useState<boolean>(true);

  const handleRemoveAnnouncement = () => {
    setShowAnnouncement(false);
  };

  return (
    <div className="site-top">
      {showAnnouncement && (
        <AnnouncementBar handleRemoveAnnouncement={handleRemoveAnnouncement} />
      )}
      <header id="site-header" className="main-header bg-white border-b py-2">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-4">
            <Logo />
            <Navbar />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
