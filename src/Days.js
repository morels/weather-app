class Day {
  constructor(label) {
    this.label = {
      long: label,
      short: label.slice(0,3).toLowerCase()
    };
    this.url = label.toLowerCase();
  }
}

const Days = () => {
  return [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ].map(d => new Day(d));
};

export default Days();
