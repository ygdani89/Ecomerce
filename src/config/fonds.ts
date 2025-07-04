import { Geist, Geist_Mono , Montserrat_Alternates ,UnifrakturCook
} from "next/font/google";


export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });
  
  export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });


  export const titleFond = Montserrat_Alternates({
      variable: "--font-geist-mono",
      subsets: ["latin"],
      weight: ["500" , "700"]
  });


  // app/layout.