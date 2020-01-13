import React from "react";

const DayBadge = title => {
  return (
    <div>
      <div className="title">{title}</div>
      <div className="temperature">
        <div className="min">20°</div>
        <div className="max">30°</div>
      </div>
    </div>
  );
};

export default class DayBadgeFactory {
  static create = day => {
    return DayBadge(day.label.short);
  };
}
