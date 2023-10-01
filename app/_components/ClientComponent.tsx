"use client";

import { api } from "@/utils/api";
import { useState } from "react";

const ClientComponent = () => {
  const [userName, setUserName] = useState("");
  const helloQuery = api.hello.useQuery();
  const userMutation = api.user.create.useMutation();
  if (helloQuery.isLoading) return <h2>Loading...</h2>;

  if (helloQuery.isError) return <h2>Error: {helloQuery.error.message}</h2>;

  return (
    <>
      <form
        onSubmit={(event) => {
          console.log(
            "🚀 ~ file: clientComponent.tsx:18 ~ ClientComponent ~ event:",
            event
          );
          event.preventDefault();
          console.log(
            "🚀 ~ file: clientComponent.tsx:24 ~ ClientComponent ~ userMutation:",
            userMutation
          );
          userMutation.mutate({ name: userName });
          setUserName("");
        }}
      >
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            onChange={(event) => setUserName(event.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name"
            required
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
      <h2>{helloQuery.data} from client</h2>
    </>
  );
};

export default api.withTRPC(ClientComponent);
