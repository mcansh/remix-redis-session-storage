# remix-redis-session-storage

a redis session storage adapter for remix - this will _probably_ end up in core at some point


```ts
import { createRedisSessionStorage } from "@mcansh/remix-redis-session-storage";
import Redis from "ioredis";

let redis = new Redis(process.env.REDIS_URL);

export let sessionStorage = createRedisSessionStorage({
  redis,
  cookie: {
    name: "__session",
    secrets: [process.env.SESSION_SECRET],
    sameSite: "strict",
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  },
});
```

