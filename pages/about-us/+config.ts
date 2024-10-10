import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../layouts/Head";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Learn more about us - Fine carpet cleaning",
  description: "Want to learn more about us? Here you will find information about our team and their vision for the carpet cleaning business.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
