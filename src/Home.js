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

function Home() {
  return (
    <div className="App">
      <DaysAsBadges />
    </div>
  );
}

export default Home;
