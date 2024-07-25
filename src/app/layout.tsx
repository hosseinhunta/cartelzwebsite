import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const AsrJadid = localFont({
  src: "../../public/fonts/AsrJadid.woff2",
  display: "swap",
  variable: "--font-asrjadid",
});

const IranSans = localFont({
  src: "../../public/fonts/IRANSANS-WEB.woff2",
  display: "swap",
  variable: "--font-iransans",
});

const MaximumVoltage = localFont({
  src: "../../public/fonts/Maximum Voltage.woff2",
  display: "swap",
  variable: "--font-cartelz",
});

export const metadata: Metadata = {
  title: "Car[T]elz",
  description: "مجموعه سرور های مسابقه ای و فان کانتر 1.6 در ایران",
  keywords:
    "cs 1.6,counter,strike,1.6,game,server,match,کانتر,مچ,مسابقه,fun,فان",
  authors: [{ name: "Hossein Mohmmadian", url: "Hosseinhunta.ir" }],
  generator: "Next.js",
  verification: { google: "QgLb_RUXj8cd62qydNNiVr2v6Qxkh8fVeufjXEK74rE" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${AsrJadid.variable} ${MaximumVoltage.variable}`}
    >
      <body className={IranSans.className}>{children}</body>
    </html>
  );
}
