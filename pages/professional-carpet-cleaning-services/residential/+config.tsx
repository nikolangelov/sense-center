import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../layouts/Head";

// Default config (can be overridden by pages)
export default {
  Head: <Head allowRobots={true}/>,
  // <title>
  title: "Residential carpet cleaning services in London - Fine Carpet Cleaning ",
  description: "Fine Carpet Cleaning carry out residential carpet cleaning services throughout London. Call us today!",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
