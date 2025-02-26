// Default <head> (can be overridden by pages)
import logoUrl from "../assets/the-barber-shop-logo1000-x-400-px.webp";

export default function Head() {
  return (
    <>
      <link rel="icon" href={logoUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}

