import Image from "next/image";

export const ProfileAvatar = () => (
  <>
    {/* Avatar */}
    <div className="flex-none w-auto max-w-full px-3">
      <div className="text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-surface transition-all duration-200">
        <Image
          src="/images/random/bruce-mars.jpg"
          width={74}
          height={74}
          alt="profile_image"
          className="w-full shadow-soft-sm rounded-xl object-cover"
        />
      </div>
    </div>

    {/* User Info */}
    <div className="flex-none w-auto max-w-full px-3 my-auto">
      <div className="h-full">
        <h5 className="mb-1">Alec Thompson</h5>
        <p className="mb-0 font-semibold leading-normal text-sm">
          CEO / Co-Founder
        </p>
      </div>
    </div>
  </>
);
