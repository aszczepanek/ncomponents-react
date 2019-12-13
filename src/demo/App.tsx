import React, { Component } from "react";
import "./App.css";
import "./content/lib.styles.scss";
import { SelectDemo } from "./content/SelectDemo";
import { MultiselectDemo } from "./content/MultiselectDemo";
import { DropdownDemo } from "./content/DropdownDemo";
import { DateAndTimeDemo } from "./content/DateAndTimeDemo";
import { TooltipDemo } from "./content/TooltipDemo";
import { PopoverDemo } from "./content/PopoverDemo";

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
