import React from "react";
import { ItemDisplayFn, selectUtils } from "../utils/selectUtils";
import { Placement } from "popper.js";
import { keyCodes } from "../utils/keyCodeMap";
import { domEventHelpers } from "../utils/domEventHelpers";
import { MultiselectView } from "./MultiselectView";

interface MultiselectProps<TItem> {
  value: TItem[] | undefined;
  items: TItem[];
  onChange: (value: TItem[]) => any;
  itemKey?: keyof TItem;
  display?: keyof TItem | ItemDisplayFn<TItem>;
  placement?: Placement;
  filterable?: boolean;
  clearButton?: boolean;
  disablePortalRender?: boolean;
  sortOnChange?: boolean;
  children?: CustomRenderSelectedItemsFn<TItem>;
  style?: React.CSSProperties;
  onKeyDown?: (ev: React.KeyboardEvent) => any;
}

interface MultiselectState {
  multiselectVisible: boolean;
}

interface DefaultRenderSelectedItemsFnArgs {
  props: MultiselectProps<any>;
  selectedItems: any[];
  formatItemDisplay: (item: any) => string;
  clear: (ev?: React.MouseEvent) => void;
}

type DefaultRenderSelectedItemsFn = (args: DefaultRenderSelectedItemsFnArgs) => React.ReactNode;

interface CustomRenderSelectedItemsFnArgs<TItem> {
  props: MultiselectProps<TItem>;
  selectedItems: TItem[];
  formatItemDisplay: (item: TItem) => string;
  clear: (ev?: React.MouseEvent) => void;
  defaultRenderSelectedItems: () => React.ReactNode;
}

type CustomRenderSelectedItemsFn<TItem> = (
  args: CustomRenderSelectedItemsFnArgs<TItem>
) => React.ReactNode;

let currentOpenMultiselect: Multiselect<any> | undefined;

export class Multiselect<TItem> extends React.Component<MultiselectProps<TItem>, MultiselectState> {
  static rootClassName = "n-multiselect";
  static defaultPlacement: Placement = "bottom-start";
  static defaultRenderSelectedItems: DefaultRenderSelectedItemsFn = ({
    props,
    selectedItems,
    formatItemDisplay,
    clear
  }) => {
    return (
      <>
        {selectedItems.map(x => formatItemDisplay(x)).join(", ") || "-"}
        {props.clearButton && (
          <button onClick={clear} onMouseDown={domEventHelpers.stopPropagationAndPrevent}>
            Clear
          </button>
        )}
      </>
    );
  };

  multiselectView?: MultiselectView<TItem>;
  elRef = React.createRef<HTMLDivElement>();

  constructor(props: MultiselectProps<TItem>) {
    super(props);

    this.state = {
      multiselectVisible: false
    };

    this.onKeydown = this.onKeydown.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.formatItemDisplay = this.formatItemDisplay.bind(this);
    this.onItemSelect = this.onItemSelect.bind(this);
    this.clear = this.clear.bind(this);
    this.defaultRenderSelectedItems = this.defaultRenderSelectedItems.bind(this);
    this.hide = this.hide.bind(this);
  }

  render() {
    return (
      <>
        <div
          style={this.props.style}
          className={Multiselect.rootClassName}
          onFocus={this.onFocus}
          onKeyDown={this.onKeydown}
          tabIndex={0}
          onClick={domEventHelpers.stopPropagationAndPrevent}
          ref={this.elRef}
        >
          {this.renderSelectedItems()}
        </div>
        {this.renderMultiselectView()}
      </>
    );
  }

  renderSelectedItems() {
    if (this.props.children) {
      return this.props.children({
        formatItemDisplay: this.formatItemDisplay,
        clear: this.clear,
        props: this.props,
        selectedItems: this.props.value || [],
        defaultRenderSelectedItems: this.defaultRenderSelectedItems
      });
    } else {
      return this.defaultRenderSelectedItems();
    }
  }

  renderMultiselectView() {
    if (!this.state.multiselectVisible) return undefined;

    const placement = this.props.placement || Multiselect.defaultPlacement;

    return (
      <MultiselectView
        disablePortalRender={this.props.disablePortalRender}
        display={this.props.display}
        items={this.props.items}
        itemKey={this.props.itemKey}
        filterable={this.props.filterable}
        selected={this.props.value}
        onSelect={this.onItemSelect}
        placement={placement}
        popoverRef={this.elRef.current!}
        onOutsideClick={this.hide}
        onKeyDown={this.onKeydown}
        ref={view => (this.multiselectView = view || undefined)}
      />
    );
  }

  defaultRenderSelectedItems() {
    return Multiselect.defaultRenderSelectedItems({
      formatItemDisplay: this.formatItemDisplay,
      clear: this.clear,
      selectedItems: this.props.value || [],
      props: this.props
    });
  }

  onFocus() {
    this.show();
  }

  onKeydown(ev: React.KeyboardEvent) {
    switch (ev.keyCode) {
      case keyCodes.tab:
        if (ev.shiftKey && this.elRef.current != document.activeElement) {
          break;
        }

        if (
          !ev.shiftKey &&
          this.elRef.current == document.activeElement &&
          this.props.filterable &&
          this.multiselectView
        ) {
          ev.stopPropagation();
          ev.preventDefault();
          this.multiselectView.focusInput();
          break;
        }

        this.hide();
        break;
      case keyCodes.escape:
        this.hide();
        break;
      case keyCodes.uparrow:
      case keyCodes.downarrow:
      case keyCodes.space:
        if (this.multiselectView) {
          this.multiselectView.onKeydown(ev);
        }
        break;
      default:
        break;
    }

    this.props.onKeyDown && this.props.onKeyDown(ev);
  }

  formatItemDisplay(item: any) {
    return selectUtils.formatItemDisplay(item, this.props.display);
  }

  getItemKey(item: any) {
    if (typeof item === "string") return item;
    if (typeof item === "number") return item;

    return item[this.props.itemKey || "id"];
  }

  onItemSelect(item: TItem) {
    let newModel = (this.props.value || []).slice();

    const key = this.getItemKey(item);
    const existingItem = newModel.filter(x => this.getItemKey(x) == key)[0];
    if (existingItem !== undefined) {
      const idx = newModel.indexOf(existingItem);
      newModel.splice(idx, 1);
    } else {
      newModel.push(item);
    }

    if (this.props.sortOnChange) newModel.sort();
    this.props.onChange && this.props.onChange(newModel);
  }

  clear(ev?: React.MouseEvent) {
    ev && ev.stopPropagation();
    this.props.onChange([]);
  }

  show() {
    if (this.state.multiselectVisible) return;

    if (currentOpenMultiselect) {
      currentOpenMultiselect.hide();
    }
    currentOpenMultiselect = this;

    this.setState({
      multiselectVisible: true
    });
  }

  hide() {
    if (!this.state.multiselectVisible) return;
    if (currentOpenMultiselect == this) {
      currentOpenMultiselect = undefined;
    }
    this.setState({
      multiselectVisible: false
    });
  }

  toggle() {
    this.setState({
      multiselectVisible: !this.state.multiselectVisible
    });
  }
}
