import React from "react";
import * as _Builtin from "./_Builtin";
import { Grid } from "./Grid";

export function Events({ as: _Component = _Builtin.Block, gridSlot }) {
  return (
    <_Component tag="div">
      {gridSlot ?? (
        <>
          <Grid />
          <Grid />
        </>
      )}
    </_Component>
  );
}
