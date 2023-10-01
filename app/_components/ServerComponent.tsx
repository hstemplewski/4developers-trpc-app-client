import { apiSSR } from "@/utils/api-ssr";

const ServerComponent = () => {
  const helloQuery = apiSSR.hello.fetch();
  return <h2>{helloQuery} from server</h2>;
};

export default ServerComponent;
