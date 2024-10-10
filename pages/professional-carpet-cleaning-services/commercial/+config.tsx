import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../layouts/Head";

// Default config (can be overridden by pages)
export default {
  Head: <Head allowRobots={true}/>,
  // <title>
  title: "Commercial carpet cleaning services - Fine carpet cleaning",
  description: "Commercial carpet cleaning services in London. The best, fast and efficient services at low prices. Call us today!",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
