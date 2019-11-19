import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import axios from "axios";

const GameStuff = props => {
  const [state, setState] = useState([]);
  const gameInfo = () => {
    let config = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    };
    const token = localStorage.getItem("token");
    console.log("test", token);

    axiosWithAuth()
      .get("https://cs-build-week-adventure-game.herokuapp.com/api/adv/init/")
      .then(response => {
        console.log(response.data);
        setState(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const moveNorth = () => {
    const move = {
      direction: "n"
    };
    axiosWithAuth()
      .post(
        "https://cs-build-week-adventure-game.herokuapp.com/api/adv/move/",
        move
      )
      .then(response => {
        console.log(response.data);
        setState(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const moveEast = () => {
    const move = {
      direction: "e"
    };
    axiosWithAuth()
      .post(
        "https://cs-build-week-adventure-game.herokuapp.com/api/adv/move/",
        move
      )
      .then(response => {
        console.log(response.data);
        setState(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const moveSouth = () => {
    const move = {
      direction: "s"
    };
    axiosWithAuth()
      .post(
        "https://cs-build-week-adventure-game.herokuapp.com/api/adv/move/",
        move
      )
      .then(response => {
        console.log(response.data);
        setState(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const moveWest = () => {
    const move = {
      direction: "w"
    };
    axiosWithAuth()
      .post(
        "https://cs-build-week-adventure-game.herokuapp.com/api/adv/move/",
        move
      )
      .then(response => {
        console.log(response.data);
        setState(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <p>This is the game stuff, suckaz</p>
      <p>{state.name}</p>
      <p>{state.title}</p>
      <p>{state.description}</p>
      <p>{state.players}</p>
      <button onClick={gameInfo}>Click for info</button>
      <button onClick={moveNorth}>Move North</button>
      <button onClick={moveEast}>Move East</button>
      <button onClick={moveSouth}>Move South</button>
      <button onClick={moveWest}>Move West</button>
    </div>
  );
};

export default GameStuff;
