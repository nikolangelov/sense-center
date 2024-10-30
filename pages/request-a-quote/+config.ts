import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../layouts/Head";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Contact us - Fine carpet cleaning",
  description: "Fine carpet cleaning offers carpet, upholstery and stain cleaning. Contact us if you need professional cleaning.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
