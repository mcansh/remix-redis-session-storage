import { createSessionStorage } from "@remix-run/node";
import { createRedisSessionStorageFactory } from "./factory";

export const createRedisSessionStorage =
  createRedisSessionStorageFactory(createSessionStorage);
