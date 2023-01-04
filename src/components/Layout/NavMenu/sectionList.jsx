import React from "react";
import Section from "./Section";



export default function sectionList(){
    return(
       <ul>
        <Section name="Home"/>
        <Section name="About Me"/>
        <Section name="Skills"/>
        <Section name="Projects"/>
        <Section name="Experience"/>
        <Section name="Contact"/>
       </ul>
    )
}