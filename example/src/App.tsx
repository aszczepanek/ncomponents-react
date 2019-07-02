import React, { Component } from "react";
import "./App.css";
import "./demo/lib.styles.scss";
import { SelectDemo } from "./demo/SelectDemo";
import { MultiselectDemo } from "./demo/MultiselectDemo";
import { DropdownDemo } from "./demo/DropdownDemo";
import { DateAndTimeDemo } from "./demo/DateAndTimeDemo";
import { TooltipDemo } from "./demo/TooltipDemo";
import { PopoverDemo } from "./demo/PopoverDemo";

class App extends Component {
  render() {
    return (
      <div id="app" className="container">
        <DateAndTimeDemo />
        <MultiselectDemo />
        <SelectDemo />
        <DropdownDemo />
        <TooltipDemo />
        <PopoverDemo />
      </div>
    );
  }
}

export default App;
