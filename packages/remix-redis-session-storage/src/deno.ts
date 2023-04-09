import { createSessionStorage } from "@remix-run/deno";
import { createRedisSessionStorageFactory } from "./factory";

export const createRedisSessionStorage =
  createRedisSessionStorageFactory(createSessionStorage);
