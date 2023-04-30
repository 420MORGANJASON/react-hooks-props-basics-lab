import React from "react";

function About(props) {
  const user = props.user;
  console.log(props.user)
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{user.bio}</p>
      <p>{user.image}</p>

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    
    </div>
  );
}

export default About;
