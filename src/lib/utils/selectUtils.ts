import React from "react";

export const selectUtils = {
  formatItemDisplay
};

export interface SelectEntryMetadata<T> {
  item: T;
  itemKey: any;
  index: number;
  focused: boolean;
}

export interface ItemsRenderFnData<T> {
  entries: Array<SelectEntryMetadata<T>>;
  onSelect: (item: T | undefined) => void;
  entryDefaultRender: (item: SelectEntryMetadata<T>) => React.ReactNode;
}


export type ItemDisplayFn<T> = (item: T) => string | undefined;
export type ItemRenderFn<T> = (item: T) => React.ReactNode;
export type ItemsRenderFn<T> = (arg: ItemsRenderFnData<T>) => React.ReactNode;

function formatItemDisplay(item: any, display?: any): string {
  if (typeof display !== "function") {
    if (typeof item === "string") return item;
    if (typeof item === "number") return item.toString();
  }

  let displayValue: any;

  if (display) {
    if (typeof display === "string") {
      displayValue = item[display];
    } else if (typeof display === "function") {
      try {
        displayValue = display(item);
      } catch (e) {
        console.error(e);
        return "Display function error";
      }
    } else {
      return "Invalid display parameter";
    }
  } else {
    displayValue = item["label"];
  }

  if (typeof displayValue === "string") return displayValue;
  if (typeof displayValue === "number") return displayValue.toString();

  return (displayValue || "").toString();
}
