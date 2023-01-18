import React from 'react';

import HeaderMain from './HeaderMain';
import FooterMain from './FooterMain';
import ScrollButton from './ScrollButton';




export default function Layout({children}){
    

    return(
        <>
            <HeaderMain/>       
                {children}
            <ScrollButton/>
            <FooterMain/>
            
        </>
    )
}