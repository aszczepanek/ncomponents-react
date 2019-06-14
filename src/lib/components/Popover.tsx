import React from "react";
import ReactDOM from "react-dom";
import { PopperTrigger, TriggerType } from "./PopperTrigger";
import { Placement } from "popper.js";
import { PopoverElement } from "./PopoverElement";

interface PopoverProps {
  children: React.ReactElement<any>;
  header?: React.ReactNode;
  content: React.ReactNode;
  placement?: Placement;
  trigger?: TriggerType | TriggerType[];
}

export class Popover extends React.PureComponent<PopoverProps> {
  static defaultTrigger: TriggerType | TriggerType[] = "click";

  popperRef?: HTMLElement | null;

  constructor(props: PopoverProps) {
    super(props);

    this.renderPopoverElement = this.renderPopoverElement.bind(this);
    this.setPopperRef = this.setPopperRef.bind(this);
  }

  render() {
    const trigger = this.props.trigger || Popover.defaultTrigger;

    return (
      <PopperTrigger
        ref={this.setPopperRef}
        trigger={trigger}
        content={this.renderPopoverElement}
        closeOnDocumentClick
      >
        {this.props.children}
      </PopperTrigger>
    );
  }

  renderPopoverElement() {
    if (!this.popperRef) return null;
    return (
      <PopoverElement
        popperRef={this.popperRef}
        placement={this.props.placement}
        header={this.props.header}
      >
        {this.props.content}
      </PopoverElement>
    );
  }

  setPopperRef(el: any | null) {
    this.popperRef = ReactDOM.findDOMNode(el) as any;
  }
}
