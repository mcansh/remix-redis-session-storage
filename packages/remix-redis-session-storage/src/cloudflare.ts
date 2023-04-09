import { createSessionStorage } from "@remix-run/cloudflare";
import { createRedisSessionStorageFactory } from "./factory";

export const createRedisSessionStorage =
  createRedisSessionStorageFactory(createSessionStorage);
