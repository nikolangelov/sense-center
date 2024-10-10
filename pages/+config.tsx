import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Layout from "../layouts/LayoutDefault";

// Default config (can be overridden by pages)
export default {
  Layout,
  // <title>
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
