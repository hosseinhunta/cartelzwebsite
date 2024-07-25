import type { Metadata } from "next";
import Image from "next/image";
import ImageModal from "@/components/ImageModal";

import "../app.css";

export default function NonSteam() {
  return (
    <div className="text-white bg-gradient-to-b from-slate-800 to-slate-950 antialiased px-4">
      <header className="flex gap-10 mb-20 items-center w-full max-w-[28rem] mx-auto">
        <a href="blog.html" className="text-xl font-bold border-b-4 mt-5">
          Car[T]elz Blog
        </a>
        <a href="#" target="_blank" className="ms-auto">
          <i className="bi bi-twitter-x text-2xl"></i>
        </a>
      </header>
      <main className="py-12 w-full max-w-[28rem] mx-auto tracking-normal antialiased leading-relaxed text-justify">
        <h1 className="mb-5 text-3xl font-bold">اتصال به سرور با کانتر 1.6</h1>

        <Image
          src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/10/header.jpg?t=1666823513"
          alt="counter strike Steam"
          width={480}
          height={215}
          className="object-cover h-48 w-full mb-5 rounded-lg"
        />

        <p className="text-lg mb-12 tracking-wide">
          سلام به همه دوستدارن بازی کانتر استرایک 1.6!
        </p>
        <p className="mb-5 line-clamp-4">
          در این پست قصد داریم نحوه اتصال به سرور کانتر 1.6 خودمون رو به شما
          آموزش بدیم. با این آموزش ساده و سریع، به راحتی می‌تونید به سرور بازی
          متصل بشید و از بازی لذت ببرید.
        </p>

        <p className="text-lg mb-4 tracking-wide">
          مرحله 1: نصب کردن بازی کانتر استرایک 1.6
        </p>

        <p className="mb-5">
          ابتدا بازی کانتر استرایک 1.6 رو روی سیستم خودتون نصب کنید. اگر بازی رو
          هنوز نصب نکردید، از لینک زیر می‌تونید دانلود و نصب کنید.
        </p>
        <a
          className="mt-4 text-blue-500 hover:text-blue-300"
          href="https://dl.cs-skini.me/cs/Counter-Strike.exe"
        >
          دانلود بازی کانتر استرایک 1.6
        </a>

        <p className="text-lg my-4 tracking-wide">مرحله 2: نصب کردن انتی چیت</p>

        <p className="mb-5">
          برای اتصال به سرور، باید آنتی چیت مناسب نصب شده باشه. برای نصب آنتی
          چیت، مراحل زیر رو دنبال کنید:
        </p>
        <ol className="list-decimal list-outside space-y-5 mb-5">
          <li>
            به وب‌سایت آنتی چیت مراجعه کنید و فایل نصب رو دانلود کنید.
            <br />
            <a
              className="text-blue-500 hover:text-blue-300"
              href="http://dl1.wikishare.ir/sdlftpuser/95/05/12/sXe.Injected_17.2.rar"
            >
              دانلود نرم افزار sXe Injected 17.2
            </a>
          </li>
          <li>فایل دانلود شده رو نصب و اجرا کنید و مراحل نصب رو دنبال کنید.</li>
        </ol>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span className="text-red-500">
                از (13 فروردین) اکثر پلیر ها هنگام اجرا آنتی sXe Injected با
                مشکل روبرو شدند. بسیاری مشکل قطع و وصلی و بسیاری هم مشکل کند
                اجرا شدن را گزارش دادند. در این آموزش اختصاصی می خواهیم به رفع
                این مشکل بپردازیم و خواهشمندیم مراحل را با دقت انجام دهید تا با
                مشکل مواجه نشوید.
              </span>
              <span className="p-6 transition group-open:rotate-180 text-red-200">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <ol className="list-decimal list-outside space-y-5 mt-4">
              <li>
                ابتدا وارد Control Panel شوید و System and Security را انتخاب
                کنید و روی Windows Defender Firewall کلیک کنید.
                <br />
                <ImageModal
                  src={
                    "https://client.royalcs.ir/index.php?rp=/images/kb/27_1.png"
                  }
                  alt="Turn Windows Defender Firewall"
                />
                <ImageModal
                  src={
                    "https://client.royalcs.ir/index.php?rp=/images/kb/28_2.png"
                  }
                  alt="Turn Windows Defender Firewall"
                />
                <ImageModal
                  src={
                    "https://client.royalcs.ir/index.php?rp=/images/kb/29_3.png"
                  }
                  alt="Turn Windows Defender Firewall"
                />
              </li>
              <li>
                سپس Turn Windows Defender Firewall on or off را انتخاب کنید.
                <br />
                <ImageModal
                  src={
                    "https://client.royalcs.ir/index.php?rp=/images/kb/45_4.png"
                  }
                  alt="Turn Windows Defender Firewall"
                />
              </li>
              <li>
                از فعال بودن ویندوز فایروال مطمین شوید. دقت کنید تیک ها مانند
                عکس زیر باشد سپس روی Ok کلیک کنید تا تغییرات اعمال شود.
                <br />
                <ImageModal
                  src={
                    "https://client.royalcs.ir/index.php?rp=/images/kb/32_5.png"
                  }
                  alt="Turn Windows Defender Firewall"
                />
              </li>
              <li>
                به صفحه قبل بازگردید و Advanced settings را انتخاب کنید.
                <br />
                <ImageModal
                  src={
                    "https://client.royalcs.ir/index.php?rp=/images/kb/44_6.png"
                  }
                  alt="Turn Windows Defender Firewall"
                />
              </li>
              <li>
                بر روی Inbound Rules کلیک کنید و از سمت راست New Rule... را
                انتخاب کنید.
                <br />
                <ImageModal
                  src={
                    "https://client.royalcs.ir/index.php?rp=/images/kb/34_7.png"
                  }
                  alt="Turn Windows Defender Firewall"
                />
              </li>
              <li>
                در صفحه جدید تیک Custom را بزنید.
                <br />
                <ImageModal
                  src={
                    "https://client.royalcs.ir/index.php?rp=/images/kb/35_8.png"
                  }
                  alt="Turn Windows Defender Firewall"
                />
              </li>
              <li>
                سایر مراحل را Next بزنید تا به تصویر زیر برسید. مطابق عکس زیر
                عمل کنید.
                <br />
                <ImageModal
                  src={
                    "https://client.royalcs.ir/index.php?rp=/images/kb/36_9.png"
                  }
                  alt="Turn Windows Defender Firewall"
                />
              </li>
              <li>
                در صفحه جدید طبق عکس زیر عدد{" "}
                <span className="text-red-500">141.136.39.211</span> را تایپ
                کنید و Ok را بزنید.
                <br />
                <ImageModal
                  src={
                    "https://client.royalcs.ir/index.php?rp=/images/kb/37_10.png"
                  }
                  alt="Turn Windows Defender Firewall"
                />
              </li>
              <li>
                تیک Block the connection را بزنید.
                <br />
                <ImageModal
                  src={
                    "https://client.royalcs.ir/index.php?rp=/images/kb/41_11.png"
                  }
                  alt="Turn Windows Defender Firewall"
                />
              </li>
              <li>
                یک نام دلخواه برای مثال sxe را وارد می کنیم.
                <br />
                <ImageModal
                  src={
                    "https://client.royalcs.ir/index.php?rp=/images/kb/43_12.png"
                  }
                  alt="Turn Windows Defender Firewall"
                />
              </li>
              <li>
                در پایان به صفحه تصویر زیر بر میگردیم و روی Outbound Rules کلیک
                می کنیم و از سمت راست New Rule... را می زنیم و همین مراحل (مرحله
                6 به بعد) را مجدد انجام می دهیم.
                <br />
                <ImageModal
                  src={
                    "https://client.royalcs.ir/index.php?rp=/images/kb/42_13.png"
                  }
                  alt="Turn Windows Defender Firewall"
                />
              </li>
            </ol>
          </details>
        </div>

        <p className="mb-4 tracking-wide">
          مرحله 3: وارد شدن به قسمت کنسول بازی
        </p>

        <p className="mb-5">
          پس از باز شدن بازی، کلید `~` (تیلدا) که معمولا زیر کلید Esc قرار داره
          رو فشار بدید تا کنسول بازی باز بشه. در کنسول می‌تونید دستورات مختلف رو
          وارد کنید.
        </p>
        <p className="mb-4 tracking-wide">
          مرحله 4: وارد کردن دستور اتصال به سرور
        </p>

        <p className="mb-5">
          حالا که کنسول بازی باز شده، دستور زیر رو وارد کنید و سپس Enter رو
          بزنید:
          <br />
          <br />
          <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto">
            <code className="text-left" dir="ltr">
              connect RGCS.IR:18000
            </code>
          </pre>
        </p>
        <p>
          امیدوارم این آموزش به شما کمک کنه تا به راحتی به سرور کانتر 1.6 خودتون
          متصل بشید.
        </p>
      </main>
    </div>
  );
}
