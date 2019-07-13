import React from "react";
import ReactDOM from "react-dom";
import { Placement, ReferenceObject } from "popper.js";
import { ItemDisplayFn } from "../utils/selectUtils";
import { DropdownView, DropdownCustomRenderItem } from "./DropdownView";

interface DropdownProps<TItem> {
  children: React.ReactElement<any>;
  items: TItem[];
  onSelect: (item: TItem) => any;
  placement?: Placement;
  display?: keyof TItem | ItemDisplayFn<TItem>;
  renderInBody?: boolean;
  renderDisplay?: DropdownCustomRenderItem<TItem>;
  renderItem?: DropdownCustomRenderItem<TItem>;
  contextMenu?: boolean;
}

interface DropdownState {
  dropdownVisible: boolean;
  popperRef?: HTMLElement | ReferenceObject;
}

export class Dropdown<TItem> extends React.Component<DropdownProps<TItem>, DropdownState> {
  static defaultPlacement: Placement = "bottom-start";
  static defaultRenderInBody = false;

  clientX = 0;
  clientY = 0;

  constructor(props: DropdownProps<TItem>) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onMousemove = this.onMousemove.bind(this);
    this.onContextmenu = this.onContextmenu.bind(this);
    this.hide = this.hide.bind(this);

    this.state = {
      dropdownVisible: false
    };
  }

  render() {
    const newChild = React.cloneElement(this.props.children, this.getClonedChildProps());
    const dropdownView = this.renderDropdownView();

    return (
      <>
        {newChild}
        {dropdownView}
      </>
    );
  }

  renderDropdownView() {
    if (!this.state.dropdownVisible) return null;
    if (!this.state.popperRef) return null;

    const placement = this.props.placement || Dropdown.defaultPlacement;
    const renderInBody =
      typeof this.props.renderInBody === "undefined"
        ? Dropdown.defaultRenderInBody
        : this.props.renderInBody;

    return (
      <DropdownView
        items={this.props.items}
        placement={placement}
        popoverRef={this.state.popperRef}
        onSelect={this.props.onSelect}
        onOutsideClick={this.hide}
        display={this.props.display}
        renderInBody={renderInBody}
        renderDisplay={this.props.renderDisplay}
        renderItem={this.props.renderItem}
      />
    );
  }

  getClonedChildProps(): React.DOMAttributes<any> & React.RefAttributes<any> {
    let result: React.DOMAttributes<any> & React.RefAttributes<any> = {};

    if (this.props.contextMenu) {
      result.onContextMenu = this.onContextmenu;
      result.onMouseMove = this.onMousemove;
    } else {
      result.onClick = this.onClick;
    }

    return result;
  }

  onClick() {
    this.toggle();
  }

  onContextmenu(ev: React.MouseEvent) {
    ev.stopPropagation();
    ev.preventDefault();

    if (this.state.dropdownVisible) {
      this.updatePopperRef();
    } else {
      this.show();
    }

    this.props.children.props;
  }

  onMousemove(ev: React.MouseEvent) {
    this.clientX = ev.clientX;
    this.clientY = ev.clientY;
  }

  getPopperRef(): HTMLElement | ReferenceObject | undefined {
    if (this.props.contextMenu) {
      return {
        getBoundingClientRect: () => ({
          width: 0,
          height: 0,
          left: this.clientX,
          right: this.clientX,
          top: this.clientY,
          bottom: this.clientY
        }),
        clientHeight: 0,
        clientWidth: 0
      };
    } else {
      return ReactDOM.findDOMNode(this) as any;
    }
  }

  updatePopperRef() {
    this.setState({
      popperRef: this.getPopperRef()
    });
  }

  show() {
    if (this.state.dropdownVisible) return;

    this.setState({
      dropdownVisible: true,
      popperRef: this.getPopperRef()
    });
  }

  hide() {
    if (!this.state.dropdownVisible) return;

    this.setState({
      dropdownVisible: false
    });
  }

  toggle() {
    this.state.dropdownVisible ? this.hide() : this.show();
  }
}
