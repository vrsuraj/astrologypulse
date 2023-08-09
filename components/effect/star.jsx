// star.js
import React, { Component } from "react";

class Star {
  constructor(parent) {
    this.parent = parent;
    this.star = document.createElement("div");
    this.init();
  }

  init() {
    const size = Math.random() * 5;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const animationDuration = Math.random() * 10 + 2;
    this.star.style.position = "absolute";
    // this.star.style.zIndex = 0;
    this.star.style.width = `${size}px`;
    this.star.style.height = `${size}px`;
    this.star.style.left = `${left}%`;
    this.star.style.top = `${top}%`;
    this.star.style.animationDuration = `${animationDuration}s`;
    this.star.style.backgroundColor = "#fff";
    this.star.style.borderRadius = "50%";
    this.star.style.boxShadow = "0 0 2px rgba(0, 0, 0, 0.5)";
    this.star.style.animation = `sparkle ${animationDuration}s linear infinite`;
    this.parent.appendChild(this.star);
  }
}

class StarEffect extends Component {
  componentDidMount() {
    for (let i = 0; i < 40; i++) {
      new Star(this.refs.background);
    }
  }

  render() {
    return (
      <>
        <style jsx>
          {`
            @keyframes sparkle {
              0%,
              100% {
                opacity: 0;
                transform: scale(0);
              }
              50% {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}
        </style>
        <div
          ref="background"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            // overflow: "hidden",
            zIndex: -1,
          }}
        ></div>
      </>
    );
  }
}

export default StarEffect;
