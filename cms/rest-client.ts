import { createClient } from "payload-rest-client";
import { Config } from "./payload-types";
import path from "node:path"; // auto generated types from payload

type Locales = "bg";

export const payload = createClient<Config, Locales>({
	apiUrl: path.join(process.env.PAYLOAD_API_ADDRESS ?? "http://localhost:3000",  'api'),
	cache: "no-store",
});
