import React from "react";
import { BPanel } from "./BPanel";
import { DatepickerInput } from "../lib";
import { TimepickerInput } from "../lib/components/TimepickerInput";

interface DateAndTimeDemoState {
  date: string | undefined;
  time: string | undefined;
  timeWithSeconds: string | undefined;
  dateTimeIso: string | undefined;
}

export class DateAndTimeDemo extends React.Component<{}, DateAndTimeDemoState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      date: "2018-05-09",
      time: "10:30",
      timeWithSeconds: "10:30:35",
      dateTimeIso: "2018-10-02T22:00:30.000+0200"
    };
  }

  render() {
    return (
      <BPanel header="Date and time">
        <div>Model (date yyyy-MM-dd): {this.state.date}</div>
        <DatepickerInput
          value={this.state.date}
          onChange={date => this.setState({ date })}
          modelFormat="yyyy-MM-dd"
        />

        <div className="mt-10">Model (time HH:mm): {this.state.time}</div>
        <TimepickerInput
          value={this.state.time}
          onChange={time => this.setState({ time })}
          modelFormat="HH:mm"
        />

        <div className="mt-10">
          Model (time HH:mm:ss): {this.state.timeWithSeconds}
        </div>
        <TimepickerInput
          value={this.state.timeWithSeconds}
          onChange={timeWithSeconds => this.setState({ timeWithSeconds })}
          modelFormat="HH:mm:ss"
          viewFormat="HH:mm:ss"
        />

        <div className="mt-10">
          Model (date and time ISO): {this.state.dateTimeIso}
        </div>
        <DatepickerInput
          value={this.state.dateTimeIso}
          onChange={dateTimeIso => this.setState({ dateTimeIso })}
        />
        <TimepickerInput
          value={this.state.dateTimeIso}
          onChange={dateTimeIso => this.setState({ dateTimeIso })}
          viewFormat="HH:mm"
        />
      </BPanel>
    );
  }
}
