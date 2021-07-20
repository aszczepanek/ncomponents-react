import React from "react";
import { BPanel } from "./BPanel";
import { DatepickerInput, TimepickerInput } from "../../lib";

interface DateAndTimeDemoState {
  date: string | undefined;
  date2: string | undefined;
  time: string | undefined;
  timeWithSeconds: string | undefined;
  dateTimeIso: string | undefined;
  unix: number | undefined;
  dateNative: Date | undefined;
}

export class DateAndTimeDemo extends React.Component<{}, DateAndTimeDemoState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      dateNative: new Date(),
      date: "2018-05-09",
      date2: "09.05.2018",
      time: "10:30",
      timeWithSeconds: "10:30:35",
      dateTimeIso: "2018-10-02T22:00:30.000+0200",
      unix: Math.floor(new Date().getTime() / 1000),
    };
  }

  render() {
    return (
      <BPanel header="Date and time">
        <div>Model (Date): {this.state.dateNative && this.state.dateNative.toISOString()}</div>
        <DatepickerInput
          value={this.state.dateNative}
          onChange={(dateNative) => this.setState({ dateNative })}
          modelFormat="Date"
        />

        <div>Model (date yyyy-MM-dd): {this.state.date}</div>
        <DatepickerInput
          value={this.state.date}
          onChange={(date) => this.setState({ date })}
          modelFormat="yyyy-MM-dd"
        />

        <div>Model (date dd.MM.yyyy): {this.state.date2}</div>
        <DatepickerInput
          value={this.state.date2}
          onChange={(date2) => this.setState({ date2 })}
          modelFormat="dd.MM.yyyy"
        />

        <div className="mt-10">Model (time HH:mm): {this.state.time}</div>
        <TimepickerInput value={this.state.time} onChange={(time) => this.setState({ time })} modelFormat="HH:mm" />

        <div className="mt-10">Model (time HH:mm:ss): {this.state.timeWithSeconds}</div>
        <TimepickerInput
          value={this.state.timeWithSeconds}
          onChange={(timeWithSeconds) => this.setState({ timeWithSeconds })}
          modelFormat="HH:mm:ss"
          viewFormat="HH:mm:ss"
        />

        <div className="mt-10">Model (date and time ISO): {this.state.dateTimeIso}</div>
        <DatepickerInput value={this.state.dateTimeIso} onChange={(dateTimeIso) => this.setState({ dateTimeIso })} />
        <TimepickerInput
          value={this.state.dateTimeIso}
          onChange={(dateTimeIso) => this.setState({ dateTimeIso })}
          viewFormat="HH:mm"
        />

        <div className="mt-10">Model (date and time unix): {this.state.unix}</div>
        <DatepickerInput modelFormat="unix" value={this.state.unix} onChange={(unix) => this.setState({ unix })} />
        <TimepickerInput
          modelFormat="unix"
          value={this.state.unix}
          onChange={(unix) => this.setState({ unix })}
          viewFormat="HH:mm"
        />

        <div className="mt-10">
          Model (date and time Date): {this.state.dateNative && this.state.dateNative.toISOString()}
        </div>
        <DatepickerInput
          modelFormat="Date"
          value={this.state.dateNative}
          onChange={(dateNative) => this.setState({ dateNative })}
        />
        <TimepickerInput
          modelFormat="Date"
          value={this.state.dateNative}
          onChange={(dateNative) => this.setState({ dateNative })}
          viewFormat="HH:mm"
        />
      </BPanel>
    );
  }
}
