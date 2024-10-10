import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../layouts/Head";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Feedback - Fine carpet cleaning",
  description: "Do you have suggestions for us? Here you will find a feedback form that allows you to contact the owners of Fine Carpet Cleaning directly.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
