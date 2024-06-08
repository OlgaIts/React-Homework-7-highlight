import {ListType} from "../../types/listTypes";
import {Article} from "../Article/Article";
import {Video} from "../Video/Video";
import withCount from "../withCount/withCount";

interface ListProps {
  list: ListType[];
}

export const List = ({list}: ListProps) => {
  const CountViewsVideo = withCount(Video);
  const CountViewsArticle = withCount(Article);

  return list.map((item) => {
    switch (item.type) {
      case "video":
        return <CountViewsVideo {...item} />;

      case "article":
        return <CountViewsArticle {...item} />;
    }
  });
};
