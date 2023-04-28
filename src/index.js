import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const element1 = React.createElement(
  "h1",
  { className: "heading" },
  "Learn web development"
);
const element2 = React.createElement(
  "p",
  { className: "para" },
  "Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites."
);
const element3 = React.createElement(
  "p",
  { className: "para" },
  "The aim of this area of MDN is not to take you from beginner to expert but to take you from beginner to comfortable. From there, you should be able to start making your way, learning from the rest of MDN and other intermediate to advanced resources that assume a lot of previous knowledge."
);
const element4 = React.createElement(
  "p",
  { className: "para" },
  "If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work."
);

ReactDOM.render(
  <div className="app">
    {element1}
    {element2}
    {element3}
    {element4}
  </div>,
  document.getElementById("root")
);
