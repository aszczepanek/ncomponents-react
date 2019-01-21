import React from "react";
import { DemoItem, demoData } from "./demoData";
import { BPanel } from "./BPanel";
import { SelectInput } from "../lib";
import { toJson } from "./demoUtils";

interface SelectDemoState {
  selectedItem?: DemoItem | string;
  selectedItemByKey?: number;
  selectedString?: string;
  selectedNumber?: number;
}

export class SelectDemo extends React.Component<{}, SelectDemoState> {
  items = demoData.people;
  strings = demoData.strings.slice();
  numbers = [0, 1, 2, 3, 4];

  constructor(props: {}) {
    super(props);

    for (let i = 0; i < 50; i++) {
      this.strings.push(`number ${i}`);
    }

    this.state = {
      selectedItem: this.items[0],
      selectedItemByKey: this.items[0].id,
      selectedString: "test",
      selectedNumber: 3
    };
  }

  render() {
    const {
      selectedItem,
      selectedItemByKey,
      selectedString,
      selectedNumber
    } = this.state;

    return (
      <BPanel header="Select">
        <div>
          <div>Model: {toJson(selectedItem)}</div>
          <SelectInput
            items={this.items}
            value={selectedItem}
            onChange={selectedItem => this.setState({ selectedItem })}
          />
          <button onClick={() => this.setOutOfListValue()}>
            Set out of list value
          </button>
          <button onClick={() => this.setIncompatibleObjectValue()}>
            Set incompatible object value
          </button>
        </div>
        <div>
          <div>Custom display</div>
          <SelectInput
            items={this.items}
            value={selectedItem}
            onChange={selectedItem => this.setState({ selectedItem })}
            display="lastName"
          />
        </div>
        <div>
          <div>Custom display fn</div>
          <SelectInput
            items={this.items}
            value={selectedItem}
            onChange={selectedItem => this.setState({ selectedItem })}
            display={this.customItemFormat}
          />
        </div>
        <div>
          <div>Non strict</div>
          <SelectInput
            items={this.items}
            value={selectedItem}
            onChange={selectedItem => this.setState({ selectedItem })}
            onChangeNonStrict={val => this.setState({ selectedItem: val })}
            nonStrict={true}
          />
        </div>
        <div>
          <div>
            Item key as model
            <br />
            Model: {selectedItemByKey}
          </div>
          <SelectInput<DemoItem, number>
            items={this.items}
            value={selectedItemByKey}
            onChange={id => this.setState({ selectedItemByKey: id })}
            itemKeyAsModel
          />
        </div>
        <div>
          <div>
            Plain strings array
            <br />
            Model: {selectedString}
          </div>
          <SelectInput
            items={this.strings}
            value={selectedString}
            onChange={val => this.setState({ selectedString: val })}
          />
        </div>
        <div>
          <div>
            Plain numbers array
            <br />
            Model: {selectedNumber}
          </div>
          <SelectInput
            items={this.numbers}
            value={selectedNumber}
            onChange={val => this.setState({ selectedNumber: val })}
          />
        </div>
      </BPanel>
    );
  }

  customItemFormat(item: DemoItem) {
    return `${item.id}: ${item.label.toUpperCase()}`;
  }

  setOutOfListValue() {
    const selectedItem = {
      id: 99,
      label: "Test",
      lastName: "Test 2"
    };

    this.setState({
      selectedItem
    });
  }

  setIncompatibleObjectValue() {
    const selectedItem: any = {
      age: 29
    };
    this.setState({
      selectedItem
    });
  }
}