import React from "react";
import Section from "./section";



export default function sectionList(){
    return(
       <ul className="section-list">
        <Section name="Home"/>
        <Section name="About Me"/>
        <Section name="Skills"/>
        <Section name="About Me"/>
        <Section name="Projects"/>
        <Section name="Experience"/>
        <Section name="Contact"/>
       </ul>
    )
}