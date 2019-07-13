import React from "react";
import { BPanel } from "./BPanel";
import { Tooltip } from "ncomponents-react";
import { Placement } from "popper.js";

interface TooltipDemoState {}

export class TooltipDemo extends React.Component<{}, TooltipDemoState> {
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
        <div>
          <Tooltip content="Some tooltip text">
            Tooltip on static text (will be autowrapped in span)
          </Tooltip>
        </div>
      </BPanel>
    );
  }
}
