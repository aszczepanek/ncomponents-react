import React, { Component } from "react";
import { Placement } from "popper.js";
import { DateAdapter, dateAdapterFactory } from "../utils/dateAdapter";
import { DatepickerView } from "./DatepickerView";
import { isDate } from "../utils/typeHelpers";
import { inferDateFormat } from "../utils/dateFormatInferer";
import { datePartUpdater } from "../utils/datePartUpdater";
import { keyCodes } from "../utils/keyCodeMap";

interface DatepickerInputProps<TModel>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  value: TModel | undefined;
  onChange: (value?: TModel) => any;
  modelFormat?: string;
  viewFormat?: string;
  placement?: Placement;
  onKeyDown?: (ev: React.KeyboardEvent) => any;
}

interface DatepickerInputState {
  isInputFocused: boolean;
  inputValue: string;
  datepickerVisible: boolean;
}

export class DatepickerInput<TModel = Date | string> extends Component<
  DatepickerInputProps<TModel>,
  DatepickerInputState
> {
  static rootClassName = "n-datepicker";
  static defaultModelFormat = "ISO8601";
  static defaultViewFormat = "yyyy-MM-dd";
  static defaultPlacement: Placement = "bottom-start";

  datepicker?: DatepickerView;
  inputRef = React.createRef<HTMLInputElement>();

  modelDateAdapter: DateAdapter;
  viewDateAdapter: DateAdapter;

  constructor(props: DatepickerInputProps<TModel>) {
    super(props);

    this.state = {
      isInputFocused: false,
      inputValue: "",
      datepickerVisible: false
    };

    this.modelDateAdapter = dateAdapterFactory.getForFormat(
      this.props.modelFormat || DatepickerInput.defaultModelFormat
    );
    this.viewDateAdapter = dateAdapterFactory.getForFormat(
      this.props.viewFormat || DatepickerInput.defaultViewFormat
    );
    this.onDateSelect = this.onDateSelect.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
    this.onMouseWheel = this.onMouseWheel.bind(this);
  }

  render() {
    const viewValue = this.getViewValue();
    const datepickerVisible = this.state.datepickerVisible;
    const datepickerView = datepickerVisible ? this.renderDatepickerView() : undefined;
    const {
      value,
      onChange,
      modelFormat,
      viewFormat,
      placement,
      className,
      ...restProps
    } = this.props;
    const classNames = [className, DatepickerInput.rootClassName].filter(Boolean).join(" ");

    return (
      <>
        <input
          {...restProps}
          className={classNames}
          type="text"
          ref={this.inputRef}
          value={viewValue}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onWheel={this.onMouseWheel}
          onKeyDown={this.onKeydown}
        />
        {datepickerView}
      </>
    );
  }

  renderDatepickerView() {
    const placement = this.props.placement || DatepickerInput.defaultPlacement;
    return (
      <DatepickerView
        placement={placement}
        popoverRef={this.inputRef.current!}
        value={this.props.value}
        onSelect={this.onDateSelect}
      />
    );
  }

  onFocus(ev: React.FocusEvent<HTMLInputElement>) {
    this.setState({
      isInputFocused: true,
      inputValue: ev.target.value,
      datepickerVisible: true
    });
    this.inputRef.current && this.inputRef.current.select();
    this.props.onFocus && this.props.onFocus(ev);
  }

  onBlur(ev: React.FocusEvent<HTMLInputElement>) {
    this.setState({
      isInputFocused: false,
      inputValue: "",
      datepickerVisible: false
    });
    this.props.onBlur && this.props.onBlur(ev);
  }

  onChange(ev: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      inputValue: ev.target.value
    });
    const parsedValue = this.parseInputValue(ev.target.value);
    this.updateModel(parsedValue);
  }

  onKeydown(ev: React.KeyboardEvent) {
    switch (ev.keyCode) {
      case keyCodes.downarrow:
        ev.preventDefault();
        ev.stopPropagation();
        if (ev.shiftKey) {
          this.addMonth(-1);
        } else {
          this.addDate(-1);
        }
        break;
      case keyCodes.uparrow:
        ev.preventDefault();
        ev.stopPropagation();
        if (ev.shiftKey) {
          this.addMonth(1);
        } else {
          this.addDate(1);
        }
        break;
      default:
        break;
    }

    this.props.onKeyDown && this.props.onKeyDown(ev);
  }

  onMouseWheel(ev: React.WheelEvent) {
    if (!ev.shiftKey) return;
    ev.stopPropagation();

    const delta = ev.deltaY < 0 ? 1 : -1;
    if (ev.altKey) {
      this.addMonth(delta);
    } else {
      this.addDate(delta);
    }
  }

  onDateSelect(value: Date) {
    const newModel = this.getModelWithDatePartUpdated(value);
    this.updateModel(newModel);
    if (this.inputRef.current) {
      this.inputRef.current.blur();
    }
  }

  getViewValue() {
    if (this.state.isInputFocused) {
      return this.state.inputValue;
    } else {
      const date = this.convertToDateModelValue(this.props.value);

      if (this.props.value && !date) return "?";
      else if (date) return this.viewDateAdapter.format(date);
      else return "";
    }
  }

  parseInputValue(value: string) {
    if (!value) return undefined; // TODO configurable

    const newDate = this.viewDateAdapter.parse(value);
    if (!newDate) {
      return this.props.value;
    } else {
      const newModelValue = this.getModelWithDatePartUpdated(newDate);
      return this.modelDateAdapter.format(newModelValue);
    }
  }

  getModelWithDatePartUpdated(newDate: Date) {
    var modelDate = this.convertToDateModelValue(this.props.value);
    return datePartUpdater.setDate(modelDate, newDate);
  }

  updateModel(newValue: string | Date | undefined) {
    const newModel = this.modelDateAdapter.format(newValue || "") as TModel;
    if (this.props.onChange && newModel != this.props.value) {
      this.props.onChange(newModel);
    }
  }

  convertToDateModelValue(value: any) {
    if (!value) return undefined;
    if (isDate(value)) return value;

    let result = this.modelDateAdapter.parse(value);

    if (!result) {
      const inferredDateFormat = inferDateFormat(value);
      if (inferredDateFormat) {
        const adapter = dateAdapterFactory.getForFormat(inferredDateFormat);
        result = adapter.parse(value);
      }
    }

    return result;
  }

  addDate(delta: number) {
    const curDate = this.convertToDateModelValue(this.props.value);
    if (curDate) {
      curDate.setDate(curDate.getDate() + delta);
      if (this.state.isInputFocused) {
        this.setState({
          inputValue: this.viewDateAdapter.format(curDate)
        });
      }
      this.updateModel(curDate);
    }
  }

  addMonth(delta: number) {
    const curDate = this.convertToDateModelValue(this.props.value);
    if (curDate) {
      curDate.setMonth(curDate.getMonth() + delta);
      if (this.state.isInputFocused) {
        this.setState({
          inputValue: this.viewDateAdapter.format(curDate)
        });
      }
      this.updateModel(curDate);
    }
  }

  show() {
    if (this.state.datepickerVisible) return;

    this.setState({
      datepickerVisible: true
    });
  }

  hide() {
    if (!this.state.datepickerVisible) return;

    this.setState({
      datepickerVisible: false
    });
  }

  toggle() {
    this.setState({
      datepickerVisible: !this.state.datepickerVisible
    });
  }
}
