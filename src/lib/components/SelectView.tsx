import React from "react";
import ReactDOM from "react-dom";
import Popper, { Placement } from "popper.js";
import { stopPropagationAndPrevent } from "../utils/domEventHelpers";
import { ItemDisplayFn, selectUtils } from "../utils/selectUtils";
import { keyCodes } from "../utils/keyCodeMap";
import { toClassNames, getBodyPortal } from "../utils/reactHelpers";

interface SelectViewProps<TItem> {
  items: TItem[];
  popoverRef: HTMLElement;
  placement: Placement;
  onOutsideClick?: () => any;
  itemKey?: string;
  display?: string | ItemDisplayFn<TItem>;
  nonStrict?: boolean;
  message?: string;
  noResultMessage?: string;
  onSelect: (item: TItem) => any;
}

interface SelectViewState {
  focusedIndex: number;
}

export class SelectView<TItem> extends React.Component<
  SelectViewProps<TItem>,
  SelectViewState
> {
  popper?: Popper;
  rootEl = React.createRef<HTMLDivElement>();

  constructor(props: SelectViewProps<TItem>) {
    super(props);

    this.state = {
      focusedIndex: -1
    };

    this.onDocumentClick = this.onDocumentClick.bind(this);
  }

  render() {
    return ReactDOM.createPortal(this.renderView(), getBodyPortal());
  }

  renderView() {
    const minWidth = this.props.popoverRef.getBoundingClientRect().width;
    return (
      <div
        className="n-dropdown n-select"
        onMouseDown={stopPropagationAndPrevent}
        ref={this.rootEl}
        style={{ minWidth }}
      >
        <ul>
          {this.renderMessage()}
          {this.renderNoResultMessage()}
          {this.renderItems()}
        </ul>
      </div>
    );
  }

  renderItems() {
    return this.props.items.map((item, i) => {
      const itemKey = this.getItemKey(item);
      const focused = i == this.state.focusedIndex;
      return (
        <li
          key={itemKey}
          className={toClassNames({ focused })}
          onClick={() => this.select(item)}
        >
          {this.formatItemDisplay(item)}
        </li>
      );
    });
  }

  renderMessage() {
    const { message } = this.props;
    return message && <li>{message}</li>;
  }

  renderNoResultMessage() {
    const noResult = !this.props.items || !this.props.items.length;
    const noResultMessage = this.props.noResultMessage || "Brak wyników";
    return noResult && <li>{noResultMessage}</li>;
  }

  componentDidMount() {
    this.popper = new Popper(this.props.popoverRef, this.rootEl.current!, {
      placement: this.props.placement
    });
    document.addEventListener("click", this.onDocumentClick);
  }

  componentDidUpdate(prevProps: SelectViewProps<TItem>) {
    if (prevProps.items != this.props.items && this.state.focusedIndex !== 0) {
      this.resetfocusedIndex();
    }
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

  select(item: TItem) {
    this.props.onSelect && this.props.onSelect(item);
  }

  getItemKey(item: any) {
    if (typeof item === "string") return item;
    if (typeof item === "number") return item;

    return item[this.props.itemKey || "id"];
  }

  formatItemDisplay(item: any) {
    return selectUtils.formatItemDisplay(item, this.props.display);
  }

  selectFocused() {
    if (!this.props.items) return;

    const focusedItem = this.props.items[this.state.focusedIndex];
    if (focusedItem) {
      this.select(focusedItem);
    }
  }

  focusNext() {
    if (!this.props.items) return;

    this.setState({
      focusedIndex: (this.state.focusedIndex + 1) % this.props.items.length
    });

    this.scrollToFocused();
  }

  focusPrev() {
    if (!this.props.items) return;

    let newfocusedIndex = this.state.focusedIndex - 1;
    if (newfocusedIndex < 0) newfocusedIndex = this.props.items.length - 1;

    this.setState({
      focusedIndex: newfocusedIndex
    });

    this.scrollToFocused();
  }

  // @Watch("items")
  resetfocusedIndex() {
    this.setState({
      focusedIndex: 0
    });
    this.scrollToFocused();
  }

  scrollToFocused() {
    Promise.resolve().then(() => {
      if (this.rootEl.current) {
        let focusedEl = this.rootEl.current.querySelector(".focused");
        if (focusedEl) {
          focusedEl.scrollIntoView(false);
        }
      }
    });
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

      case keyCodes.enter:
        event.preventDefault();
        event.stopPropagation();
        this.selectFocused();
        break;

      case keyCodes.tab:
        this.selectFocused();
        break;

      default:
        break;
    }
  }
}
