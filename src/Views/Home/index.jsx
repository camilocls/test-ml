import { usePageTitle } from "../../Hooks/usePageTitle";
import "./styles.scss";

function Home() {
  usePageTitle("Home!");
  
  return (
    <div className="home">
      <h2 className="home__message">This is my home MELI! 🤗</h2>
    </div>
  );
}

export default Home;
