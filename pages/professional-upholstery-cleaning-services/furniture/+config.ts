import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../layouts/Head";

// Default config (can be overridden by pages)
export default {
  Head: <Head allowRobots={true}/>,
  // <title>
  title: "Professional furniture cleaning services in London",
  description: "Fine Carpet Cleaning provide professional furniture cleaning services in London. Our team specialize in removing dirt, stains and allergens.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
