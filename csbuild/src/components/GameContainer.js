import React from "react";
const GameContainer = props => {
  console.log("props: ", props);
  return (
    <div className="grid-container">
      {props.rooms.map(room => (
        <div
          className="room"
          key={room.id}
          // style={
          //   {
          //     // gridColumn: room.x
          //   }
          // }
        >
          <p>{room.title}</p>
          {props.current === room.title ? (
            <div className="player">{localStorage.getItem("username")}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

// const GameContainer = props => {
//   console.log("props: ", props);
//   return (
//     <div className="grid-container">
//       {props.rooms.map(room => (
//         <div
//           className="room"
//           key={room.id}
//           // style={
//           //   {
//           //     // gridColumn: room.x
//           //   }
//           // }
//         >
//           <p>{room.title}</p>
//           {props.current == room.title  (
//             <div className="player">{localStorage.getItem("username")}</div>
//           ) : null}
//         </div>
//       ))}
//     </div>
//   );
// };

export default GameContainer;
