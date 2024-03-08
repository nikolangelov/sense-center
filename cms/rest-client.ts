import { createClient } from "payload-rest-client";
import { Config } from "./payload-types"; // auto generated types from payload

type Locales = "bg";

export const payload = createClient<Config, Locales>({
	apiUrl: "http://localhost:3000/api",
	cache: "no-store",
});
