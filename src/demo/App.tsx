import React, { Component } from "react";
import "./App.css";
import "./lib.styles.scss";
import { SelectDemo } from "./SelectDemo";
import { MultiselectDemo } from "./MultiselectDemo";
import { DropdownDemo } from "./DropdownDemo";
import { DateAndTimeDemo } from "./DateAndTimeDemo";
import { TooltipDemo } from "./TooltipDemo";
import { PopoverDemo } from "./PopoverDemo";

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
