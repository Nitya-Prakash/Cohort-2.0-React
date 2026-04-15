import leftHero from "./hero-left.js";
import rightHero from "./hero-right.js";

function hero() {
  return React.createElement("div", { className: "hero" }, [
    leftHero(),
    rightHero(),
  ]);
}

export default hero;
