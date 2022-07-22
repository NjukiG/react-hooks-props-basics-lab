import React from "react";
import Links from "./Links";

function About(props) {
const condition = props.bio ? <p>{props.bio}</p> : null;
  return (
    <div id="about">
      <h2>About Me</h2>
      {condition}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github= {props.github} linkedin= {props.linkedin}/>
    </div>
  );
}

export default About;
