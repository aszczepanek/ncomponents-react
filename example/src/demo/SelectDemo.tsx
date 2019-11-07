import React from "react";
import { DemoItem, demoData } from "./demoData";
import { BPanel } from "./BPanel";
import { SelectInput } from "ncomponents-react";
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
    const { selectedItem, selectedItemByKey, selectedString, selectedNumber } = this.state;

    return (
      <BPanel header="Select">
        <div>
          <div>Model: {toJson(selectedItem)}</div>
          <SelectInput
            items={this.items}
            value={selectedItem}
            onChange={selectedItem => this.setState({ selectedItem })}
          />
          <button onClick={() => this.setOutOfListValue()}>Set out of list value</button>
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
          <SelectInput<DemoItem>
            items={this.items}
            value={selectedItemByKey}
            onChange={item => this.setState({ selectedItemByKey: item && item.id })}
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
        <div>
          <div>Async data provider</div>
          <SelectInput
            items={demoData.asyncPeople}
            value={selectedItem}
            onChange={selectedItem => this.setState({ selectedItem })}
          />
        </div>

        <div>
          <div>Async data provider with error</div>
          <SelectInput
            items={demoData.asyncPeopleError}
            value={selectedItem}
            onChange={selectedItem => this.setState({ selectedItem })}
          />
        </div>

        <div>
          <div>Async data provider item key as model</div>
          <SelectInput
            itemKeyAsModel
            items={demoData.asyncPeople}
            value={selectedItemByKey}
            onChange={selectedItem =>
              this.setState({ selectedItemByKey: selectedItem ? selectedItem.id : undefined })
            }
          />
        </div>

        <div>
          <div>Async data provider item key as model no return for key request</div>
          <SelectInput
            itemKeyAsModel
            items={demoData.asyncPeopleNoGetByKey}
            value={selectedItemByKey}
            onChange={selectedItem =>
              this.setState({ selectedItemByKey: selectedItem ? selectedItem.id : undefined })
            }
          />
        </div>
        <div>
          <div>No value, only onChange handler</div>
          <SelectInput
            items={this.items}
            value={undefined}
            onChange={selectedItem => this.setState({ selectedItem })}
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
