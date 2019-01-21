import React, { Component } from "react";
import { BPanel } from "./BPanel";
import { DatepickerInput } from "../lib";
import "./App.css";
import "./lib.styles.scss";
import { SelectDemo } from "./SelectDemo";
import { MultiselectDemo } from "./MultiselectDemo";
import { DropdownDemo } from "./DropdownDemo";

interface AppState {
  date: string | undefined;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      date: "2018-05-09"
    };
  }

  render() {
    return (
      <div id="app" className="container">
        <BPanel header="Datepicker">
          <div>Model: {this.state.date}</div>
          <DatepickerInput<string>
            value={this.state.date}
            onChange={date => this.setState({ date })}
            modelFormat="yyyy-MM-dd"
          />
        </BPanel>

        <MultiselectDemo />
        <SelectDemo />
        <DropdownDemo />
      </div>
    );
  }
}

export default App;
