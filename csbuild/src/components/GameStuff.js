import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

import GameContainer from "./GameContainer";

const GameStuff = props => {
  // const [state, setState] = useState({});
  const [state, setState] = useState({
    name: "",
    // room_id: "",
    title: "",
    description: "",
    players: [],
    error_msg: ""
  });
  // const [rooms, setRooms] = useState();
  const [rooms, setRooms] = useState([
    {
      id: 1,
      title: "placeholder",
      description: "placeholder",
      n_to: 0,
      s_to: 0,
      e_to: 0,
      w_to: 0,
      x: 0,
      y: 0
    }
  ]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://cs-build-week-adventure-game.herokuapp.com/api/adv/init/")
      .then(res => {
        console.log(res.data);
        setState(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    axiosWithAuth()
      .get("https://cs-build-week-adventure-game.herokuapp.com/api/adv/rooms")
      .then(response => {
        console.log("response.data: ", response.data);
        const roomsDict = response.data.rooms;
        let arr = [];
        for (let r in roomsDict) {
          let disRoom = {
            ...roomsDict[r],
            id: r
          };
          arr.push(disRoom);
        }
        setRooms(arr);
      })
      .catch(error => {
        console.log("error: ", error);
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
        console.log(res.data);
        setState(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="gamestuff">
      <GameContainer rooms={rooms} current={state.title} />

      <div className="stats">
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

      <div className="controls">
        <div className="controls-top">
          <button onClick={() => move("n")}>Move North</button>
        </div>
        <div className="controls-middle">
          <button onClick={() => move("w")}>Move West</button>
          <button onClick={() => move("e")}>Move East</button>
        </div>
        <div className="controls-bottom">
          <button onClick={() => move("s")}>Move South</button>
        </div>
        <p>{state.error_msg}</p>
      </div>
    </div>
  );
};

export default GameStuff;
