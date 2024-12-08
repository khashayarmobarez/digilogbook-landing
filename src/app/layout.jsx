import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from '@/utils/ThemeContext';
import Header from "@/components/templates/Header/Header";
import Footer from "@/components/templates/Footer/Footer";
import CustomHead from "@/components/module/customHead/CustomHead";




// iran sans font 
const iranSans = localFont({
  src: [
    {
      path: '../Assets/fonts/IRANSansXFaNum-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../Assets/fonts/IRANSansXFaNum-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../Assets/fonts/IRANSansXFaNum-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../Assets/fonts/IRANSansXFaNum-DemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-iran-sans',
  display: 'swap',
});

export const metadata = {
  title: "DigiLogBook | سامانه ثبت پرواز",
  description: "دیجی لاگ بوک به شما کمک می‌کند تا پرواز خود را به طور دقیق دنبال کنید.",
  keywords: ['سامانه ثبت پرواز' , 'وسیله پرواز' , 'لاگ بوک' , 'دیجی لاگ بوک' , 'ثبت پرواز', 'لاگ'],
  author: "khashayar mobarez",
  openGraph: {
    type: 'website',
    url: 'https://digilogbook.app',  // Update with your actual URL
    title: 'DigiLogBook | پرواز خود را ثبت کنید"',
    description: 'دیجی لاگ بوک بهترین راه برای ثبت اطلاعات پرواز.',
    // images: [
    //   {
    //     url: '/faveicon.ico',  // Update with your actual URL
    //     width: 1200,
    //     height: 630,
    //     alt: 'DigiLogBook - ثبت پرواز',
    //   },
    // ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" 
    dir="rtl"
    className={iranSans.className}
    >
      <CustomHead />
      {/* ThemeProvider implemented so it can be used later if needed */}
      <ThemeProvider>
        {/* <QueryClientProvider client={queryClient}> */}
          <body
            className={`antialiased w-full flex flex-col`}
          >
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          </body>
        {/* </QueryClientProvider> */}
      </ThemeProvider>
    </html>
  );
}
