import React from "react";
import ReactDOM from "react-dom";
import { PopperTrigger, TriggerType } from "./PopperTrigger";
import { Placement } from "popper.js";
import { PopoverElement } from "./PopoverElement";
import { getBodyPortal } from "../utils/reactHelpers";

interface PopoverProps {
  children: React.ReactElement<any>;
  header?: React.ReactNode;
  content: React.ReactNode;
  placement?: Placement;
  trigger?: TriggerType | TriggerType[];
  disabled?: boolean;
  renderInBody?: boolean;
}

interface PopoverState {
  popperRef?: HTMLElement;
}

export class Popover extends React.PureComponent<PopoverProps, PopoverState> {
  static defaultTrigger: TriggerType | TriggerType[] = "click";
  static defaultRenderInBody = true;

  constructor(props: PopoverProps) {
    super(props);

    this.renderPopoverElement = this.renderPopoverElement.bind(this);
    this.updatePopperTriggerRef = this.updatePopperTriggerRef.bind(this);

    this.state = {};
  }

  render() {
    const trigger = this.props.trigger || Popover.defaultTrigger;

    return (
      <PopperTrigger
        ref={this.updatePopperTriggerRef}
        trigger={trigger}
        content={this.renderPopoverElement}
        disabled={this.props.disabled}
        closeOnDocumentClick
      >
        {this.props.children}
      </PopperTrigger>
    );
  }

  renderPopoverElement() {
    if (!this.state.popperRef) return null;
    const renderInBody = this.props.hasOwnProperty("renderInBody")
      ? this.props.renderInBody
      : Popover.defaultRenderInBody;

    const popoverElement = (
      <PopoverElement popperRef={this.state.popperRef} placement={this.props.placement} header={this.props.header}>
        {this.props.content}
      </PopoverElement>
    );

    return renderInBody ? ReactDOM.createPortal(popoverElement, getBodyPortal()) : popoverElement;
  }

  updatePopperTriggerRef(instance: PopperTrigger | null) {
    this.setState({
      popperRef: ReactDOM.findDOMNode(instance) as any,
    });
  }
}
