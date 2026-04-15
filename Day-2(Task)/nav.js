function nav() {
  const logo = React.createElement(
    "img",
    { src: "./assets/logo.png", alt: "logo", className: "logo" },
    null
  );

  const about = React.createElement(
    "a",
    { href: "#", className: "navLinks" },
    "About Me"
  );

  const portfolio = React.createElement(
    "a",
    { href: "#", className: "navLinks" },
    "Portfolio"
  );

  const services = React.createElement(
    "a",
    { href: "#", className: "navLinks" },
    "Services"
  );

  const blog = React.createElement(
    "a",
    { href: "#", className: "navLinks" },
    "Blog"
  );

  const leftNav = React.createElement("div", { className: "leftNav" }, [
    logo,
    about,
    portfolio,
    services,
    blog,
  ]);

  const bookACall = React.createElement(
    "a",
    { href: "#", className: "navRightLinks" },
    "Book A Call"
  );

  const arrow = React.createElement("i", {
    className: "ri-arrow-right-up-line",
  });

  const menu = React.createElement("i", { className: "ri-menu-4-line menu" });

  const rightNav = React.createElement("div", { className: "rightNav" }, [
    bookACall,
    arrow,
    menu,
  ]);

  const nav = React.createElement("div", { className: "nav" }, [
    leftNav,
    rightNav,
  ]);

  return nav;
}

export default nav;
