import styles from "./index.module.scss";
import cl from "classnames";

const Title = ({ className, children }) => {
  return <h2 className={cl(className, styles.title)}>{children}</h2>;
};

export default Title;
