import React from "react";
import ReactDOM from "react-dom";
import { PopperTrigger, TriggerType } from "./PopperTrigger";
import { Placement } from "popper.js";
import { TooltipElement } from "./TooltipElement";
import { getBodyPortal } from "../utils/reactHelpers";

interface TooltipProps {
  children: React.ReactChild;
  content: React.ReactNode;
  placement?: Placement;
  trigger?: TriggerType | TriggerType[];
  disabled?: boolean;
}

interface TooltipState {
  popperRef?: HTMLElement;
}

export class Tooltip extends React.Component<TooltipProps, TooltipState> {
  static defaultTrigger: TriggerType | TriggerType[] = "hover";

  constructor(props: TooltipProps) {
    super(props);

    this.renderTooltipElement = this.renderTooltipElement.bind(this);
    this.updatePopperTriggerRef = this.updatePopperTriggerRef.bind(this);

    this.state = {};
  }

  render() {
    const trigger = this.props.trigger || Tooltip.defaultTrigger;

    return (
      <PopperTrigger
        ref={this.updatePopperTriggerRef}
        trigger={trigger}
        content={this.renderTooltipElement}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </PopperTrigger>
    );
  }

  renderTooltipElement() {
    if (!this.state.popperRef) return null;

    return ReactDOM.createPortal(
      <TooltipElement popperRef={this.state.popperRef} placement={this.props.placement}>
        {this.props.content}
      </TooltipElement>,
      getBodyPortal()
    );
  }

  updatePopperTriggerRef(instance: PopperTrigger | null) {
    this.setState({
      popperRef: ReactDOM.findDOMNode(instance) as any,
    });
  }
}
