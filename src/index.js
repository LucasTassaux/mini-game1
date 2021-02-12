import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "aframe";
import { Entity, Scene } from "aframe-react";
import { MainMenu } from "./components/MainMenu.js";
import { Game } from "./components/Game.js";
import { EndMenu } from "./components/EndMenu.js";
import {WinMenu} from "./components/WinMenu.js";

class App extends Component {
  state = {
    wichComponentToShow: "MainMenu",
  };

  componentDidMount() {
    window.addEventListener("Lost", (event) => {
      console.log(event);
      this.setState({ wichComponentToShow: "EndMenu" });
    });
  }

  startGame = () => {
    this.setState({ wichComponentToShow: "Game" });
  };

  winGame = () => {
    this.setState({ wichComponentToShow: "Win" });
  }

  render() {
    if (this.state.wichComponentToShow === "MainMenu") {
      return <MainMenu onClick={() => this.startGame()} />;
    } else if (this.state.wichComponentToShow === "Game") {
      return <Game onWin={() => this.winGame()} />;
    } else if (this.state.wichComponentToShow === "EndMenu") {
      return <EndMenu onClick={() => this.startGame()} />;
    } else if (this.state.wichComponentToShow === "Win") {
      return <WinMenu onClick={() => this.startGame()}/>;
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// class Game extends React.Component {

//   render() {
//     return (
//       <Scene id="scene">
//         <a-assets>
//           <img id="skyTexture" src="images/sky3.jpg" alt="sky" />
//           <a-mixin
//             id="cube"
//             rotation="0 45 45"
//             scale="0.3 0.3 0.3"
//           ></a-mixin>
//         </a-assets>

//         <Entity
//           primitive="a-sky"
//           height="2048"
//           radius="30"
//           src="#skyTexture"
//           theta-length="180"
//           width="2048"
//         />
//         <a-camera>
//         <a-cursor color="#FFFFFF" position="0 0 -1"></a-cursor>
//         </a-camera>
//       </Scene>
//     );
//   }
// }

// // ========================================
// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// function spawnCubes(nb) {
//   for (let i = 0; i < nb; i++) {
//     const z = -10;
//     let position;

//     var newCube = document.createElement("a-box");
//     position =
//       "" +
//       getRandomArbitrary(-1, 1).toString() +
//       " " +
//       getRandomArbitrary(-1, 1).toString() +
//       " " +
//       z.toString();
//     let delay = getRandomInt(5000).toString();

//     console.log(position);
//     newCube.setAttribute("id", i.toString());
//     newCube.setAttribute("mixin", "cube");
//     newCube.setAttribute("position", position );
//     newCube.setAttribute("color", "#4CC3D9");
//     newCube.setAttribute("animation", "property: object3D.position.z; to: 0; dur: 2000; delay:" + delay);
//     console.log(newCube);
//     let sceneEl = document.querySelector("a-scene");
//     sceneEl.appendChild(newCube);
//     let el = document.getElementById(i.toString());
//     el.addEventListener('mouseenter', function () {
//         el.setAttribute('visible', false);
//     });
//   }

//   // let value;
//   //let position ="" + this.getRandomArbitrary(-1,1).toString()+ " " + this.getRandomArbitrary(-1,1).toString() + " "+ z.toString();
//   // console.log(position);

//   // value=   <a-box mixin="cube" position={position} color="#4CC3D9"></a-box>

//   // console.log(value);

//   // return value;
// }

// ReactDOM.render(<Menu />, document.getElementById("root"));

// /* <a-box
//           color="#4CC3D9"
//           position="0 2 -5"
//           rotation="0 45 45"
//           scale="2 2 2"
//           animation__position="property: object3D.position.y; to: 2.2; dir: alternate; dur: 2000; loop: true"
//           animation__mouseenter="property: scale; to: 2.3 2.3 2.3; dur: 300; startEvents: mouseenter"
//           animation__mouseleave="property: scale; to: 2 2 2; dur: 300; startEvents: mouseleave"
//         ></a-box>

//         <Entity
//           text="value: Hello, A-Frame; color: #FAFAFA; width: 5; anchor: align"
//           position="-0.9 0.2 -3"
//           scale="1.5 1.5 1.5"
//         ></Entity> */
