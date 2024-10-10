import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../layouts/Head";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Carpet cleaning blog - Fine carpet cleaning",
  description: "Fine carpet cleaning has carried out cleaning services for dozens of carpets throughout London. You can see their reviews of our work here.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
