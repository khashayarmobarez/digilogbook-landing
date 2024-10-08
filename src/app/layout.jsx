import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from '@/utils/ThemeContext';
import Header from "@/components/templates/Header/Header";
import Footer from "@/components/templates/Footer/Footer";




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
  title: "DigiLogBook",
  description: "developed by pishtazane parbaz",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" 
    dir="rtl"
    className={iranSans.className}
    >
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
