function rightDiv() {
  const heroImg = React.createElement("img", {
    src: "./assets/hero.png",
    alt: "Hero Img",
    className: "heroImg",
  });

  const rightDiv = React.createElement(
    "div",
    { className: "rightDiv" },
    heroImg
  );

  return rightDiv;
}

export default rightDiv;
