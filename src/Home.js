import React from "react";
import days from "./Days";
import DayBadgeFactory from "./DayBadgeFactory";

const DaysAsBadges = () => {
  return (
    <div>
      {days.map((d, i) => {
        return DayBadgeFactory.create(d);
      })}
    </div>
  );
};

const CITY_QUERY = "id=6541464";
const BASE_QUERY = "/data/2.5/forecast?APPID=a2c2f13c050afafccb4c319002ce1ece";
const QUERY = `${BASE_QUERY}&${CITY_QUERY}`;
// const CITY_QUERY = "q=alessandria,it";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, data: {} };
  }

  componentDidMount(state, props) {
    this.setState({ loading: true });
    fetch(QUERY, { method: "GET" })
      .then(response => response.json())
      .then(data => {
        this.setState({ loading: false, data: data });
      });
  }
  render() {
    return (
      <div className="App">
        <DaysAsBadges />
      </div>
    );
  }
}
