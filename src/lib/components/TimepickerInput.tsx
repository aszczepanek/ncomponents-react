import React, { Component } from "react";
import { Placement } from "popper.js";
import { DateAdapter, dateAdapterFactory } from "../utils/dateAdapter";
import { isDate } from "../utils/typeHelpers";
import { inferDateFormat } from "../utils/dateFormatInferer";
import { datePartUpdater } from "../utils/datePartUpdater";
import { keyCodes } from "../utils/keyCodeMap";
import { TimepickerView } from "./TimepickerView";

interface TimepickerInputProps<TModel>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  value: TModel | undefined;
  onChange: (value?: TModel) => any;
  modelFormat?: string;
  viewFormat?: string;
  placement?: Placement;
}

interface TimepickerInputState {
  isInputFocused: boolean;
  inputValue: string;
  timepickerVisible: boolean;
}

export class TimepickerInput<TModel = Date | string> extends Component<
  TimepickerInputProps<TModel>,
  TimepickerInputState
> {
  static rootClassName = "n-timepicker";
  static defaultModelFormat = "ISO8601";
  static defaultViewFormat = "HH:mm";
  static defaultPlacement: Placement = "bottom-start";

  timepicker?: TimepickerView;
  inputRef = React.createRef<HTMLInputElement>();

  modelDateAdapter: DateAdapter;
  viewDateAdapter: DateAdapter;

  constructor(props: TimepickerInputProps<TModel>) {
    super(props);

    this.state = {
      isInputFocused: false,
      inputValue: "",
      timepickerVisible: false
    };

    this.modelDateAdapter = dateAdapterFactory.getForFormat(
      this.props.modelFormat || TimepickerInput.defaultModelFormat
    );
    this.viewDateAdapter = dateAdapterFactory.getForFormat(
      this.props.viewFormat || TimepickerInput.defaultViewFormat
    );
    this.onTimeSelect = this.onTimeSelect.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
    this.onMouseWheel = this.onMouseWheel.bind(this);
  }

  render() {
    const viewValue = this.getViewValue();
    const timepickerVisible = this.state.timepickerVisible;
    const timepickerView = timepickerVisible ? this.renderTimepickerView() : undefined;
    const {
      value,
      onChange,
      modelFormat,
      viewFormat,
      placement,
      className,
      ...restProps
    } = this.props;
    const classNames = [className, TimepickerInput.rootClassName].filter(Boolean).join(" ");

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
        {timepickerView}
      </>
    );
  }

  renderTimepickerView() {
    const placement = this.props.placement || TimepickerInput.defaultPlacement;
    const viewFormat = this.props.viewFormat || TimepickerInput.defaultViewFormat;
    const currentModelValue = this.convertToDateModelValue(this.props.value);

    return (
      <TimepickerView
        placement={placement}
        popoverRef={this.inputRef.current!}
        viewFormat={viewFormat}
        currentModelDateValue={currentModelValue}
        onSelect={this.onTimeSelect}
      />
    );
  }

  onFocus(ev: React.FocusEvent<HTMLInputElement>) {
    this.setState({
      isInputFocused: true,
      inputValue: ev.target.value,
      timepickerVisible: true
    });
    this.inputRef.current && this.inputRef.current.select();
    this.props.onFocus && this.props.onFocus(ev);
  }

  onBlur(ev: React.FocusEvent<HTMLInputElement>) {
    this.setState({
      isInputFocused: false,
      inputValue: "",
      timepickerVisible: false
    });
    this.props.onBlur && this.props.onBlur(ev);
  }

  onChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const parsedValue = this.parseInputValue(ev.target.value);

    let updatedInputRenderValue = ev.target.value;
    if (parsedValue) {
      const viewParsed = this.viewDateAdapter.format(parsedValue);
      const viewModel = this.viewDateAdapter.format(
        this.convertToDateModelValue(this.props.value) || ""
      );

      if (viewParsed != viewModel) {
        updatedInputRenderValue = viewParsed;
      }
    }
    this.setState({
      inputValue: updatedInputRenderValue
    });
    this.updateModel(parsedValue);
  }

  onKeydown(ev: React.KeyboardEvent<HTMLInputElement>) {
    switch (ev.keyCode) {
      case keyCodes.downarrow:
        ev.preventDefault();
        ev.stopPropagation();
        if (ev.shiftKey) {
          this.addHour(-1);
        } else {
          this.addMinute(-1);
        }
        break;
      case keyCodes.uparrow:
        ev.preventDefault();
        ev.stopPropagation();
        if (ev.shiftKey) {
          this.addHour(1);
        } else {
          this.addMinute(1);
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
      this.addHour(delta);
    } else {
      this.addMinute(delta);
    }
  }

  onTimeSelect(value: Date) {
    const newModel = this.getModelWithTimePartUpdated(value);
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
      return this.convertToDateModelValue(this.props.value);
    } else {
      const newModelValue = this.getModelWithTimePartUpdated(newDate);
      return newModelValue;
    }
  }

  getModelWithTimePartUpdated(newDate: Date) {
    var modelDate = this.convertToDateModelValue(this.props.value);
    return datePartUpdater.setTime(modelDate, newDate);
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

  addMinute(delta: number) {
    const curDate = this.convertToDateModelValue(this.props.value);
    if (curDate) {
      curDate.setMinutes(curDate.getMinutes() + delta);
      if (this.state.isInputFocused) {
        this.setState({
          inputValue: this.viewDateAdapter.format(curDate)
        });
      }
      this.updateModel(curDate);
    }
  }

  addHour(delta: number) {
    const curDate = this.convertToDateModelValue(this.props.value);
    if (curDate) {
      curDate.setHours(curDate.getHours() + delta);
      if (this.state.isInputFocused) {
        this.setState({
          inputValue: this.viewDateAdapter.format(curDate)
        });
      }
      this.updateModel(curDate);
    }
  }

  show() {
    if (this.state.timepickerVisible) return;

    this.setState({
      timepickerVisible: true
    });
  }

  hide() {
    if (!this.state.timepickerVisible) return;

    this.setState({
      timepickerVisible: false
    });
  }

  toggle() {
    this.setState({
      timepickerVisible: !this.state.timepickerVisible
    });
  }
}
