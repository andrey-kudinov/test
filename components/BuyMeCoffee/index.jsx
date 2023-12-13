import styles from "./index.module.scss";
import cl from "classnames";
import ScreenEgg from "../ScreenEgg";

const BuyMeCoffee = ({ className }) => {
  return (
    <ScreenEgg type="right">
      <div className={cl(styles.buyCoffee, className)}>
        <a href="#" target="_blank" className={styles.buyCoffeeButton}>
          Купи мне кофе
        </a>
      </div>
    </ScreenEgg>
  );
};

export default BuyMeCoffee;
