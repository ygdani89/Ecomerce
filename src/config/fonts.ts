import { Gentium_Plus, Gelasio,  Montserrat_Alternates, UnifrakturCook } from "next/font/google";

export const geistSans = Gelasio ({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
  
  export const geistMono = Gentium_Plus({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    weight: "400"
  });


  export const titleFont = Montserrat_Alternates({
      variable: "--font-title",
      subsets: ["latin"],
      weight: ["500" , "700"]
  });