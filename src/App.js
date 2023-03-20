import React from "react";
//import {useState} from "react";
import "./styles.css";

const arr = new Array(101).fill("");
const map1 = arr.map((d, i) => i);
const filtered = map1.filter((d, i) => d % 2 === 0);
console.log(filtered);
const millsInDay = 1000 * 60 * 60 * 24;

const dateArr = filtered.map((evenNumber) => {
  const today = new Date();
  const diffInMill = evenNumber * millsInDay;
  const dateInMill = today.getTime() - diffInMill;
  return new Date(dateInMill);
});

console.log(dateArr);

const randomValues = dateArr.map((date) => ({
  date,
  val: Math.floor(Math.random() * 51)
}));

console.log(randomValues);

function App() {
  //const [state, setState] = useState();
  return (
    <div className="App">
      {randomValues.map(function (d, i) {
        return (
          <div
            style={{
              position: "absolute",
              left: i * 25,
              top: window.innerHeight * 0.45 - d.val,
              width: "10px",
              height: "10px",
              background: "#ff00ff",
              borderRadius: "50%"
            }} /*onClick={function (event){setState(d.val)}}*/
          ></div>
        );
      })}
    </div>
  );
}
//{randomValues.map((d, i)=>{})}
export default App;
