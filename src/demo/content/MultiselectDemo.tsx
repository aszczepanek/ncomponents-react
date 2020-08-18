import React from "react";
import { BPanel } from "./BPanel";
import { demoData, DemoItem } from "./demoData";
import { toJson } from "./demoUtils";
import { Multiselect } from "../../lib";

interface MultiselectDemoState {
  selectedItems: DemoItem[];
  selectedNumber: number[];
}

export class MultiselectDemo extends React.Component<{}, MultiselectDemoState> {
  items = demoData.people;
  state = {
    selectedItems: [this.items[0]],
    selectedNumber: []
  };
  numbers = [0, 1, 2, 3, 4];

  constructor(props: {}) {
    super(props);

    this.clear = this.clear.bind(this);
  }

  render() {
    return (
      <BPanel header="Multiselect">
        <div className="mb-20">Model: {toJson(this.state.selectedItems)}</div>

        <div className="mb-20">
          Default selected template:
          <br />
          <Multiselect
            value={this.state.selectedItems}
            items={this.items}
            filterable={true}
            onChange={selectedItems => this.setState({ selectedItems })}
          />
        </div>

        <div className="mb-20">
          Default selected template with clear button:
          <br />
          <Multiselect
            value={this.state.selectedItems}
            items={this.items}
            filterable={true}
            clearButton
            onChange={selectedItems => this.setState({ selectedItems })}
          />
        </div>

        <div className="mb-20">
          Custom selected template:
          <br />
          <Multiselect
            value={this.state.selectedItems}
            items={this.items}
            onChange={selectedItems => this.setState({ selectedItems })}
          >
            {args => (
              <>
                <ul>
                  {args.selectedItems.map(s => (
                    <li key={s.id}>{s.label}</li>
                  ))}
                </ul>
                {!args.selectedItems.length && <div v-if="!selected.length">Brak</div>}
                <button onClick={this.clear} onMouseDown={stopPropagationAndPrevent}>
                  Clear
                </button>
              </>
            )}
          </Multiselect>
        </div>

        <div className="mb-20">
          Plain numbers array:
          <br />
          <Multiselect
            value={this.state.selectedNumber}
            items={this.numbers}
            sortOnChange
            onChange={selectedNumber => this.setState({ selectedNumber })}
          />
        </div>
      </BPanel>
    );
  }

  clear(ev: React.MouseEvent) {
    ev.preventDefault();
    ev.stopPropagation();

    this.setState({
      selectedItems: []
    });
  }
}

function stopPropagationAndPrevent(ev: React.SyntheticEvent) {
  ev.stopPropagation();
  ev.nativeEvent.stopImmediatePropagation();
  ev.preventDefault();
}
