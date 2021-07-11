import React, {useState, useEffect, useRef} from 'react';

import Modal from './components/layout/Modal'
import About from './components/sections/About';
import Skills from './components/sections/Skills'
import Portfolio from './components/sections/Projects';
import Contact from './components/sections/Contact';  

import {debounce, isInViewport} from './util/index'


import './assets/css/main.scss';



export function Main(props){
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState([] | undefined)


    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);
  
    const checkCurrentRef = () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`
      );

  
      if (document.body.style.position !== "fixed") {
        
        if (contactRef.current) {
            if (isInViewport(contactRef.current)) {
                props.setActiveRef(4);
                document.title = "Contact | Liam West";
            }
        }

        if (projectRef.current) {
          if (isInViewport(projectRef.current)) {
            props.setActiveRef(3);
            document.title = "Projects | Liam West";
          }
        }
        if (skillsRef.current) {
            if (isInViewport(skillsRef.current)) {
              props.setActiveRef(2);
              document.title = "Skills | Liam West";
            }
          }
        if (aboutRef.current) {
          if (isInViewport(aboutRef.current)) {
            props.setActiveRef(1);
            document.title = "About | Liam West";
          } 
        }
      }
    };
  
    const scrollPositionCheck = debounce(() => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`
      );
      checkCurrentRef();
    }, 50);
  
    useEffect(() => {
      window.addEventListener("scroll", scrollPositionCheck);
      return () => {
        window.removeEventListener("scroll", scrollPositionCheck);
      };
    }, [scrollPositionCheck]);
    

    return (
        <>
        <Modal
            show={isModalOpen}
            modalInfo={modalInfo}
            setIsModalOpen={setIsModalOpen}
            viewport={props.viewport}
            
         />
            <main id="main">
                    <About aboutRef={aboutRef}/>
                    <Skills skillsRef={skillsRef}/>
                    <Portfolio projectRef={projectRef} setIsModalOpen={setIsModalOpen} setModalInfo={setModalInfo}/>
                    <Contact isMobile={props.isMobile} contactRef={contactRef}/>
            </main>
                

            
        </>
    )
}

export default Main;