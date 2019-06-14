import React from "react";
import ReactDOM from "react-dom";
import { PopperTrigger, TriggerType } from "./PopperTrigger";
import { Placement } from "popper.js";
import { TooltipElement } from "./TooltipElement";

interface TooltipProps {
  children: React.ReactElement<any>;
  content: React.ReactNode;
  placement?: Placement;
  trigger?: TriggerType | TriggerType[];
}

export class Tooltip extends React.PureComponent<TooltipProps> {
  static defaultTrigger: TriggerType | TriggerType[] = "hover";

  popperRef?: HTMLElement | null;

  constructor(props: TooltipProps) {
    super(props);

    this.renderTooltipElement = this.renderTooltipElement.bind(this);
    this.setPopperRef = this.setPopperRef.bind(this);
  }

  render() {
    const trigger = this.props.trigger || Tooltip.defaultTrigger;

    return (
      <PopperTrigger ref={this.setPopperRef} trigger={trigger} content={this.renderTooltipElement}>
        {this.props.children}
      </PopperTrigger>
    );
  }

  renderTooltipElement() {
    if (!this.popperRef) return null;
    return (
      <TooltipElement popperRef={this.popperRef} placement={this.props.placement}>
        {this.props.content}
      </TooltipElement>
    );
  }

  setPopperRef(el: any | null) {
    this.popperRef = ReactDOM.findDOMNode(el) as any;
  }
}
