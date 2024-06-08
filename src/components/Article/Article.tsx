import {ListType} from "../../types/listTypes";
import styles from "./Article.module.scss";

export const Article: React.FC<ListType> = (props) => {
  const {title, views} = props;
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>
        <a href='#' className={styles.title_link}>
          {title}
        </a>
      </h3>
      <p className={styles.views}>Прочтений: {views}</p>
    </div>
  );
};
