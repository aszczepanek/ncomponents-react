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

  popperTriggerRef = React.createRef<PopperTrigger>();

  constructor(props: PopoverProps) {
    super(props);

    this.renderPopoverElement = this.renderPopoverElement.bind(this);
  }

  render() {
    const trigger = this.props.trigger || Popover.defaultTrigger;

    return (
      <PopperTrigger
        ref={this.popperTriggerRef}
        trigger={trigger}
        content={this.renderPopoverElement}
        closeOnDocumentClick
      >
        {this.props.children}
      </PopperTrigger>
    );
  }

  renderPopoverElement() {
    if (!this.popperTriggerRef.current) return null;

    const popperRef = ReactDOM.findDOMNode(this.popperTriggerRef.current) as any;
    if (!popperRef) return null;

    return (
      <PopoverElement
        popperRef={popperRef}
        placement={this.props.placement}
        header={this.props.header}
      >
        {this.props.content}
      </PopoverElement>
    );
  }
}
