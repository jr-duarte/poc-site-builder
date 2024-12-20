import "@measured/puck/puck.css";
import { Client } from "./__features/Client";
import { getPage } from "@/utils/getPage";

export default async function Page() {
  const data = getPage('/');
  return <Client path="/" data={data || {}} />;
}

// export const dynamic = "force-dynamic";
