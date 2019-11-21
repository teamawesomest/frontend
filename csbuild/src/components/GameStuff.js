import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
// import axios from "axios";

const GameStuff = props => {
  const [state, setState] = useState({});
  // const [state, setState] = useState({
  //   name: "",
  //   title: "",
  //   description: "",
  //   players: [],
  //   error_msg: ""
  // });

  useEffect(() => {
    axiosWithAuth()
      .get("https://cs-build-week-adventure-game.herokuapp.com/api/adv/init/")
      .then(res => {
        // console.log(response.data);
        console.log(res.data);
        setState(res.data);
        //   setState({
        //     name: res.data.name,
        //     title: res.data.title,
        //     description: res.data.description,
        //     // players: Array.from(res.data.players),
        //     // players: [state.players, ...res.data.players],
        //     players: Object.values(res.data.players),
        //     error_msg: res.data.error_msg
        //   });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const move = dir => {
    const move = {
      direction: dir
    };
    axiosWithAuth()
      .post(
        "https://cs-build-week-adventure-game.herokuapp.com/api/adv/move/",
        move
      )
      .then(res => {
        // console.log(response.data);
        console.log(res.data);
        setState(res.data);
        // setState({
        //   name: res.data.name,
        //   title: res.data.title,
        //   description: res.data.description,
        //   // players: Array.from(res.data.players),
        //   // players: [state.players, ...res.data.players],
        //   players: Object.values(res.data.players),
        //   error_msg: res.data.error_msg
        // });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="gamestuff">
      <div className="stats">
        <h3>Name</h3>
        <p>{state.name}</p>
        <h4>Room</h4>
        <p>{state.title}</p>
        <h5>Description</h5>
        <p>{state.description}</p>
        {/* {state.players.map(player => {
          return <p>{player}</p>;
        })} */}
        <h5>Players in room</h5>
        {console.log(`typeof state.players: ${typeof state.players}`)}
        <p>{state.players}</p>
      </div>

      <div className="game-container">
        <div className="placeholder"></div>
      </div>

      <div className="controls">
        <button onClick={() => move("n")}>Move North</button>
        <button onClick={() => move("e")}>Move East</button>
        <button onClick={() => move("s")}>Move South</button>
        <button onClick={() => move("w")}>Move West</button>
        <p>{state.error_msg}</p>
      </div>
    </div>
  );
};

export default GameStuff;
