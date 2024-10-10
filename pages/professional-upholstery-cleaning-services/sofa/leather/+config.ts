import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../../layouts/Head";

// Default config (can be overridden by pages)
export default {
  Head: <Head allowRobots={true}/>,
  // <title>
  title: "Professional leather sofa cleaning services in London",
  description: "Fine Carpet Cleaning provides Professional Leather Sofa Cleaning services in London. Call us today!",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
