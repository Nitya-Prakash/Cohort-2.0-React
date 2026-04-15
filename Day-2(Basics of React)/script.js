console.log(React);
console.log(ReactDOM);

import box from "./app.js";

// const h1 = React.createElement("h1", null, "This is h1.");
// console.log(h1); // You just can not log it like this here.
// In place of "null" you can give attributes to the elements, like id/class etc.

// You have to create a root element and everything you will create, those things should be put inside the root element. After that you can show them on the page.
var container = document.querySelector("#container");
const root = ReactDOM.createRoot(container);
// root.render(h1); // Now you can see the h1

// If you want to render multiple elements then you can not simply pass the elements with the help of comma(,). You can give only one element to the render.
// So you have to do like this -

// const h2 = React.createElement("h2", null, "This is h2.");
// const div = React.createElement("div", { class: "parent" }, [h1, h2]);
// root.render(div);
root.render(box());
