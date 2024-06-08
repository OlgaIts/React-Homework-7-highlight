import {ReactNode} from "react";
import styles from "./Popular.module.scss";

interface PopularProps {
  children: ReactNode;
}

export const Popular = ({children}: PopularProps) => {
  return (
    <div className={`${styles.wrap_item} ${styles.item_popular}`}>
      <span className={styles.label}>Popular!</span>
      {children}
    </div>
  );
};
