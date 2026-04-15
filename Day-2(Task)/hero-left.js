function leftHero() {
  const occupation = React.createElement(
    "p",
    { className: "occupation" },
    "Product designer"
  );

  const line = React.createElement("div", { className: "line" });

  const year = React.createElement("p", { className: "year" }, "2024");

  const leftDiv1 = React.createElement("div", { className: "leftDiv1" }, [
    occupation,
    line,
    year,
  ]);

  const leftH1 = React.createElement("h1", { className: "headingH1" }, "200+");
  const leftH3 = React.createElement(
    "h3",
    { className: "headingH3" },
    "Project completed"
  );

  const leftTop = React.createElement("div", { className: "topSections" }, [
    leftH1,
    leftH3,
  ]);

  const rightH1 = React.createElement("h1", { className: "headingH1" }, "50+");
  const rightH3 = React.createElement(
    "h3",
    { className: "headingH3" },
    "Startup raised"
  );

  const rightTop = React.createElement("div", { className: "topSections" }, [
    rightH1,
    rightH3,
  ]);

  const top = React.createElement("div", { className: "top" }, [
    leftTop,
    rightTop,
  ]);

  const middleH1 = React.createElement(
    "h1",
    { className: "middleH1" },
    "Hello"
  );

  const middleH3 = React.createElement(
    "h3",
    { className: "middleH3" },
    "- It's D.Nova a design wizerd"
  );

  const middle = React.createElement("div", { className: "middle" }, [
    middleH1,
    middleH3,
  ]);

  const btmH3 = React.createElement(
    "h3",
    { className: "btmH3" },
    "Scroll down"
  );

  const arrowDown = React.createElement("i", {
    className: "ri-arrow-down-line",
  });

  const btm = React.createElement("div", { className: "btm" }, [
    btmH3,
    arrowDown,
  ]);

  const leftDiv2 = React.createElement("div", { className: "leftDiv2" }, [
    top,
    middle,
    btm,
  ]);

  const leftDiv = React.createElement("div", { className: "leftDiv" }, [
    leftDiv1,
    leftDiv2,
  ]);

  return leftDiv;
}

export default leftHero;
