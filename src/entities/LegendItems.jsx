import LegendItem from "./LegendItem";

const legendItems = [
  new LegendItem(
    "30,000,000 +",
    "#ff5d00",
    (cases) => cases >= 30_000_000,
    "white"
  ),
  new LegendItem(
    "10,000,000 - 29,999,999",
    "#ff7e33",
    (cases) => cases >= 10_000_000 && cases < 30_000_000,
    "white"
  ),
  new LegendItem(
    "5,000,000 - 9,999,999",
    "#ff9a5f",
    (cases) => cases >= 5_000_000 && cases < 10_000_000,
    "white"
  ),
  new LegendItem(
    "1,000,000 - 4,999,999",
    "#ffb68b",
    (cases) => cases >= 1_000_000 && cases < 5_000_000
  ),
  new LegendItem(
    "500,000 - 999,999",
    "#ffd0b4",
    (cases) => cases > 500_000 && cases < 1_000_000
  ),
  new LegendItem(
    "100,000 - 499,999",
    "#ffe0cd",
    (cases) => cases > 100_000 && cases < 500_000
  ),
  new LegendItem(
    "50,000 - 99,999",
    "#ffeee3",
    (cases) => cases > 50_000 && cases < 100_000
  ),

  new LegendItem("0 - 49,999", "#ecebea", (cases) => true),
];

export default legendItems;
