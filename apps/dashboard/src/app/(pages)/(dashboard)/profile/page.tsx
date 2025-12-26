import { Footer } from "@/components/layout/Footer";
import { NavBar } from "@/components/layout/NavBar/NavBar";
import { ProfileHeader } from "@/components/ProfileHeader";
import { ProfileSettingsSection } from "@/components/ProfileSettingsSection";
import { Main } from "@/components/layout/Main";

export default function Profile() {
  return (
    <Main className="bg-gray-50">
      <NavBar />
      <ProfileHeader />
      <div className="w-full p-6 mx-auto">
        <ProfileSettingsSection />
        <Footer />
      </div>
    </Main>
  );
}
