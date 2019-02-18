import React, { Component } from "react";
import { Placement } from "popper.js";
import { keyCodes } from "../utils/keyCodeMap";
import { SelectView } from "./SelectView";
import { selectUtils, ItemDisplayFn } from "../utils/selectUtils";

interface SelectInputProps<TItem> {
  value: any | undefined;
  items: TItem[];
  itemKey?: keyof TItem;
  itemKeyAsModel?: boolean;
  display?: keyof TItem | ItemDisplayFn<TItem>;
  placement?: Placement;
  nonStrict?: boolean;
  style?: React.CSSProperties;
  placeholder?: string;
  onChange: (value?: TItem) => any;
  onChangeNonStrict?: (value?: string) => any;
  onKeyDown?: (ev: React.KeyboardEvent) => any;
}

interface SelectInputState {
  inputValue: string;
  isInputFocused: boolean;
  filterToken: string;
  selectVisible: boolean;
}

export class SelectInput<TItem> extends Component<
  SelectInputProps<TItem>,
  SelectInputState
> {
  static defaultPlacement: Placement = "bottom-start";

  selectView?: SelectView<TItem>;
  inputRef = React.createRef<HTMLInputElement>();

  constructor(props: SelectInputProps<TItem>) {
    super(props);

    this.state = {
      isInputFocused: false,
      inputValue: "",
      filterToken: "",
      selectVisible: false
    };

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.hide = this.hide.bind(this);
  }

  render() {
    const viewValue = this.getViewValue();
    const selectVisible = this.state.selectVisible;
    const selectView = selectVisible ? this.renderSelectView() : undefined;

    return (
      <>
        <input
          style={this.props.style}
          className="n-select"
          type="text"
          ref={this.inputRef}
          value={viewValue}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onKeyDown={this.onKeydown}
          onClick={this.onClick}
          placeholder={this.props.placeholder}
        />
        {selectView}
      </>
    );
  }

  renderSelectView() {
    const placement = this.props.placement || SelectInput.defaultPlacement;
    const filteredItems = this.getFilteredItems();

    return (
      <SelectView
        items={filteredItems}
        placement={placement}
        popoverRef={this.inputRef.current!}
        onSelect={this.onSelect}
        onOutsideClick={this.hide}
        display={this.props.display}
        itemKey={this.props.itemKey}
        ref={view => (this.selectView = view || undefined)}
      />
    );
  }

  getFilteredItems() {
    let result = this.props.items || [];
    const { value, nonStrict } = this.props;
    const filterToken = this.state.filterToken.toLowerCase();

    if ((value === undefined || value === null || nonStrict) && filterToken) {
      result = result.filter(x => {
        const display = this.formatItemDisplay(x).toLowerCase();
        return display.indexOf(filterToken) >= 0;
      });
    }

    return result;
  }

  onFocus(ev: React.FocusEvent<HTMLInputElement>) {
    this.setState({
      isInputFocused: true,
      inputValue: ev.target.value,
      filterToken: "",
      selectVisible: true
    });
    this.inputRef.current!.select();
  }

  onBlur() {
    this.setState({
      isInputFocused: false,
      inputValue: "",
      filterToken: "",
      selectVisible: false
    });
  }

  onClick(ev: React.MouseEvent) {
    ev.stopPropagation();
    ev.preventDefault();
    ev.nativeEvent.stopImmediatePropagation();
    this.show();
  }

  onChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const filterToken = ev.target.value;

    if (!this.props.nonStrict) {
      this.updateModel(undefined);
    } else {
      this.updateModel(ev.target.value);
    }

    if (!this.state.selectVisible) this.show();
    this.setState({
      filterToken,
      inputValue: ev.target.value
    });
  }

  onKeydown(ev: React.KeyboardEvent) {
    switch (ev.keyCode) {
      case keyCodes.downarrow:
      case keyCodes.uparrow:
        ev.preventDefault();
        ev.stopPropagation();
        this.selectView && this.selectView.onKeydown(ev);
        if (!this.selectView) this.show();
        break;
      case keyCodes.enter:
      case keyCodes.tab:
        this.selectView && this.selectView.onKeydown(ev);
        break;
      default:
        break;
    }

    this.props.onKeyDown && this.props.onKeyDown(ev);
  }

  onSelect<TItem>(value: TItem) {
    this.updateModel(value);
    this.hide();
    //this.getInputElement().blur();
  }

  updateModel(newValue: any | undefined, nonStrictValue?: boolean) {
    let modelValue = newValue;

    if (nonStrictValue) {
      if (this.props.onChangeNonStrict) {
        this.props.onChangeNonStrict(modelValue);
      }
    } else {
      if (this.props.onChange) {
        this.props.onChange(modelValue);
      }
    }

    if (!this.state.isInputFocused || newValue !== undefined) {
      this.setState({
        inputValue: this.formatItemDisplay(newValue)
      });
    }
  }

  getViewValue() {
    if (this.state.isInputFocused) {
      return this.state.inputValue;
    } else {
      return this.formatModelDisplay();
    }
  }

  formatModelDisplay(): string {
    const { value } = this.props;

    if (value === undefined || value == null) {
      return "";
    } else {
      if (this.props.itemKeyAsModel) {
        const item = this.props.items.filter(
          x => this.getItemKey(x) == value
        )[0];
        return this.formatItemDisplay(item || value);
      } else {
        return this.formatItemDisplay(value);
      }
    }
  }

  formatItemDisplay(item: any): string {
    return selectUtils.formatItemDisplay(item, this.props.display);
  }

  getItemKey(item: any) {
    if (typeof item === "string") return item;

    return item[this.props.itemKey || "id"];
  }

  show() {
    if (this.state.selectVisible) return;

    this.setState({
      selectVisible: true
    });
  }

  hide() {
    if (!this.state.selectVisible) return;

    this.setState({
      selectVisible: false
    });
  }

  toggle() {
    this.setState({
      selectVisible: !this.state.selectVisible
    });
  }
}
