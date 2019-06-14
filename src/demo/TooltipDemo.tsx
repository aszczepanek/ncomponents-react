import React from "react";
import "./TooltipDemo.scss";
import { BPanel } from "./BPanel";
import { Tooltip } from "../lib";
import { Placement } from "popper.js";

interface TooltipDemoState {}

export class TooltipDemo extends React.Component<{}, TooltipDemoState> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    const placements: Placement[] = ["top", "right", "bottom", "left"];
    return (
      <BPanel header="Tooltip">
        <div className="mb-20">
          {placements.map(x => (
            <Tooltip key={x} content="Some tooltip text" placement={x}>
              <button style={{ marginRight: "5px" }}>Tooltip {x}</button>
            </Tooltip>
          ))}

          <Tooltip content="Some tooltip text" trigger="click">
            <button style={{ marginRight: "5px" }}>Tooltip on click</button>
          </Tooltip>
        </div>
        <div>
          <Tooltip content="Some tooltip text" trigger="focus">
            <input type="text" placeholder="Tooltip on focus" />
          </Tooltip>
        </div>
      </BPanel>
    );
  }
}
