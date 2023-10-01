"use client";

import { api } from "@/utils/api";

const ClientComponent = () => {
  const helloQuery = api.hello.useQuery();
  if (helloQuery.isLoading) return <h2>Loading...</h2>;

  if (helloQuery.isError) return <h2>Error: {helloQuery.error.message}</h2>;

  return <h2>{helloQuery.data} from client</h2>;
};

export default api.withTRPC(ClientComponent);
