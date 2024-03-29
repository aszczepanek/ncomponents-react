import React from "react";
import ReactDOM from "react-dom";
import Popper, { Placement } from "popper.js";
import { domEventHelpers } from "../utils/domEventHelpers";
import { ItemDisplayFn, selectUtils, ItemRenderFn, ItemsRenderFn, SelectEntryMetadata } from "../utils/selectUtils";
import { keyCodes } from "../utils/keyCodeMap";
import { toClassNames, getBodyPortal } from "../utils/reactHelpers";
import { AsyncItemsProvider } from "../utils/asyncItemsProvider";

interface SelectViewProps<TItem> {
  items: TItem[] | AsyncItemsProvider<TItem>;
  popoverRef: HTMLElement;
  placement: Placement;
  onOutsideClick?: () => any;
  itemKey?: keyof TItem;
  itemRender?: ItemRenderFn<TItem>;
  itemsRender?: ItemsRenderFn<TItem>;
  display?: keyof TItem | ItemDisplayFn<TItem>;
  nonStrict?: boolean;
  message?: string;
  noResultMessage?: string;
  filterToken?: string;
  emptyOption?: boolean;
  onSelect: (item: TItem | undefined) => any;
}

interface SelectViewState<TItem> {
  focusedIndex: number;
  items: TItem[];
  asyncError: boolean;
  asyncPending: boolean;
}

export class SelectView<TItem> extends React.Component<SelectViewProps<TItem>, SelectViewState<TItem>> {
  static rootClassName = "n-dropdown n-select";

  popper?: Popper;
  rootEl = React.createRef<HTMLDivElement>();
  currentAsyncItemsPromise?: Promise<any>;
  unmounted = false;

  constructor(props: SelectViewProps<TItem>) {
    super(props);

    this.state = {
      focusedIndex: -1,
      items: [],
      asyncPending: false,
      asyncError: false,
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
        className={SelectView.rootClassName}
        onMouseDown={domEventHelpers.stopPropagationAndPrevent}
        ref={this.rootEl}
        style={{ minWidth }}
      >
        <ul>
          {this.renderMessageItem()}
          {this.renderNoResultMessage()}
          {this.renderEmptyOption()}
          {this.renderItems()}
        </ul>
      </div>
    );
  }

  renderEmptyOption() {
    if (!this.props.emptyOption) return null;
    if (this.props.filterToken) return null;

    return (
      <li onClick={() => this.select(undefined)}>
        <span>&nbsp;</span>
      </li>
    );
  }

  renderItems() {
    const selectEntries = this.state.items.map<SelectEntryMetadata<TItem>>((item, i) => {
      const itemKey = this.getItemKey(item);
      const focused = i == this.state.focusedIndex;

      return {
        item,
        itemKey,
        focused,
        index: i,
      };
    });

    if (this.props.itemsRender) {
      return this.props.itemsRender({
        entries: selectEntries,
        entryDefaultRender: (x) => this.renderSelectEntry(x),
        onSelect: (x) => this.select(x),
      });
    }

    return selectEntries.map((x) => this.renderSelectEntry(x));
  }

  renderSelectEntry(entry: SelectEntryMetadata<TItem>) {
    const { item, focused, itemKey } = entry;
    return (
      <li key={itemKey} className={toClassNames({ focused })} onClick={() => this.select(item)}>
        {this.renderItem(item)}
      </li>
    );
  }

  renderMessageItem() {
    if (this.state.asyncError) {
      const asyncDataProvider = this.getAsyncDataProvider();
      return <li>{(asyncDataProvider && asyncDataProvider.errorFeedback) || "Błąd"}</li>;
    }

    if (this.state.asyncPending) {
      const asyncDataProvider = this.getAsyncDataProvider();
      return <li>{(asyncDataProvider && asyncDataProvider.loadingFeedback) || "Wczytywanie..."}</li>;
    }

    const { message } = this.props;
    return message && <li>{message}</li>;
  }

  renderNoResultMessage() {
    if (!this.state.asyncError || !this.state.asyncPending) return null;
    if (this.state.items && this.state.items.length) return null;

    const noResultMessage = this.props.noResultMessage || "Brak wyników";
    return <li>{noResultMessage}</li>;
  }

