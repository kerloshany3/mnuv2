import localFont from "next/font/local";
import "./globals.css";
import { Bungee } from 'next/font/google';
import { Abril_Fatface } from 'next/font/google';
const ArabicUI = localFont({ src: './fonts/ArabicUIDisplayBlack.ttf' })
import Link from "next/link";
const bungee = Bungee({
  subsets: ['latin'], // Load required subsets
  weight: '400', // Add desired weights
});
const abrilFatface = Abril_Fatface({
  subsets: ['latin'], // Load required subsets
  weight: '400', // Abril Fatface only supports 400 weight
});


export const metadata = {
  title: "MNU | V1",
  description: "Created by Kerlos Hany with Next Js 15",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      

      <body className={`${ArabicUI.className}  bg-slate-800`}>
        {children}

        <Link href="/">
          <button className=" active:bg-slate-500 active:ring-4 active:ring-slate-800/20 active:duration-500 active:text-slate-800 font-abril bg-slate-800 m-auto flex justify-center p-2 border-2 border-slate-400 w-fit  rounded-lg mb-6 text-slate-400">Created By KerlosDev</button>
        </Link>

      </body>
    </html>
  );
}
