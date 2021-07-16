import React, {useState, useEffect} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


import './Navbar.scss';



export function Navbar(props){

    
    const[navOpen, setNavOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)


    useEffect(()=>{
        if(props.isTop){
            setIsVisible(false)
        }else{
            setIsVisible(true)
        }
    },[props.isTop])

    return(
        <>
        {props.isMobile ? (
        <>
            <nav className="responsive-nav-mobile" style={{opacity: isVisible ? 0 : 1}} >
                <ul className={navOpen ? 'active' : ''}  >
                    <li className="left">
                        <ul>
                        <li className="logo"
                            onClick={() => {
                                setNavOpen(!navOpen)
                            }}>
                                <div className="logo-container" height="40px" width="40px">
                                        LW
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <nav className="responsive-nav-mobile-full" style={{left: navOpen ? "0" : "-100%", pointerEvents: navOpen ? "auto" : "none"}}>
                <ul>
                    <li onClick={()=>{
                        setNavOpen(!navOpen);
                    }} className="exit-icon">
                        <h1>X</h1>
                    </li>
                </ul>
            </nav>
        
        </>
        ): (
            <nav className="responsive-nav-desktop" style={{visibility: isVisible ? 'visible' : 'hidden', height: isVisible ? '10%' : '0%'}} >
                <div className="progress" style={{width: `${props.progress}%`}}></div>
                <ul className="container" >
                    <li className="left">
                        <ul>
                            <li className={props.activeRef === 0 ? "active logo" : "logo"}>
                                <AnchorLink href="#header">
                                    <div className="logo-container">
                                        LW
                                    </div>
                                </AnchorLink>
                            </li>
                            <li className="divider">
                                <div></div>
                            </li>
                            <li className="name">
                                <div>
                                    Liam West
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li classNmae="right">
                        <ul>
                            <li>
                                <AnchorLink
                                href="#header"
                                className={props.activeRef === 0 ? "anchor active" : "anchor"}>
                                    Home
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink
                                href="#about"
                                className={props.activeRef === 1 ? "anchor active" : "anchor"}>
                                    About
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink
                                href="#skills"
                                className={props.activeRef === 2 ? "anchor active" : "anchor"}>
                                    Skills
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink
                                href="#projects"
                                className={props.activeRef === 3 ? "anchor active" : "anchor"}>
                                    Projects
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink
                                offset="50"
                                href="#contact"
                                className={props.activeRef === 4 ? "anchor active" : "anchor"}>
                                    Contact
                                </AnchorLink>

                            </li>
                        </ul>

                    </li>
                </ul>
            </nav>
            


        
            )}
        </>
        )
}

export default Navbar;