import Breadcrumb from "../../Components/Breadcrumb";
import styles from "./styles.module.scss"

function BreadcrumbLayout({ children, breadcrumb }) {
  return (
    <div className={styles["breadcrumb-layout"]}>
      <Breadcrumb path={breadcrumb} />
      <div className={styles["breadcrumb-layout__content"]}>
        { children }  
      </div>
    </div>
  );
}

export default BreadcrumbLayout;
