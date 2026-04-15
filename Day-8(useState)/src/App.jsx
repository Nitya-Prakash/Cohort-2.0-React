// useState -
// State management - Aap state ko manage kar sakte ho matlba, agar "a" ki value 0 hai and after a click the value a becomes 1 then the state of "a" is chnaged (from previous state to present state). This is called state management. As you can not talk directly to your browser's DOM, so you have to go through react to perform operations smoothly.

// For example you can not do this -
// You can see that the value of "a" is not changing in the browser.

import React, { useState } from "react";
import VoterId from "./components/VoterId";

// const App = () => {
//   let a = 0;

//   function btnClicked() {
//     a++;
//     console.log(a)
//   }
//   return (
//     <div className='p-10'>
//       <h1 className='text-5xl'>{a}</h1>
//       <button onClick={btnClicked} className='px-7 py-3 bg-green-500 rounded text-2xl cursor-pointer active:scale-95 mt-3'>Click</button>
//     </div>
//   )
// }

// export default App

// So if you want to change the value in the browser, then you have to use useState to perform browser operations.

// const App = () => {
//   const [num, setNum] = useState(0)

//   function increaseNum() {
//     setNum(num + 1);
//   }

//   function decreaseNum() {
//     setNum(num - 1);
//   }

//   function changeByFive() {
//     setNum(num + 5)
//   }

//   return (
//     <div className='p-10'>
//       <h1 className='text-5xl'>{num}</h1>
//       <button onClick={increaseNum} className='px-7 py-3 bg-green-500 rounded text-2xl cursor-pointer active:scale-95 mt-3 mr-3'>Increase</button>
//       <button onClick={decreaseNum} className='px-7 py-3 bg-red-500 rounded text-2xl cursor-pointer active:scale-95 mt-3 mr-3'>Decrease</button>
//       <button onClick={changeByFive} className='px-7 py-3 bg-green-800 rounded text-2xl cursor-pointer active:scale-95 mt-3'>Increase by 5</button>
//     </div>
//   )
// }

// export default App

// --------------------------------------------------------------------------------------------------------------------

// const App = () => {
//   const [name, setName] = useState("Nitya");

//   const changeName = () => {
//     console.log(name)
//     setName("Prakash")
//     console.log(name) // When the function will run for first, in both the console the value num will be 0. Because setNum() is an asynchronous function so the consoles will get printed first then after the completion of setNum() funnction, it will increase the value or decrease the value.
//   }

//   return <div className='p-10'>
//     <h1 className='text-5xl'>{name}</h1>
//     <button onClick={changeName} className='px-7 py-3 bg-green-500 rounded text-2xl cursor-pointer active:scale-95 mt-10'>Change</button>
//   </div>;
// };

// export default App;

// --------------------------------------------------------------------------------------------------------------------

// const App = () => {
//   const [marks, setMarks] = useState([43, 39, 75, 97, 22]);

//   function increasedMarks() {
//     const newMarks = marks.map((elem) => {
//       if (elem < 95) {
//         return elem + 5
//       } else {
//         return elem
//       }
//     })
//     setMarks(newMarks)
//   }

//   return (
//     <div className="p-5">
//       {marks.map((elem, idx) => {
//         return <h1 key={idx} className="text-5xl mb-5">Student {idx + 1} = {elem}</h1>
//       })}

//       <button onClick={increasedMarks} className="px-8 py-3 bg-green-600 rounded text-xl cursor-pointer active:scale-95">Increase marks by 5</button>
//     </div>
//   )
// }

// export default App

// --------------------------------------------------------------------------------------------------------------------

const App = () => {
  const [age, setAge] = useState(null)

  function nextVoter() {
    let num = Math.floor(Math.random() * 100);
    setAge(num);
  }

  return (
    <div className="p-5">
      <h1 className="text-5xl mb-5">Next voter's age is {age == null ? "__" : age}.</h1>
      <button onClick={nextVoter} className="px-8 py-3 bg-green-600 rounded text-xl cursor-pointer active:scale-95 mb-5">Next voter</button>
      {age == null ? "" : <VoterId age={age} />}
    </div>
  )
}

export default App