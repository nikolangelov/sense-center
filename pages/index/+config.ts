import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../layouts/Head";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Professional carpet cleaning in London - Fine carpet cleaning",
  description: "Professional carpet cleaning in London. Keep your home cleaner and cozier with us! Call us today!",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
