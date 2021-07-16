import React from 'react';
import { GithubIcon } from '../../util/image';


export function Footer({children}){

    return (
        <footer className="footer">
            
            <p>Developed by Liam West-Cahill; using React, Three.js, SASS. View code <a target="_blank" href="https://github.com/LiamWestNZ/portfolio">here</a><GithubIcon/></p>
        </footer>
    )
}

export default Footer;