import { ProfileDetailCard } from "../../cards/ProfileDetailCard";
import { ProjectGalleryCard } from "../../cards/ProjectGalleryCard";
import { RecentChatsCard } from "../../cards/RecentChatsCard";
import { SettingsToggleCard } from "../../cards/SettingsToggleCard";

export const ProfileSettingsSection = () => (
  <div className="flex flex-wrap -mx-3">
    <SettingsToggleCard />
    <ProfileDetailCard />
    <RecentChatsCard />
    <ProjectGalleryCard />
  </div>
);
