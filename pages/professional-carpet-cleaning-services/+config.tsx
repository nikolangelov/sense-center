import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../layouts/Head";

// Default config (can be overridden by pages)
export default {
  Head: <Head allowRobots={true}/>,
  // <title>
  title: "Professional carpet cleaning services in London - Fine carpet cleaning",
  description: "Fine Carpet Cleaning carry out professional carpet cleaning services in London. We guarantee thorough cleaning without compromise. Call us today!",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
