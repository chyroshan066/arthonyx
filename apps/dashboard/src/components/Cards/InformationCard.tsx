import Image from "next/image";
import { ReadMore } from "../ui/ReadMore";

export const InformationCard = () => (
  <>
    {/* Card 1 */}
    <div className="w-full px-3 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
      <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap -mx-3">
            <div className="max-w-full px-3 lg:w-1/2 lg:flex-none">
              <div className="flex flex-col h-full">
                <p className="pt-2 mb-1 font-semibold">Built by developers</p>
                <h5 className="font-bold">Soft UI Dashboard</h5>
                <p className="mb-12">
                  {" "}
                  From colors, cards, typography to complex elements, you will
                  find the full documentation.
                </p>
                <ReadMore color="slate-500" />
              </div>
            </div>
            <div className="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none">
              <div className="h-full bg-gradient-soft-purple700-pink500 rounded-xl">
                <div className="relative flex items-center justify-center h-full">
                  <Image
                    className="relative z-20 w-full pt-6"
                    src="/images/rocket-white.png"
                    alt="rocket"
                    width={500}
                    height={500}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
      <div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-4">
        <div
          className="relative h-full overflow-hidden bg-cover rounded-xl"
          style={{ backgroundImage: "url('/images/random/ivancik.jpg')" }}
        >
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-soft-gray900-slate800 opacity-80" />
          <div className="relative z-10 flex flex-col flex-auto h-full p-4">
            <h5 className="pt-2 mb-6 font-bold text-white">
              {" "}
              Work with the rockets
            </h5>
            <p className="text-white">
              {" "}
              Wealth creation is an evolutionarily recent positive-sum game. It
              is all about who take the opportunity first.
            </p>
            <ReadMore color="white" />
          </div>
        </div>
      </div>
    </div>
  </>
);
