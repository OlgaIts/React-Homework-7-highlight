import {ComponentType} from "react";
import {ListType} from "../../types/listTypes";
import {New} from "../New/New";
import {Popular} from "../Popular/Popular";

export default function withCount<T extends ListType>(
  Component: ComponentType<T>,
): ComponentType<T> {
  return function (props: T) {
    if (props.views <= 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      );
    }
    if (props.views >= 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    }
    return <Component {...props} />;
  };
}
