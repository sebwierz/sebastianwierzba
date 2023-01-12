import React from "react";

export default function NavItem({title, link}){

    return( 
    <a href={link}><li>{title}</li></a>
    )
}