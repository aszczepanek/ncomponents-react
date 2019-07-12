import React from "react";
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

export class Dropdown<TItem> extends React.Component<
  DropdownProps<TItem>,
  DropdownState
> {
  static defaultPlacement: Placement = "bottom-start";

  childRef = React.createRef<HTMLElement>();
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
    }
  }

  render() {
    const child = React.Children.only(this.props.children);
    const newChild = React.cloneElement(child, this.getWrappedElementAttrs());
    const dropdownView = this.renderDropdownView();

    return (
      <>
        {newChild}
        {dropdownView}
      </>
    );
  }

  renderDropdownView() {
    if (!this.state.dropdownVisible) return undefined;

    const placement = this.props.placement || Dropdown.defaultPlacement;

    return (
      <DropdownView
        items={this.props.items}
        placement={placement}
        popoverRef={this.state.popperRef!}
        onSelect={this.props.onSelect}
        onOutsideClick={this.hide}
        display={this.props.display}
        renderInBody={this.props.renderInBody}
        renderDisplay={this.props.renderDisplay}
        renderItem={this.props.renderItem}
      />
    );
  }

  getWrappedElementAttrs(): React.DOMAttributes<any> & React.RefAttributes<any> {
    let result: React.DOMAttributes<any> & React.RefAttributes<any> = {
      ref: this.childRef
    };

    if (this.props.contextMenu) {
      result.onContextMenu = this.onContextmenu;
      result.onMouseMove = this.onMousemove;
    }
    else {
      result.onClick = this.onClick;
    };

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
    }
    else {
      this.show();
    }
  }

  onMousemove(ev: React.MouseEvent) {
    this.clientX = ev.clientX;
    this.clientY = ev.clientY;
  }

  getPopperRef(): HTMLElement | ReferenceObject {
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
      return this.childRef.current!;
    }
  }

  updatePopperRef() {
    this.setState({
      popperRef: this.getPopperRef()
    })
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
