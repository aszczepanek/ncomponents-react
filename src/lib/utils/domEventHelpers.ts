import React from 'react';

export function stopPropagationAndPrevent(ev: React.SyntheticEvent) {
  ev.stopPropagation();
  ev.nativeEvent.stopImmediatePropagation();
  ev.preventDefault();
}

export function stopPropagation(ev: React.SyntheticEvent) {
  ev.stopPropagation();
  ev.nativeEvent.stopImmediatePropagation();
}

export function preventDefault(ev: React.SyntheticEvent) {
  ev.preventDefault();
}