import * as React from "react";
import * as Types from "./types";

declare function Event(props: {
  as?: React.ElementType;
  artistName?: React.ReactNode;
  eventGridImage?: Types.Asset.Image;
}): React.JSX.Element;
