import {ReactNode} from "react";
import styles from "./New.module.scss";

interface NewProps {
  children: ReactNode;
}

export const New = ({children}: NewProps) => {
  return (
    <div className={`${styles.wrap_item} ${styles.item_new}`}>
      <span className={styles.label}>New!</span>
      {children}
    </div>
  );
};
