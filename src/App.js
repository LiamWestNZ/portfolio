import React, {useState, useEffect, useRef} from 'react';
import Main from './Main';
import Navbar from './components/layout/Navbar';
import {Canvas} from '@react-three/fiber';
import {Html} from '@react-three/drei';
import Content from './components/layout/Content'
import { debounce, calcPercent, isInViewport } from './util';
import './App.scss';
import Stars from './components/layout/Hero'
import Footer from './components/layout/Footer'


export function App() {

  const [isMobile, setIsMobile] = useState(false)
  const [viewport, setViewport] = useState(0)
  const [activeRef, setActiveRef] = useState(0)
  const [progress, setProgress] = useState(0)

  const homeRef = useRef(null);
	const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  
  const checkIfMobile =()=>{
    setViewport(window.innerWidth);
    setIsMobile(viewport < 900);
  };

  const checkMobileDebounced = debounce(checkIfMobile, 1000, true);

  const calcPercentDebounced = debounce(() =>
        {setProgress(calcPercent)},200,true);

  

  const checkCurrentRef = () => {
    document.documentElement.style.setProperty(
      "--scroll-y",
      `${window.scrollY}px`
    );



    if (document.body.style.position !== "fixed") {
      if (homeRef.current) {
        if (isInViewport(homeRef.current)) {
          setActiveRef(0);
          document.title = "Home | Liam West";
        }
      }
      if (aboutRef.current) {
        if (isInViewport(aboutRef.current)) {
          setActiveRef(1);
          document.title = "About | Liam West";
        }
      }
      if (projectRef.current) {
        if (isInViewport(projectRef.current)) {
          setActiveRef(3);
          document.title = "Projects | Liam West";
        }
      }
      if (contactRef.current) {
        if (isInViewport(contactRef.current)) {
          setActiveRef(4);
          document.title = "Contact | Liam West";
        }
      }
      if (skillsRef.current) {
        if (isInViewport(skillsRef.current)) {
          setActiveRef(2);
          document.title = "Skills | Liam West";
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

    useEffect(()=>{
      
      window.addEventListener("scroll", scrollPositionCheck);
      window.addEventListener("scroll", calcPercentDebounced);
      window.addEventListener("resize", checkMobileDebounced);
      return () => {
        window.removeEventListener("scroll", scrollPositionCheck);
        window.removeEventListener("scroll", calcPercentDebounced);
        window.removeEventListener("resize", checkMobileDebounced);
      };
    }, [calcPercentDebounced, checkMobileDebounced, scrollPositionCheck]);
    

  return (
    <div className="App">
      <Navbar isMobile={isMobile} progress={progress} activeRef={activeRef}/>
      <div className="canvas-wrapper"activeRef={activeRef} ref={homeRef}>
        <Canvas colorManagement camera={{position: [-5,2,50]}}>
          <HeaderContent/>
          <ambientLight intensity={0.5} />
          <Stars/>
        </Canvas>
      </div>
      
        <Main
          isMobile={isMobile}
          viewport={viewport}
          activeRef={activeRef}
          setActiveRef={setActiveRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectRef={projectRef}
          contactRef={contactRef}/>
      
      <Footer />
    </div>
        
  );
}


export function HeaderContent(props){

  return (
    
      <Html fullscreen>
        <section className="header">
          <Content>
            <div className="splash">
                    <div className="splash-logo">
                        LW.
                    </div>
                    <div className="splash-svg">
                        <svg>
                            <rect width="100%" height="100%"></rect>
                        </svg>
                    
                    </div>
                    <div className="splash-minimize">
                        <svg width="100%" height="100%">
                        <rect width="100%" height="100%"></rect>
                        </svg>
                    </div>
                </div>
                <div className="text">
                    <p>Hi my name is Liam.</p>
                    <p>I'm a fullstack developer</p>
                </div>
                </Content>
              </section>
          </Html>
        
  )
}


export default App;
