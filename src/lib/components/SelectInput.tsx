import React, { Component } from "react";
import { Placement } from "popper.js";
import { keyCodes } from "../utils/keyCodeMap";
import { SelectView } from "./SelectView";
import { selectUtils, ItemDisplayFn, ItemRenderFn, ItemsRenderFn } from "../utils/selectUtils";
import { AsyncItemsProvider } from "../utils/asyncItemsProvider";

interface SelectInputProps<TItem>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  value: any | undefined;
  items: TItem[] | AsyncItemsProvider<TItem>;
  itemKey?: keyof TItem;
  itemKeyAsModel?: boolean;
  itemRender?: ItemRenderFn<TItem>;
  itemsRender?: ItemsRenderFn<TItem>;
  display?: keyof TItem | ItemDisplayFn<TItem>;
  placement?: Placement;
  nonStrict?: boolean;
  emptyOption?: boolean;
  onChange: (value?: TItem) => any;
  onChangeNonStrict?: (value?: string) => any;
}

interface SelectInputState<TItem> {
  inputValue: string;
  isDirty: boolean;
  isInputFocused: boolean;
  filterToken: string;
  selectVisible: boolean;
}

export class SelectInput<TItem> extends Component<
  SelectInputProps<TItem>,
  SelectInputState<TItem>
> {
  static rootClassName = "n-select";
  static defaultPlacement: Placement = "bottom-start";

  selectView?: SelectView<TItem>;
  inputRef = React.createRef<HTMLInputElement>();

  itemByKeyKeyValue?: any;
  itemByKey?: TItem;
  itemByKeyLoaded = false;

  constructor(props: SelectInputProps<TItem>) {
    super(props);

    this.state = {
      isInputFocused: false,
      isDirty: false,
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

  componentDidUpdate(prevProps: SelectInputProps<TItem>) {
    if (this.itemByKeyLoaded && this.props.items !== prevProps.items && Array.isArray(this.props.items)) {
      this.itemByKeyLoaded = false;
      this.itemByKey = undefined;
      this.itemByKeyKeyValue = undefined;
      this.forceUpdate();
    }
  }

  render() {
    const viewValue = this.getViewValue();
    const selectVisible = this.state.selectVisible;
    const selectView = selectVisible ? this.renderSelectView() : undefined;
    const {
      value,
      items,
      itemKey,
      itemKeyAsModel,
      itemRender,
      itemsRender,
      display,
      placement,
      nonStrict,
      emptyOption,
      onChange,
      className,
      onChangeNonStrict,
      ...restProps
    } = this.props;
    const classNames = [className, SelectInput.rootClassName].filter(Boolean).join(" ");

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
          onKeyDown={this.onKeydown}
          onClick={this.onClick}
        />
        {selectView}
      </>
    );
  }

  renderSelectView() {
    const placement = this.props.placement || SelectInput.defaultPlacement;
    const filterToken = this.getFilterTokenForView();

    return (
      <SelectView
        items={this.props.items}
        filterToken={filterToken}
        placement={placement}
        popoverRef={this.inputRef.current!}
        onSelect={this.onSelect}
        onOutsideClick={this.hide}
        display={this.props.display}
        itemKey={this.props.itemKey}
        itemRender={this.props.itemRender}
        itemsRender={this.props.itemsRender}
        emptyOption={this.props.emptyOption}
        ref={view => (this.selectView = view || undefined)}
      />
    );
  }

  getFilterTokenForView() {
    const { value, nonStrict } = this.props;

    if (value === undefined || value === null || value === "" || nonStrict)
      return this.state.filterToken;
    else return "";
  }

  onFocus(ev: React.FocusEvent<HTMLInputElement>) {
    this.setState({
      isInputFocused: true,
      isDirty: false,
      inputValue: ev.target.value,
      filterToken: "",
      selectVisible: true
    });
    this.inputRef.current!.select();
    this.props.onFocus && this.props.onFocus(ev);
  }

  onBlur(ev: React.FocusEvent<HTMLInputElement>) {
    this.setState({
      isInputFocused: false,
      isDirty: false,
      inputValue: "",
      filterToken: "",
      selectVisible: false
    });
    this.props.onBlur && this.props.onBlur(ev);
  }

  onClick(ev: React.MouseEvent<HTMLInputElement>) {
    ev.stopPropagation();
    ev.preventDefault();
    ev.nativeEvent.stopImmediatePropagation();
    if (this.show()) {
      this.inputRef.current!.select();
    }
    this.props.onClick && this.props.onClick(ev);
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
      inputValue: ev.target.value,
      isDirty: true
    });
  }

  onKeydown(ev: React.KeyboardEvent<HTMLInputElement>) {
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

  onSelect<TItem>(value: TItem | undefined) {
    this.updateModel(value);
    this.hide();
    this.setState({ isDirty: false });
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
        if (this.props.itemKeyAsModel && !Array.isArray(this.props.items)) {
          this.itemByKey = modelValue;
          this.itemByKeyKeyValue = modelValue !== undefined ? this.getItemKey(modelValue) : undefined;
          this.itemByKeyLoaded = true;
        }
      }
    }

    if (!this.state.isInputFocused || newValue !== undefined) {
      this.setState({
        inputValue: this.formatItemDisplay(newValue)
      });
    }
  }

  getViewValue() {
    if (this.state.isInputFocused && this.state.isDirty) {
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
        const keyValue = value;
        if (this.itemByKeyKeyValue != keyValue) {
          this.tryToLoadItemByKey(keyValue);
        }

        return this.formatItemDisplay(this.itemByKey || value);
      } else {
        return this.formatItemDisplay(value);
      }
    }
  }

  tryToLoadItemByKey(keyValue: any) {
    this.itemByKey = undefined;
    this.itemByKeyKeyValue = keyValue;
    this.itemByKeyLoaded = false;

    if (Array.isArray(this.props.items)) {
      const item = this.props.items.filter(x => this.getItemKey(x) == keyValue)[0];
      this.itemByKeyLoaded = true;
      this.itemByKey = item;
    } else {
      const asyncItemProvider = this.props.items;
      asyncItemProvider.getItemByKey(keyValue).then(res => {
        if (this.itemByKeyKeyValue != keyValue) return;
        this.itemByKey = res;
        this.itemByKeyLoaded;
        this.forceUpdate();
      });
    }
  }

  formatItemDisplay(item: any): string {
    return selectUtils.formatItemDisplay(item, this.props.display);
  }

  getItemKey(item: any) {
    if (typeof item === "string") return item;
    if (typeof item === "number") return item;

    return item[this.props.itemKey || "id"];
  }

  show() {
    if (this.state.selectVisible) return false;

    this.setState({
      selectVisible: true
    });
    return true;
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
