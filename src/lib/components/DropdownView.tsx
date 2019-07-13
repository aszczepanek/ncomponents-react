import React from "react";
import ReactDOM from "react-dom";
import Popper, { Placement, ReferenceObject } from "popper.js";
import { ItemDisplayFn, selectUtils } from "../utils/selectUtils";
import { domEventHelpers } from "../utils/domEventHelpers";
import { getBodyPortal } from "../utils/reactHelpers";

export type DropdownCustomRenderItem<TItem> = (item: TItem, index: number) => React.ReactNode;

interface DropdownViewProps<TItem> {
  items: TItem[];
  popoverRef: HTMLElement | ReferenceObject;
  placement: Placement;
  onSelect: (item: TItem) => any;
  onOutsideClick?: () => any;
  display?: keyof TItem | ItemDisplayFn<TItem>;
  renderDisplay?: DropdownCustomRenderItem<TItem>;
  renderItem?: DropdownCustomRenderItem<TItem>;

  /** When true, dropdown element will be rendered in document body, otherwise as sibling */
  renderInBody?: boolean;
}

export class DropdownView<TItem> extends React.Component<DropdownViewProps<TItem>> {
  static rootClassName = "n-dropdown";

  popper?: Popper;
  rootEl = React.createRef<HTMLDivElement>();

  constructor(props: DropdownViewProps<TItem>) {
    super(props);

    this.onDocumentClick = this.onDocumentClick.bind(this);
  }

  render() {
    if (this.props.renderInBody) {
      return ReactDOM.createPortal(this.renderView(), getBodyPortal());
    } else {
      return this.renderView();
    }
  }

  renderView() {
    const minWidth = this.props.popoverRef.getBoundingClientRect().width;

    return (
      <div
        className={DropdownView.rootClassName}
        onMouseDown={domEventHelpers.stopPropagationAndPrevent}
        ref={this.rootEl}
        style={{ minWidth }}
      >
        <ul>{this.props.items.map((x, i) => this.renderItem(x, i))}</ul>
      </div>
    );
  }

  renderItem(item: TItem, index: number) {
    if (this.props.renderItem) {
      return this.props.renderItem(item, index);
    }

    return (
      <li key={index} onClick={() => this.props.onSelect(item)}>
        {this.props.renderDisplay
          ? this.props.renderDisplay(item, index)
          : this.formatItemDisplay(item)}
      </li>
    );
  }

  componentDidMount() {
    this.popper = new Popper(this.props.popoverRef, this.rootEl.current!, {
      placement: this.props.placement
    });
    this.popper.scheduleUpdate();
    document.addEventListener("click", this.onDocumentClick);
  }

  componentDidUpdate() {
    this.popper && this.popper.update();
  }

  componentWillUnmount() {
    if (this.popper) {
      this.popper.destroy();
    }
    document.removeEventListener("click", this.onDocumentClick);
  }

  formatItemDisplay(item: any) {
    return selectUtils.formatItemDisplay(item, this.props.display);
  }

  onDocumentClick() {
    this.props.onOutsideClick && this.props.onOutsideClick();
  }
}
