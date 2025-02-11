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
      path: '../Assets/fonts/SF-Pro.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-iran-sans',
  display: 'swap',
});

export const metadata = {
  title: "DigiLogBook | Flight Logging System",
  description: "DigiLogBook helps you accurately track your flights.",
  keywords: ['Flight Logging System', 'Flight Device', 'Log Book', 'DigiLogBook', 'Flight Logging', 'Log'],
  author: "Khashayar Mobarez",
  openGraph: {
    type: 'website',
    url: 'https://digilogbook.app',  // Update with your actual URL
    title: 'DigiLogBook | Log Your Flight',
    description: 'DigiLogBook is the best way to log flight information.',
    // images: [
    //   {
    //     url: '/faveicon.ico',  // Update with your actual URL
    //     width: 1200,
    //     height: 630,
    //     alt: 'DigiLogBook - Flight Logging',
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
    dir="ltr"
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
