// Default <head> (can be overridden by pages)
import logoUrl from "../assets/the-barber-shop-logo1000-x-400-px.webp";

export default function Head() {
  return (
    <>
      <link rel="icon" href={logoUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PCFWNH5G');`}</script>
    </>
  );
}