  componentDidMount() {
    this.popper = new Popper(this.props.popoverRef, this.rootEl.current!, {
      placement: this.props.placement,
    });
    this.popper.scheduleUpdate();
    document.addEventListener("click", this.onDocumentClick);
    this.updateFilteredItems();
  }

  componentDidUpdate(prevProps: SelectViewProps<TItem>, prevState: SelectViewState<TItem>) {
    if (prevProps.items != this.props.items || prevProps.filterToken != this.props.filterToken) {
      this.updateFilteredItems();
    }

    if (prevProps.items != this.props.items && this.state.focusedIndex !== 0) {
      this.resetfocusedIndex();
    } else if (prevProps.filterToken != this.props.filterToken) {
      this.setState({
        focusedIndex: this.props.filterToken ? 0 : -1,
      });
    }

    if (prevState.items != this.state.items) {
      this.popper && this.popper.update();
    }
  }

  componentWillUnmount() {
    if (this.popper) {
      this.popper.destroy();
    }
    document.removeEventListener("click", this.onDocumentClick);
    this.unmounted = true;
  }

  onDocumentClick() {
    this.props.onOutsideClick && this.props.onOutsideClick();
  }

  select(item: TItem | undefined) {
    this.props.onSelect && this.props.onSelect(item);
  }

  getItemKey(item: any) {
    if (typeof item === "string") return item;
    if (typeof item === "number") return item;

    return item[this.props.itemKey || "id"];
  }

  renderItem(item: any) {
    if (this.props.itemRender) {
      return this.props.itemRender(item) || <span>&nbsp;</span>;
    }

    return selectUtils.formatItemDisplay(item, this.props.display) || <span>&nbsp;</span>;
  }

  selectFocused() {
    if (!this.props.items) return;

    if (this.state.focusedIndex >= 0 && this.state.focusedIndex < this.state.items.length) {
      const focusedItem = this.state.items[this.state.focusedIndex];
      this.select(focusedItem);
    }
  }

  focusNext() {
    if (!this.state.items) return;

    this.setState({
      focusedIndex: (this.state.focusedIndex + 1) % this.state.items.length,
    });

    this.scrollToFocused();
  }

  focusPrev() {
    if (!this.props.items) return;

    let newfocusedIndex = this.state.focusedIndex - 1;
    if (newfocusedIndex < 0) newfocusedIndex = this.state.items.length - 1;

    this.setState({
      focusedIndex: newfocusedIndex,
    });

    this.scrollToFocused();
  }

  // @Watch("items")
  resetfocusedIndex() {
    this.setState({
      focusedIndex: 0,
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

  getAsyncDataProvider(): AsyncItemsProvider<TItem> | undefined {
    return Array.isArray(this.props.items) ? undefined : this.props.items;
  }

  updateFilteredItems() {
    if (Array.isArray(this.props.items)) {
      this.setState({
        items: this.localFilterItems(this.props.items),
      });
    } else {
      const asyncItemsProvider = this.props.items;
      this.setState({
        asyncPending: true,
        asyncError: false,
      });
      const promise = (this.currentAsyncItemsPromise = asyncItemsProvider.getItems(this.props.filterToken || "").then(
        (res) => {
          if (promise != this.currentAsyncItemsPromise) return;
          if (this.unmounted) return;

          const items = asyncItemsProvider.enableSelectLocalFiltering ? this.localFilterItems(res) : res;

          this.setState({
            items,
            asyncError: false,
            asyncPending: false,
          });
        },
        (err) => {
          if (promise != this.currentAsyncItemsPromise) return;
          if (this.unmounted) return;

          this.setState({
            items: [],
            asyncError: true,
            asyncPending: false,
          });
        }
      ));
    }
  }

  localFilterItems(items: TItem[]): TItem[] {
    const filterToken = (this.props.filterToken || "").toLowerCase();

    if (filterToken) {
      items = items.filter((x) => {
        const display = selectUtils.formatItemDisplay(x, this.props.display).toLowerCase();
        return display.indexOf(filterToken) >= 0;
      });
    }

    return items;
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

      default:
        break;
    }
  }
}
