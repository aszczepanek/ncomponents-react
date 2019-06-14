import React from "react";
import "./PopoverDemo.scss";
import { BPanel } from "./BPanel";
import { Popover } from "../lib";
import { Placement } from "popper.js";

interface PopoverDemoState {}

export class PopoverDemo extends React.Component<{}, PopoverDemoState> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <BPanel header="Popover">
        <div className="mb-20">
          <Popover header="Sample header" content="Test content">
            <button>Popover on click</button>
          </Popover>
        </div>
      </BPanel>
    );
  }
}
