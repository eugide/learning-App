// import React from "react";
// function App() {
//   const status = 'sibling';
//   const firstName = 'Ndungutse';
//   const lastName = 'Eugide';
//   const isLoggedIn = false;
//   // let authStatus = "";
//   // authStatus = isLoggedIn ? "member" : "guest"
//   const students = ["eugide", "hertier", "isabella"];


//   // if(isLoggedIn) {
//   //   return <h1>You are a member</h1>
//   // } else {
//   //   return <h1>Your are a guest</h1>
//   // }
//   return (
//   <React.Fragment>

//     <h1>Welcom</h1>
//     <h2>My name is Eugide</h2>
//     <p> My name is:  { firstName }  { lastName } Is my { status }</p>
//     {/* <h1>You are a { authStatus }</h1> */}

//     <h1>You are a { isLoggedIn ? 'member' : 'guest' }</h1>

//     <ul>
//       { students.map((student, index) => <li key = {index}> {student} </li>) }
//     </ul>
//   </React.Fragment>
    
//   )
// }
// export default App;

import Hero from './Component/Hero'
import HomeCards from './Component/HomeCards'
import Navbar from './Component/Navbar'



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HomeCards />
    </div>
  )
}

export default App