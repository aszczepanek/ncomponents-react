import React, { Component } from "react";
import { BPanel } from "./BPanel";
import { DatepickerInput } from "../lib";
import "./App.css";
import "./lib.styles.less";

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
      </div>
    );
  }
}

export default App;
