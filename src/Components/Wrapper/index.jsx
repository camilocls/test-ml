import { setClassName } from "../../utils/setClassName";
import styles from "./style.module.scss"

function Wrapper({ children, className }) {
  return (
    <div className={setClassName([styles.container, className])}>
      { children }
    </div>
  );
}

export default Wrapper;
