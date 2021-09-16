import LegendItem from "./LegendItem";

const legendItems = [
  new LegendItem(
    "30,000,000 +",
    "#f0004d",
    (cases) => cases >= 30_000_000,
    "white"
  ),
  new LegendItem(
    "10,000,000 - 29,999,999",
    "#e42971",
    (cases) => cases >= 10_000_000 && cases < 30_000_000,
    "white"
  ),
  new LegendItem(
    "5,000,000 - 9,999,999",
    "#8d3168",
    (cases) => cases >= 5_000_000 && cases < 10_000_000,
    "white"
  ),
  new LegendItem(
    "1,000,000 - 4,999,999",
    "#662d6b",
    (cases) => cases >= 1_000_000 && cases < 5_000_000,
    "white"
  ),
  new LegendItem(
    "500,000 - 999,999",
    "#4c2a6d",
    (cases) => cases > 500_000 && cases < 1_000_000,
    "white"
  ),
  new LegendItem(
    "100,000 - 499,999",
    "#33286f",
    (cases) => cases > 100_000 && cases < 500_000,
    "white"
  ),
  new LegendItem(
    "50,000 - 99,999",
    "#1d2671",
    (cases) => cases > 50_000 && cases < 100_000,
    "white"
  ),

  new LegendItem("0 - 49,999", "#298be4", (cases) => true),
];

export default legendItems;
