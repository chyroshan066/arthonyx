import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Icon, IconClass, Id } from "@/types";
import { Card } from "@/components/ui/card/Card";
import { Button } from "@/components/ui/Button";
import { SocialLoginButtons } from "./SocialLoginButtons";

interface SocialProvider extends Id, Icon, IconClass {
  containerClass?: string;
}

const SOCIAL_PROVIDERS: SocialProvider[] = [
  {
    id: "facebook",
    icon: faFacebookF,
    containerClass: "bg-[#3C5A9A] rounded-lg",
    iconClass: "text-white text-[16px]",
  },
  {
    id: "apple",
    icon: faApple,
    iconClass: "text-black text-[32px]",
  },
];

export const RegistrationFormCard = () => (
  <div className="container">
    <div className="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48">
      <Card
        outerDivClassName="mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12"
        innerDivClassName="z-0 bg-white shadow-soft-xl"
      >
        <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
          <h5>Register with</h5>
        </div>
        <div className="flex flex-wrap px-3 -mx-3 sm:px-6 xl:px-12">
          {SOCIAL_PROVIDERS.map((provider) => (
            <SocialLoginButtons key={provider.id} className="first:ml-auto">
              <div
                className={`mx-auto flex items-center justify-center w-[24px] h-[32px] ${provider.containerClass}`}
              >
                <FontAwesomeIcon
                  icon={provider.icon}
                  className={provider.iconClass}
                />
              </div>
            </SocialLoginButtons>
          ))}
          <SocialLoginButtons className="mr-auto">
            <svg
              width="24px"
              height="32px"
              viewBox="0 0 64 64"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(3.000000, 2.000000)" fillRule="nonzero">
                  <path
                    d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769"
                    fill="#EB4335"
                  ></path>
                </g>
              </g>
            </svg>
          </SocialLoginButtons>
          <div className="relative w-full max-w-full px-3 mt-2 text-center shrink-0">
            <p className="z-20 inline px-4 mb-2 font-semibold leading-normal bg-white text-sm text-slate-400">
              or
            </p>
          </div>
        </div>
        <div className="flex-auto p-6">
          <form role="form text-left">
            <div className="mb-4">
              <input
                type="text"
                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                placeholder="Name"
                aria-label="Name"
                aria-describedby="email-addon"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="email-addon"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="password-addon"
              />
            </div>
            <div className="min-h-6 pl-6.92 mb-0.5 block">
              <input
                id="terms"
                className="w-4.92 h-4.92 ease-soft -ml-6.92 rounded-1.4 checked:bg-gradient-soft-gray900-slate800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-200 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                type="checkbox"
                value=""
                defaultChecked={true}
              />
              <label
                className="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700"
                htmlFor="terms"
              >
                I agree the&nbsp;
                <Link href="#" className="font-bold text-slate-700">
                  Terms and Conditions
                </Link>
              </label>
            </div>
            <div className="text-center">
              <Button
                variant="gradient"
                backgroundColor="bg-gradient-soft-gray900-slate800"
                className="w-full mt-6 mb-2 border-0 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
                btnText="Sign up"
              />
            </div>
            <p className="mt-4 mb-0 leading-normal text-sm">
              Already have an account?&nbsp;
              <Link href="/login" className="font-bold text-slate-700">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </Card>
    </div>
  </div>
);
