import React, { cloneElement } from "react";

export type TriggerType = "hover" | "click" | "focus";

interface PopperTriggerProps {
  children: React.ReactChild;
  trigger: TriggerType | TriggerType[];
  content: React.ReactNode | (() => React.ReactNode);
  closeOnDocumentClick?: boolean;
  disabled?: boolean;
}

interface PopperTriggerState {
  show: boolean;
}

export class PopperTrigger extends React.Component<PopperTriggerProps, PopperTriggerState> {
  constructor(props: PopperTriggerProps) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);

    this.state = {
      show: false
    };
  }

  render() {
    const { trigger, disabled } = this.props;
    
    const { show } = this.state;
    const child = this.getChildAsElement();
    const triggers = normalizeTriggers(trigger);
    const triggerProps: React.HTMLAttributes<HTMLElement> = {};

    if (triggers.indexOf("click") >= 0) {
      triggerProps.onClick = this.handleClick;
    }

    if (triggers.indexOf("hover") >= 0) {
      triggerProps.onMouseOver = this.handleMouseOver;
      triggerProps.onMouseOut = this.handleMouseOut;
    }

    if (triggers.indexOf("focus") >= 0) {
      triggerProps.onFocus = this.handleFocus;
      triggerProps.onBlur = this.handleBlur;
    }

    return (
      <>
        {cloneElement(child, triggerProps)}
        {show && !disabled && this.renderContent()}
      </>
    );
  }

  renderContent() {
    const content = this.props.content;

    if (typeof content === "function") {
      return (content as any)();
    } else {
      return content;
    }
  }

  hide() {
    this.setState({ show: false });
  }

  show() {
    this.setState({ show: true });
  }

  toggle() {
    this.state.show ? this.hide() : this.show();
  }

  componentDidMount() {
    if (this.props.closeOnDocumentClick) {
      document.addEventListener("click", this.handleDocumentClick);
    }
  }

  componentWillUnmount() {
    if (this.props.closeOnDocumentClick) {
      document.removeEventListener("click", this.handleDocumentClick);
    }
  }

  private handleDocumentClick() {
    this.hide();
  }

  private handleClick(ev: React.MouseEvent<any>) {
    this.toggle();
    ev.nativeEvent.stopImmediatePropagation();

    const { onClick } = this.getChildProps();
    onClick && onClick(ev);
  }

  private handleMouseOver(ev: React.MouseEvent<any>) {
    this.show();

    const { onMouseOver } = this.getChildProps();
    onMouseOver && onMouseOver(ev);
  }

  private handleMouseOut(ev: React.MouseEvent<any>) {
    this.hide();

    const { onMouseOut } = this.getChildProps();
    onMouseOut && onMouseOut(ev);
  }

  private handleFocus(ev: React.FocusEvent<any>) {
    this.show();

    const { onFocus } = this.getChildProps();
    onFocus && onFocus(ev);
  }

  private handleBlur(ev: React.FocusEvent<any>) {
    this.hide();

    const { onBlur } = this.getChildProps();
    onBlur && onBlur(ev);
  }

  private getChildAsElement(): React.ReactElement {
    return typeof this.props.children === "object" ? (
      (React.Children.only(this.props.children) as React.ReactElement)
    ) : (
      <span>{this.props.children}</span>
    );
  }

  private getChildProps(): React.HTMLAttributes<HTMLElement> {
    return this.getChildAsElement().props;
  }
}

function normalizeTriggers(trigger: TriggerType | TriggerType[]) {
  return Array.isArray(trigger) ? trigger : [trigger];
}
