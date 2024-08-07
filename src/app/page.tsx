import Image from "next/image";
import cartelzLogo from "@/utils/image/cartelzlogo";
import cardImage from "@/utils/image/cardImage";
export default function Home() {
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
            <p className="mt-4">
              <strong className="">سلام به همه پلیرهای عزیز</strong>
              <br />
              <br />
              ما اینجا هستیم تا بهترین تجربه بازی کانتر 1.6 را برای شما فراهم
              کنیم.
            </p>
            <div className="flex md:flex-row flex-col items-center justify-center p-4">
              <div className="flex flex-col items-center justify-center my-4 space-y-4 p-2">
                <a
                  href="/how-to-connect"
                  className="w-48 text-center bg-green-700 hover:bg-green-900 text-white text-2xl py-2 px-4 rounded-full font-asrjadid"
                >
                  اتصال به سرور
                </a>
                <a
                  href="/ban-list"
                  className="w-48 text-center  bg-red-700 hover:bg-red-900 text-white text-2xl py-2 px-4 rounded-full font-asrjadid"
                >
                  پیگیری بن
                </a>
              </div>
              <div className="flex flex-col items-center justify-center my-4 space-y-4 p-2">
                <a
                  href="https://t.me/CarTelzcss"
                  className="w-48 text-center bg-blue-400 hover:bg-blue-600 text-white text-2xl py-2 px-4 rounded-full font-asrjadid"
                >
                  تلگرام ما
                </a>
                <a
                  href="/status"
                  className="w-48 text-center bg-slate-500 hover:bg-slate-900 text-white text-2xl py-2 px-4 rounded-full font-asrjadid"
                >
                  وضعیت سرور ها
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
