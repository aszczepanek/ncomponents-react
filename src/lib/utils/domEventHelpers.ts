import React from "react";

export const domEventHelpers = {
  stopPropagationAndPrevent,
  stopPropagation,
  preventDefault
};

function stopPropagationAndPrevent(ev: React.SyntheticEvent) {
  ev.stopPropagation();
  ev.nativeEvent.stopImmediatePropagation();
  ev.preventDefault();
}

function stopPropagation(ev: React.SyntheticEvent) {
  ev.stopPropagation();
  ev.nativeEvent.stopImmediatePropagation();
}

function preventDefault(ev: React.SyntheticEvent) {
  ev.preventDefault();
}
