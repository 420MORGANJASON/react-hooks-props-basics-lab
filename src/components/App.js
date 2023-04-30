import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
// import Links from "./Links";
console.log(user);

function App() {

   const githubLink = "https://github.com/your-username";
  const linkedinLink = "https://linkedin.com/in/your-username";

  return (
    <div>
      <NavBar />
      <Home user={user}/>
      <About user={user} img={user.img}/>
      <Links user={user} githubLink={githubLink} linkedinLink={linkedinLink}/>
    </div>
  );
}

export default App;
