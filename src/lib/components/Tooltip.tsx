import React from "react";
import ReactDOM from "react-dom";
import { PopperTrigger, TriggerType } from "./PopperTrigger";
import { Placement } from "popper.js";
import { TooltipElement } from "./TooltipElement";

interface TooltipProps {
  children: React.ReactChild;
  content: React.ReactNode;
  placement?: Placement;
  trigger?: TriggerType | TriggerType[];
}

export class Tooltip extends React.PureComponent<TooltipProps> {
  static defaultTrigger: TriggerType | TriggerType[] = "hover";

  popperTriggerRef = React.createRef<PopperTrigger>();

  constructor(props: TooltipProps) {
    super(props);

    this.renderTooltipElement = this.renderTooltipElement.bind(this);
  }

  render() {
    const trigger = this.props.trigger || Tooltip.defaultTrigger;

    return (
      <PopperTrigger
        ref={this.popperTriggerRef}
        trigger={trigger}
        content={this.renderTooltipElement}
      >
        {this.props.children}
      </PopperTrigger>
    );
  }

  renderTooltipElement() {
    if (!this.popperTriggerRef.current) return null;

    const popperRef = ReactDOM.findDOMNode(this.popperTriggerRef.current) as any;
    if (!popperRef) return null;

    return (
      <TooltipElement popperRef={popperRef} placement={this.props.placement}>
        {this.props.content}
      </TooltipElement>
    );
  }
}
