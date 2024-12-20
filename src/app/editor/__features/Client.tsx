"use client";

import type { Data } from "@measured/puck";
import { Puck } from "@measured/puck";
import config from "./config";

export function Client({ path, data }: { path: string; data: Partial<Data> }) {
  return (
    <Puck
      config={config}
      data={data}
      onPublish={async (data) => {
        console.log(data)
        await fetch("/api/save", {
          method: "post",
          body: JSON.stringify({ data, path }),
        });
      }}
    />
  );
}
