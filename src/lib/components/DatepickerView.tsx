import React, { Component } from "react";
import Popper, { Placement } from "popper.js";
import { parseISO, formatDate } from "../utils/dateUtils";
import { isDate } from "../utils/typeHelpers";
import { stopPropagationAndPrevent } from "../utils/domEventHelpers";
import { toClassNames } from "../utils/reactHelpers";

interface DatepickerViewProps {
  popoverRef: HTMLElement;
  placement: Placement;
  value?: any;
  onSelect?: (date: Date) => any;
}

interface DatepickerViewState {
  currentDate: Date;
}

interface DateViewItem {
  date: Date;
  label: number;
  isMuted: boolean;
  isSelected: boolean;
}

export class DatepickerView extends Component<
  DatepickerViewProps,
  DatepickerViewState
> {
  static prevMonthHtml = "<";
  static nextMonthHtml = ">";
  static firstDayOfWeek = 1;

  popper?: Popper;
  rootEl = React.createRef<HTMLDivElement>();

  constructor(props: DatepickerViewProps) {
    super(props);

    this.state = {
      currentDate: this.getFocusDate()
    };

    this.onMouseWheel = this.onMouseWheel.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
  }

  render() {
    const nextMonthHtml = DatepickerView.nextMonthHtml;
    const prevMonthHtml = DatepickerView.prevMonthHtml;
    const yearMonthHeader = formatDate(this.state.currentDate, "LLLL yyyy");

    return (
      <div
        className="n-datepicker-view"
        onClick={stopPropagationAndPrevent}
        onMouseDown={stopPropagationAndPrevent}
        onWheel={this.onMouseWheel}
        ref={this.rootEl}
      >
        <table>
          <thead>
            <tr>
              <th>
                <button onClick={this.prevMonth}>{prevMonthHtml}</button>
              </th>
              <th colSpan={5}>{yearMonthHeader}</th>
              <th>
                <button onClick={this.nextMonth}>{nextMonthHtml}</button>
              </th>
            </tr>
            <tr>{this.renderDasOfWeek()}</tr>
          </thead>
          <tbody>{this.renderMonth()}</tbody>
        </table>
      </div>
    );
  }

  renderDasOfWeek() {
    return this.generateDaysInWeek().map(x => <th key={x.label}>{x.label}</th>);
  }

  renderMonth() {
    return this.generateMonth().map((week, i) => {
      return (
        <tr key={i}>
          {week.map(d => {
            return (
              <td key={d.label}>
                <button
                  onClick={() => this.select(d)}
                  className={toClassNames({
                    selected: d.isSelected,
                    muted: d.isMuted
                  })}
                >
                  {d.label}
                </button>
              </td>
            );
          })}
        </tr>
      );
    });
  }

  componentDidMount() {
    this.popper = new Popper(this.props.popoverRef, this.rootEl.current!, {
      placement: this.props.placement
    });
  }

  componentWillUnmount() {
    if (this.popper) {
      this.popper.destroy();
    }
  }

  componentDidUpdate(prevProps: DatepickerViewProps) {
    let propValueChanged = false;
    if (isDate(prevProps.value) && isDate(this.props.value)) {
      propValueChanged =
        prevProps.value.getTime() != this.props.value.getTime();
    } else {
      propValueChanged = prevProps.value != this.props.value;
    }

    if (propValueChanged) {
      this.setState({
        currentDate: this.getFocusDate()
      });
    }
  }

  getFocusDate() {
    return parseISO(this.props.value || "") || new Date();
  }

  onMouseWheel(ev: React.WheelEvent) {
    const delta = ev.deltaY > 0 ? 1 : -1;
    if (delta < 0) {
      this.prevMonth();
    } else {
      this.nextMonth();
    }
  }

  prevMonth() {
    const date = new Date(this.state.currentDate);
    date.setMonth(date.getMonth() - 1);
    this.setState({
      currentDate: date
    });
    // this.generateMonth();
  }

  nextMonth() {
    const date = new Date(this.state.currentDate);
    date.setMonth(date.getMonth() + 1);
    this.setState({
      currentDate: date
    });
    // this.generateMonth();
  }

  select(d: DateViewItem) {
    this.props.onSelect && this.props.onSelect(d.date);
  }

  generateDaysInWeek() {
    const daysOfWeek: Array<{ label: string }> = [];
    const dayNames: any = {};

    let d = new Date();
    for (var i = 0; i < 7; i++) {
      dayNames[d.getDay()] = formatDate(d, "EEE");
      d.setDate(d.getDate() + 1);
    }

    let idx = DatepickerView.firstDayOfWeek;
    for (i = 0; i < 7; i++) {
      daysOfWeek.push({
        label: dayNames[idx]
      });
      idx = (idx + 1) % 7;
    }

    return daysOfWeek;
  }

  generateMonth() {
    var currentModel = this.getFocusDate();
    var date = this.state.currentDate;
    var month = date.getMonth();
    var year = date.getFullYear();
    var d = new Date(date.getFullYear(), date.getMonth(), 1);
    if (d.getDay() === 0 && d.getDay() != DatepickerView.firstDayOfWeek) {
      d.setDate(d.getDate() - 7 + DatepickerView.firstDayOfWeek);
    } else {
      d.setDate(d.getDate() - d.getDay() + DatepickerView.firstDayOfWeek);
    }

    const weeks: DateViewItem[][] = [];
    while (
      (d.getMonth() <= month && d.getFullYear() <= year) ||
      d.getTime() < date.getTime()
    ) {
      var week = [];

      for (var i = 0; i < 7; i++) {
        week.push({
          date: new Date(d),
          label: d.getDate(),
          isMuted:
            date.getMonth() != d.getMonth() ||
            date.getFullYear() != d.getFullYear(),
          isSelected:
            currentModel &&
            currentModel.getDate() == d.getDate() &&
            currentModel.getMonth() == d.getMonth() &&
            currentModel.getFullYear() == d.getFullYear()
        });
        d.setDate(d.getDate() + 1);
      }

      weeks.push(week);
    }

    return weeks;
  }
}
