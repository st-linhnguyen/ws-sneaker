import { useContext } from "react";
import { Context } from "@shopify/app-bridge-react";

const Home = () => {
  const app = useContext(Context);
  if (app) {
    app.getState().then(state => console.log(state));
  }

  return (
    <div className="container">
      This is Home component
    </div>
  );
};

export default Home;
