import React from "react";
import Popper, { Placement, ReferenceObject } from "popper.js";

interface TooltipElementProps {
  children: React.ReactNode;
  popperRef: HTMLElement | ReferenceObject;
  placement?: Placement;
}

export class TooltipElement extends React.PureComponent<TooltipElementProps> {
  static rootClassName = "n-tooltip";
  static arrowClassName = "n-arrow";
  static defaultPlacement: Placement = "auto";

  popper?: Popper;
  tooltipRef = React.createRef<HTMLDivElement>();

  render() {
    return (
      <div className={TooltipElement.rootClassName} ref={this.tooltipRef}>
        {this.props.children}
        <span className={TooltipElement.arrowClassName} />
      </div>
    );
  }

  componentDidMount() {
    this.createPopper();
  }

  componentDidUpdate(prevProps: TooltipElementProps) {
    if (this.props.popperRef != prevProps.popperRef) {
      this.createPopper();
    }

    this.popper && this.popper.update();
  }

  componentWillUnmount() {
    this.destroyPopper();
  }

  createPopper() {
    this.destroyPopper();

    if (!this.tooltipRef.current) return;

    this.popper = new Popper(this.props.popperRef, this.tooltipRef.current, {
      placement: this.props.placement || TooltipElement.defaultPlacement,
      modifiers: {
        arrow: {
          enabled: true,
          element: "n-arrow"
        }
      }
    });
    this.popper.scheduleUpdate();
  }

  destroyPopper() {
    if (this.popper) {
      this.popper.destroy();
    }
  }
}
