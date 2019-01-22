import React from "react";
import { BPanel } from "./BPanel";
import { Multiselect } from "../lib";
import { demoData, DemoItem } from "./demoData";
import { toJson } from "./demoUtils";
import { domEventHelpers } from "../lib/utils/domEventHelpers";

interface MultiselectDemoState {
  selectedItems: DemoItem[];
}

export class MultiselectDemo extends React.Component<{}, MultiselectDemoState> {
  items = demoData.people;
  state = {
    selectedItems: [this.items[0]]
  };

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
            disablePortalRender={true}
            onChange={selectedItems => this.setState({ selectedItems })}
          />
        </div>

        <div>
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
                {!args.selectedItems.length && (
                  <div v-if="!selected.length">Brak</div>
                )}
                <button
                  onClick={this.clear}
                  onMouseDown={domEventHelpers.stopPropagationAndPrevent}
                >
                  Clear
                </button>
              </>
            )}
          </Multiselect>
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
