import React from "react";

export default function NavItem({title, link, isNavExpanded, setIsNavExpanded}){

    
function openLink(){

    window.location.href=link;

    if(isNavExpanded && setIsNavExpanded){
    setIsNavExpanded(!isNavExpanded)
    }
}



    return( 
    <li onClick={openLink}>{title}</li>
    )
}