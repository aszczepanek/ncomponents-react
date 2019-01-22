import React from "react";
import ReactDOM from "react-dom";
import Popper, { Placement, ReferenceObject } from "popper.js";
import { ItemDisplayFn, selectUtils } from "../utils/selectUtils";
import { domEventHelpers } from "../utils/domEventHelpers";
import { getBodyPortal } from "../utils/reactHelpers";

export type DropdownCustomRenderItem<TItem> = (
  item: TItem,
  index: number
) => React.ReactNode;

interface DropdownViewProps<TItem> {
  items: TItem[];
  popoverRef: HTMLElement | ReferenceObject;
  placement?: Placement;
  onSelect: (item: TItem) => any;
  onOutsideClick?: () => any;
  display?: string | ItemDisplayFn<TItem>;
  renderItem?: DropdownCustomRenderItem<TItem>;
  renderInBody?: boolean;
}

export class DropdownView<TItem> extends React.Component<
  DropdownViewProps<TItem>> {
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
    return (
      <div
        className="n-dropdown"
        onMouseDown={domEventHelpers.stopPropagationAndPrevent}
        ref={this.rootEl}
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
        {this.formatItemDisplay(item)}
      </li>
    );
  }

  componentDidMount() {
    this.popper = new Popper(this.props.popoverRef, this.rootEl.current!, {
      placement: this.props.placement
    });
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

  formatItemDisplay(item: any): string {
    return selectUtils.formatItemDisplay(item, this.props.display);
  }

  onDocumentClick() {
    this.props.onOutsideClick && this.props.onOutsideClick();
  }
}
