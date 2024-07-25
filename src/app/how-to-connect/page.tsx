import type { Metadata } from "next";
import cartelzLogo from "@/utils/image/cartelzlogo";
import cardImage from "@/utils/image/cardImage";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Car[T]elz | اتصال به سرور",
  description: "مجموعه سرور های مسابقه ای و فان کانتر 1.6 در ایران",
  keywords:
    "cs 1.6,counter,strike,1.6,game,server,match,کانتر,مچ,مسابقه,fun,فان,اتصال به سرور,how-to-connect",
  authors: [{ name: "Hossein Mohmmadian", url: "Hosseinhunta.ir" }],
  generator: "Next.js",
  verification: { google: "QgLb_RUXj8cd62qydNNiVr2v6Qxkh8fVeufjXEK74rE" },
};

export default function HTC() {
  return (
    <main className="bg-[url('/bg.png')] font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
      <div className="max-w-4xl backdrop-blur-sm flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-r-lg lg:rounded-l-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-right">
            <Image
              src={cartelzLogo}
              width={300}
              height={300}
              alt="Cartelz"
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
            ></Image>

            <h1 className="text-3xl pt-8 lg:pt-0 font-cartelz lg:text-left">
              <span className="text-green-900">Ca</span>
              <span className="text-green-500">r</span>
              <span className="text-green-900">T</span>
              <span className="text-green-500">e</span>
              <span className="text-green-900">lz</span>
            </h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-700 opacity-25"></div>
            <h1 className="mt-5 text-4xl lg:text-xl font-asrjadid">
              تجربه ای متفاوت <span className="text-green-700">کانتر</span> در
              سرور های مسابقه ای کارتلز
            </h1>
            <div className="mt-4">
              <p className="font-semibold my-3">
                نوع کانتر خود را انتخاب کنید.
              </p>
              <p>
                اگر شما بازی کانتر 1.6 را به صورت قانونی از برنامه Steam خریداری
                کرده اید؛ بازی را در اکانت Steam خود دارید می توانید بر روی
                گزینه اول Counter Strike Steam کلیک کنید.
                <br /> در غیر این صورت بر روی Counter Strike Non Steam کلیک
                کنید.
              </p>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center p-4">
              <div className="flex flex-col items-center justify-center my-4 space-y-4 p-2">
                <a
                  href="/how-to-connect/steam"
                  className="w-max text-center bg-slate-500 hover:bg-slate-900 text-white text-xl p-3 rounded-full"
                >
                  Counter Strike Steam
                </a>
                <a
                  href="/how-to-connect/nonsteam"
                  className="w-max text-center  bg-orange-400 hover:bg-orange-800 text-white text-xl p-3 rounded-full"
                >
                  Counter Strike Non Steam
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5">
          <Image
            src={cardImage}
            alt="test"
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block "
            width={330}
            height={516}
          />
        </div>
      </div>
    </main>
  );
}
