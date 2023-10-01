import ServerComponent from "./_components/ServerComponent";
import ClientComponent from "./_components/clientComponent";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Server component</h1>
      <ServerComponent />
      <h1>Client component</h1>
      <ClientComponent />
    </main>
  );
}
