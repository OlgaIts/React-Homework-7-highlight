import {ListType} from "../../types/listTypes";
import styles from "./Video.module.scss";

export const Video: React.FC<ListType> = (props) => {
  const {url, views} = props;

  return (
    <div className={styles.item}>
      <iframe
        className={styles.video}
        src={url}
        allow='autoplay; encrypted-media'
        allowFullScreen
      ></iframe>
      <p className={styles.views}>Просмотров: {views}</p>
    </div>
  );
};
