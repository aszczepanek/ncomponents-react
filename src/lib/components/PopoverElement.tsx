import React from "react";
import Popper, { Placement, ReferenceObject } from "popper.js";
import { domEventHelpers } from "../utils/domEventHelpers";

interface PopoverElementProps {
  children: React.ReactNode;
  popperRef: HTMLElement | ReferenceObject;
  placement?: Placement;
  header?: React.ReactNode;
}

export class PopoverElement extends React.PureComponent<PopoverElementProps> {
  static defaultPlacement: Placement = "auto";

  popper?: Popper;
  popoverRef = React.createRef<HTMLDivElement>();

  render() {
    const { header } = this.props;

    return (
      <div className="n-popover" ref={this.popoverRef} onClick={domEventHelpers.stopPropagation}>
        {header && <div className="n-popover-header">{header}</div>}
        <div className="n-popover-content">{this.props.children}</div>
        <span className="n-arrow" />
      </div>
    );
  }

  componentDidMount() {
    this.createPopper();
  }

  componentDidUpdate(prevProps: PopoverElementProps) {
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

    if (!this.popoverRef.current) return;

    this.popper = new Popper(this.props.popperRef, this.popoverRef.current, {
      placement: this.props.placement || PopoverElement.defaultPlacement,
      modifiers: {
        arrow: {
          enabled: true,
          element: "n-arrow"
        }
      }
    });
  }

  destroyPopper() {
    if (this.popper) {
      this.popper.destroy();
    }
  }
}
