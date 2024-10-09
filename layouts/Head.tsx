// Default <head> (can be overridden by pages)
import logoUrl from "../assets/FCC_2024_png.png";

export default function Head({allowRobots = true} : {allowRobots: boolean}) {
  return (
    <>
      <link rel="icon" href={logoUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {!allowRobots && <meta name="robots" content="noindex" />}
      <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PCFWNH5G');`}</script>
    </>
  );
}

