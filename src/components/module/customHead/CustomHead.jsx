import Head from 'next/head';


const CustomHead = ({
  title = "DigiLogBook | Flight Logging System",
  description = "DigiLogBook helps you accurately track your flights.",
  keywords = "flight logging system, flight tool, log book, DigiLogBook, flight tracking",
  image = "../../../Assets/Logos/DigilogbookMainLogo.svg"
}) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="khashayar mobarez" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://digilogbook.app" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://digilogbook.app" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Viewport and other meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;