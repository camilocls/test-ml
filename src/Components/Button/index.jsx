import "./styles.scss";
import { setClassName } from "../../utils/setClassName";

const Button = ({ text, className, onClick }) => {
  return (
    <button onClick={onClick} className={setClassName(["button", className])}>
      {text}
    </button>
  );
};

export default Button;
