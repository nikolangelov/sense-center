import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "The Barber Shop Sofia | Бръснар Денис",
  description: "Денис е бръснар със страст към детайла и усет към модерното създавайки визии с характер и стил. Запазете час при Денис!",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
