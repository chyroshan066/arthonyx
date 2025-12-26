"use client";

import { ProfileAvatar } from "./ProfileAvatar";
import { ProfileTabs } from "./ProfileTabs";

export const ProfileHeader = () => (
  <div className="w-full px-6 mx-auto">
    {/* Background Image Section */}
    <div
      className="relative flex items-center p-0 mt-6 overflow-hidden bg-center bg-cover min-h-75 rounded-2xl"
      style={{
        backgroundImage: "url('/images/curved-images/curved0.jpg')",
        backgroundPositionY: "50%",
      }}
    >
      <span className="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-soft-purple700-pink500 opacity-60" />
    </div>

    {/* Profile Card Section */}
    <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
      <div className="flex flex-wrap -mx-3">
        <ProfileAvatar />
        <ProfileTabs />
      </div>
    </div>
  </div>
);
