import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { ProfileHeader } from "@/components/ProfileHeader";
import { ProfileSettingsSection } from "@/components/ProfileSettingsSection";
import { Main } from "@/components/utility/Main";

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
