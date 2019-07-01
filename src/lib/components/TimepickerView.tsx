import React from "react";
import ReactDOM from "react-dom";
import Popper, { Placement } from "popper.js";
import { domEventHelpers } from "../utils/domEventHelpers";
import { toClassNames, getBodyPortal } from "../utils/reactHelpers";
import { DateAdapter, dateAdapterFactory } from "../utils/dateAdapter";

interface TimepickerViewProps {
  popoverRef: HTMLElement;
  placement: Placement;
  viewFormat: string;
  currentModelDateValue?: Date;
  onSelect?: (date: Date) => any;
}

interface TimepickerViewState {}

interface TimeViewItem {
  date: Date;
  label: number;
  isMuted: boolean;
  isSelected: boolean;
}

export class TimepickerView extends React.Component<TimepickerViewProps, TimepickerViewState> {
  static rootClassName = "n-timepicker-view";

  closestModelTimeItem?: TimeViewItem;
  popper?: Popper;
  rootEl = React.createRef<HTMLDivElement>();

  viewDateAdapter: DateAdapter;

  constructor(props: TimepickerViewProps) {
    super(props);

    this.viewDateAdapter = dateAdapterFactory.getForFormat(this.props.viewFormat);
    this.state = {
      // currentDate: this.getFocusDate()
    };
  }

  render() {
    return ReactDOM.createPortal(this.renderView(), getBodyPortal());
  }

  private renderView() {
    return (
      <div
        className={TimepickerView.rootClassName}
        onClick={domEventHelpers.stopPropagationAndPrevent}
        onMouseDown={domEventHelpers.stopPropagationAndPrevent}
        ref={this.rootEl}
      >
        <ul>{this.renderHours()}</ul>
      </div>
    );
  }

  private renderHours() {
    const items = this.generateTimeItems();
    this.closestModelTimeItem = undefined;

    if (this.props.currentModelDateValue) {
      const modelDateTime = this.createTimeObj(
        this.props.currentModelDateValue.getHours(),
        this.props.currentModelDateValue.getMinutes()
      ).getTime();
      const itemsReversed = items.slice().reverse();
      for (let x of itemsReversed) {
        if (x.date.getTime() <= modelDateTime) {
          x.isSelected = true;
          this.closestModelTimeItem = x;
          break;
        }
      }
    }

    return items.map(x => (
      <li
        key={x.label}
        onClick={() => this.select(x)}
        className={toClassNames({
          selected: x.isSelected,
          muted: x.isMuted
        })}
      >
        {x.label}
      </li>
    ));
  }

  componentDidMount() {
    this.popper = new Popper(this.props.popoverRef, this.rootEl.current!, {
      placement: this.props.placement
    });
    this.scrollToClosestModelValue();
  }

  componentWillUnmount() {
    if (this.popper) {
      this.popper.destroy();
    }
  }

  componentDidUpdate() {
    this.scrollToClosestModelValue();
  }

  scrollToClosestModelValue() {
    if (!this.scrollToClosestModelValue) return;

    Promise.resolve().then(() => {
      if (!this.rootEl.current) return;

      const el = this.rootEl.current;
      const element = el.querySelector<HTMLElement>("li.selected");
      if (!element) return;

      el.scrollTop = element.offsetTop - element.clientHeight * 2;
    });
  }

  private select(d: TimeViewItem) {
    this.props.onSelect && this.props.onSelect(d.date);
  }

  private createTimeObj(hours: number, minutes: number) {
    return new Date(1970, 0, 1, hours, minutes, 0);
  }

  private generateTimeItems(): TimeViewItem[] {
    const maxMinutes = 60 * 24;
    const step = 30;
    const result: TimeViewItem[] = [];
    const d = this.createTimeObj(0, 0);
    for (let i = 0; i < maxMinutes; i += step) {
      result.push({
        date: new Date(d),
        isMuted: false,
        isSelected: false,
        label: this.viewDateAdapter.format(d)
      });

      d.setMinutes(d.getMinutes() + step);
    }

    return result;
  }
}
