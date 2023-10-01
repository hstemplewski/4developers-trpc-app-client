"use client";

// import ServerComponent from "./_components/ServerComponent";
import ClientComponent from "./_components/ClientComponent";
import dynamic from "next/dynamic";

const ServerComponent = dynamic(() => import("./_components/ServerComponent"));

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-around p-24">
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h1>Server component</h1>
        <ServerComponent />
      </div>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h1>Client component</h1>
        <ClientComponent />
      </div>
    </main>
  );
}
