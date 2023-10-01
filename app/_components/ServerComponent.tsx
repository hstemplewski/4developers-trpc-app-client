import { apiSSR } from "@/utils/api-ssr";

const ServerComponent = async () => {
  const helloQuery = apiSSR.hello.fetch();

  const users = await apiSSR.user.getAll.fetch();

  return (
    <>
      <h2>{helloQuery} from server</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
};

export default ServerComponent;
