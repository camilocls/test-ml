import { usePageTitle } from "../../Hooks/usePageTitle";
import { WELCOME_MESSAGE } from "./constants";
import "./styles.scss";

function Home() {
  usePageTitle("Home!");

  return (
    <div className="home">
      <h2 className="home__message">{WELCOME_MESSAGE}</h2>
    </div>
  );
}

export default Home;
