import nav from "./nav.js";
import hero from "./hero.js";
// import leftHero from "./hero-left.js";
// import rightDiv from "./hero-right.js";

const div = React.createElement("div", { className: "main" }, [nav(), hero()]);
const wrapper = document.querySelector("#root");
const root = ReactDOM.createRoot(wrapper);

root.render(div);
