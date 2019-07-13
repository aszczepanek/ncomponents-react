import React from "react";
import { BPanel } from "./BPanel";
import { Dropdown } from "ncomponents-react";
import { demoData, DemoItem } from "./demoData";
import { toJson } from "./demoUtils";

interface DropdownDemoState {
  selectedItem?: DemoItem;
}

export class DropdownDemo extends React.Component<{}, DropdownDemoState> {
  items = demoData.people;

  constructor(props: {}) {
    super(props);

    this.state = {
      selectedItem: this.items[0]
    };

    this.onSelect = this.onSelect.bind(this);
  }

  render() {
    return (
      <BPanel header="Dropdown">
        <div>
          <div>Model: {toJson(this.state.selectedItem)}</div>
          <div>
            <Dropdown items={this.items} onSelect={this.onSelect}>
              <button>Dropdown on button</button>
            </Dropdown>
          </div>
          <div>
            <Dropdown items={this.items} onSelect={this.onSelect} contextMenu>
              <div
                style={{
                  height: "50px",
                  width: "300px",
                  border: "1px solid #000"
                }}
              >
                Right mouse bottom mode
              </div>
            </Dropdown>
          </div>

          <div>
            <div
              style={{
                height: "50px",
                width: "300px",
                border: "1px solid #000"
              }}
            >
              ADHoc mode
            </div>
          </div>
        </div>
      </BPanel>
    );
  }

  onSelect(item?: DemoItem) {
    this.setState({
      selectedItem: item
    });
  }
}
