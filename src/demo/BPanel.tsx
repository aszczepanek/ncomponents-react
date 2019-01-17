import React, { ReactNode, StatelessComponent } from "react";

interface BPanelProps {
  header: string | ReactNode;
}

export const BPanel: StatelessComponent<BPanelProps> = props => {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{props.header}</h3>
      </div>
      <div className="panel-body">{props.children}</div>
    </div>
  );
};
