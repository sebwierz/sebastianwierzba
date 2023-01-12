import React from "react";

export default function NavItem({title, link, isNavExpanded, setIsNavExpanded}){

function openLink(){
    window.location.href=link;
    setIsNavExpanded(!isNavExpanded)
}

    return( 
    <li onClick={openLink}>{title}</li>
    )
}