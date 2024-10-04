// Default <head> (can be overridden by pages)
import logoUrl from "../assets/FCC_2024_png.png";

export default function HeadNoRobots() {
  return (
    <>
      <link rel="icon" href={logoUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="robots" content="noindex"/>


    </>
  );
}

