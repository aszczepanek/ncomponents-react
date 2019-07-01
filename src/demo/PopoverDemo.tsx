import React from "react";
import { BPanel } from "./BPanel";
import { Popover } from "../lib";
import { Placement } from "popper.js";

interface PopoverDemoState {}

export class PopoverDemo extends React.Component<{}, PopoverDemoState> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    const placements: Placement[] = ["top", "right", "bottom", "left"];

    return (
      <BPanel header="Popover">
        <div className="mb-20">
          {placements.map(x => (
            <Popover key={x} header="Sample header" content="Test content" placement={x}>
              <button style={{ marginRight: "5px" }}>Popover {x} on click</button>
            </Popover>
          ))}
        </div>
      </BPanel>
    );
  }
}
