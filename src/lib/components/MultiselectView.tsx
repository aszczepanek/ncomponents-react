import React from "react";
import ReactDOM from "react-dom";
import { ItemDisplayFn, selectUtils } from "../utils/selectUtils";
import Popper, { Placement } from "popper.js";
import { domEventHelpers } from "../utils/domEventHelpers";
import { keyCodes } from "../utils/keyCodeMap";
import { toClassNames, getBodyPortal } from "../utils/reactHelpers";

interface MultiselectViewProps<TItem> {
  items: TItem[] | undefined;
  selected: TItem[] | undefined;
  itemKey?: keyof TItem;
  display?: keyof TItem | ItemDisplayFn<TItem>;
  placement?: Placement;
  filterable?: boolean;
  disablePortalRender?: boolean;
  onSelect: (item: TItem) => any;
  popoverRef: HTMLElement;
  onOutsideClick?: () => any;
}

interface MultiselectViewState {
  filterToken: string;
  focusedIndex: number;
}

export class MultiselectView<TItem> extends React.Component<
  MultiselectViewProps<TItem>,
  MultiselectViewState
> {
  popper?: Popper;
  rootEl = React.createRef<HTMLDivElement>();
  filterInputRef = React.createRef<HTMLInputElement>();

  constructor(props: MultiselectViewProps<TItem>) {
    super(props);

    this.state = {
      filterToken: "",
      focusedIndex: -1
    };

    this.onKeydown = this.onKeydown.bind(this);
    this.onFilterTokenChange = this.onFilterTokenChange.bind(this);
    this.onDocumentClick = this.onDocumentClick.bind(this);
  }

  render() {
    const minWidth = this.props.popoverRef.getBoundingClientRect().width;

    const result = (
      <div
        className="n-dropdown n-multiselect-view"
        onClick={domEventHelpers.stopPropagationAndPrevent}
        ref={this.rootEl}
        style={{ minWidth }}
      >
        {this.renderFilterInput()}
        {this.renderItems()}
      </div>
    );

    return this.props.disablePortalRender
      ? result
      : ReactDOM.createPortal(result, getBodyPortal());
  }

  renderFilterInput() {
    if (!this.props.filterable) return;
    return (
      <div ref={this.rootEl}>
        <input
          type="text"
          ref={this.filterInputRef}
          onChange={this.onFilterTokenChange}
          onKeyDown={this.onKeydown}
        />
      </div>
    );
  }

  renderItems() {
    const { focusedIndex } = this.state;
    const filteredItems = this.getFilteredItems();

    return (
      <ul>
        {filteredItems.map((item, i) => {
          return (
            <li
              key={this.getItemKey(item)}
              className={toClassNames({
                focused: i == focusedIndex,
                selected: this.isSelected(item)
              })}
              onClick={() => this.select(item)}
            >
              {this.formatItemDisplay(item)}
            </li>
          );
        })}
      </ul>
    );
  }

  componentDidMount() {
    this.focusInput();
    this.popper = new Popper(this.props.popoverRef, this.rootEl.current!, {
      placement: this.props.placement
    });
    document.addEventListener("click", this.onDocumentClick);
  }

  componentWillUnmount() {
    if (this.popper) {
      this.popper.destroy();
    }
    document.removeEventListener("click", this.onDocumentClick);
  }

  onDocumentClick() {
    this.props.onOutsideClick && this.props.onOutsideClick();
  }

  onKeydown(event: React.KeyboardEvent) {
    switch (event.keyCode) {
      case keyCodes.downarrow:
        event.preventDefault();
        event.stopPropagation();
        this.focusNext();
        break;
      case keyCodes.uparrow:
        event.preventDefault();
        event.stopPropagation();
        this.focusPrev();
        break;
      case keyCodes.space:
        event.preventDefault();
        event.stopPropagation();
        this.toggleFocused();
        break;
      default:
        break;
    }
  }

  getFilteredItems() {
    const { filterable, items } = this.props;
    const { filterToken } = this.state;

    if (!filterable || !filterToken || !items) return items || [];
    const token = filterToken.toLowerCase();

    return items.filter(
      x =>
        this.formatItemDisplay(x)
          .toLowerCase()
          .indexOf(token) >= 0
    );
  }

  focusNext() {
    if (!this.props.items) return;

    const filtered = this.getFilteredItems();

    this.setState({
      focusedIndex: (this.state.focusedIndex + 1) % filtered.length
    });
  }

  focusPrev() {
    if (!this.props.items) return;

    let newfocusedIndex = this.state.focusedIndex - 1;
    if (newfocusedIndex < 0) {
      const filtered = this.getFilteredItems();
      newfocusedIndex = filtered.length - 1;
    }

    this.setState({
      focusedIndex: newfocusedIndex
    });
  }

  resetfocusedIndex() {
    this.setState((prev, next) => {
      return {
        focusedIndex: prev.filterToken ? 0 : -1
      };
    });
  }

  focusInput() {
    if (this.filterInputRef.current) {
      this.filterInputRef.current.focus();
    }
  }

  getFocusedItem() {
    const filteredItems = this.getFilteredItems();
    if (!filteredItems.length || this.state.focusedIndex < 0) return undefined;

    return filteredItems[this.state.focusedIndex];
  }

  toggleFocused() {
    const focusedItem = this.getFocusedItem();
    if (!focusedItem) return;

    this.select(focusedItem);
  }

  select(item: TItem) {
    this.props.onSelect(item);
  }

  isSelected(item: TItem) {
    const key = this.getItemKey(item);
    const selected = this.props.selected || [];
    for (let s of selected) {
      if (this.getItemKey(s) == key) return true;
    }

    return false;
  }

  getItemKey(item: any) {
    return item[this.props.itemKey || "id"];
  }

  formatItemDisplay(item: any) {
    return selectUtils.formatItemDisplay(item, this.props.display);
  }

  onFilterTokenChange(ev: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      filterToken: ev.target.value
    });
    this.resetfocusedIndex();
  }
}
