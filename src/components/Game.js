import React, { Component } from "react";
import ReactDOM from "react-dom";
import "aframe";
import { Entity, Scene } from "aframe-react";
import "../index.css";

export class Game extends React.Component {

  constructor(props) {
    super(props);
    let intervalCubes;
    let winTimeout;
  }


  componentWillUnmount() {
    clearInterval(this.intervalCubes); 
    clearTimeout(this.winTimeout);
  }
  
  componentDidMount() {

    this.winTimeout = setTimeout(() => {
      clearInterval(this.intervalCubes);
      setTimeout(() => {
        this.props.onWin();
      }, 2000);
    }, 20000);

    setTimeout(() => {
      let sceneEl = document.querySelector("a-scene");
      sceneEl.removeChild(document.getElementById("text1"));
      sceneEl.removeChild(document.getElementById("text2"));
      sceneEl.removeChild(document.getElementById("text3"));
      // this.spawnCube();
      this.intervalCubes = setInterval(this.spawnCube, 500);
      
      // this.intervalCubes = setInterval(this.spawnCube, 500);
    },5000);


    



    // spawnCubes(10);
    //this.spawnCube();
    
  }

  spawnCube() {
    const z = -10;
    let position;

    var newCube = document.createElement("a-box");
    position =
      "" +
      getRandomArbitrary(-1, 1).toString() +
      " " +
      getRandomArbitrary(1, 2).toString() +
      " " +
      z.toString();
    let delay = getRandomInt(0).toString();

    // newCube.setAttribute("id", this.state.indexCube.toString());
    let sceneEl = document.querySelector("a-scene");
    newCube.setAttribute("mixin", "cube");
    newCube.setAttribute("position", position);
    newCube.setAttribute("material", "color: blue");
    newCube.setAttribute(
      "animation",
      "property: object3D.position.z; to: 1; dur: 2000; delay:" + delay
    );
    newCube.setAttribute(
      "animation__2",
      "property: components.material.material.color; type: color; to: red; dur: 2000; dir: alternate"
    );
    newCube.addEventListener("click", function () {
      //newCube.setAttribute('visible', false);
      sceneEl.removeChild(newCube);
    });

    newCube.addEventListener("animationcomplete", function (event) {
      clearTimeout(this.newTimeout);
      newCube.emit("Lost", {}, true);
    });

    sceneEl.appendChild(newCube);
  }

  render() {
    return (
      <Scene id="scene" cursor="rayOrigin:mouse">
        <a-assets>
          <img id="skyTexture" src="images/sky3.jpg" alt="sky" />
          <a-mixin id="cube" rotation="0 45 45" scale="0.3 0.3 0.3"></a-mixin>
        </a-assets>

        <Entity
          primitive="a-sky"
          height="2048"
          radius="30"
          src="#skyTexture"
          theta-length="180"
          width="2048"
        />

        <a-text
          id="text1"
          value="3"
          scale="2 2 2"
          position="0 2 -4"
          visible="false"
          animation="property: visible; from:false; to:true; dir:alternate dur:1000; delay:1000"
          animation__2="property: opacity; from:1; to:0; dir:alternate dur:1000; delay:2000"
        ></a-text>
        <a-text
          id="text2"
          value="2"
          scale="2 2 2"
          position="0 2 -4"
          visible="false"
          animation="property: visible; from:false; to:true; dir:alternate dur:1000; delay:2000"
          animation__2="property: opacity; from:1; to:0; dir:alternate dur:1000; delay:3000"
        ></a-text>
        <a-text
          id="text3"
          value="1"
          scale="2 2 2"
          position="0 2 -4"
          visible="false"
          animation="property: visible; from:false; to:true; dir:alternate dur:1000; delay:3000"
          animation__2="property: opacity; from:1; to:0; dir:alternate dur:1000; delay:4000"
        ></a-text>

        <a-camera look-controls-enabled="false"></a-camera>
      </Scene>
    );
  }
}

// ========================================
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// <a-plane id="plane" height="5" width="5" color="red" position="0 0 0.1" rotation="0 0 0" />

// function spawnCubes(nb) {
//   for (let i = 0; i < nb; i++) {
//     const z = -10;
//     let position;

//     var newCube = document.createElement("a-box");
//     position =
//       "" +
//       getRandomArbitrary(-1, 1).toString() +
//       " " +
//       getRandomArbitrary(1, 2).toString() +
//       " " +
//       z.toString();
//     let delay = getRandomInt(5000).toString();

//     newCube.setAttribute("id", i.toString());
//     newCube.setAttribute("mixin", "cube");
//     newCube.setAttribute("position", position );
//     newCube.setAttribute("color", "#4CC3D9");
//     newCube.setAttribute("animation", "property: object3D.position.z; to: 0; dur: 5000; delay:" + delay);
//     console.log(newCube);
//     let sceneEl = document.querySelector("a-scene");
//     sceneEl.appendChild(newCube);
//     let el = document.getElementById(i.toString());
//     el.addEventListener('click', function () {
//         el.setAttribute('visible', false);
//     });
//   }

// let value;
//let position ="" + this.getRandomArbitrary(-1,1).toString()+ " " + this.getRandomArbitrary(-1,1).toString() + " "+ z.toString();
// console.log(position);

// value=   <a-box mixin="cube" position={position} color="#4CC3D9"></a-box>

// console.log(value);

// return value;

//

//}
