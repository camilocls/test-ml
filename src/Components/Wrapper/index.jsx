import styles from "./style.module.scss"

function Wrapper({ children, className }) {
  return (
    <div className={`${styles.container} ${className}`}>
      { children }
    </div>
  );
}

export default Wrapper;
