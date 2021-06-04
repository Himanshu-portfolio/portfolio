import React, { Component } from "react";
import { init } from "ityped";

export default class Hello extends Component {
  componentDidMount() {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      strings: ["Full Stack Developer", "Web Developer", "UI/UX Designer", 'I am From India']
    });
  }
  render() {
    return <div id="myElement"></div>;
  }
}
