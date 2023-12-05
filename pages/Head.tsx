// Default <head> (can be overridden by pages)

import logoUrl from "../assets/logo.svg";

export default function Head() {
  return (
    <>
      <link rel="icon" href={logoUrl} />
    </>
  );
}
