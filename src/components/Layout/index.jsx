import React from 'react';

import HeaderMain from './HeaderMain';
import FooterMain from './FooterMain';


export default function Layout({children}){

    return(
        <>
            <HeaderMain/>       
                {children}
            <FooterMain/>
            
        </>
    )
}