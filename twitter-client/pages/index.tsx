import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen">
        <div className="col-span-3 "></div>
        <div className="col-span-6 border-r-2 border-l-2 border-slate-800 "></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
