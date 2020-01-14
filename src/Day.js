import React from "react";

export default class Day extends React.Component {
  constructor(props) {
    super(props);
    this.day = props.match.params.dayname;
  }

  render() {
    return <div>This is my component. {this.day}</div>;
  }
}
