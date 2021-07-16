import React, {useState, useEffect} from 'react';
import Main from './Main';
import Navbar from './components/layout/Navbar';
import {Canvas} from '@react-three/fiber';
import {Html} from '@react-three/drei';
import Content from './components/layout/Content'
import { calcPercent, debounce } from "./util";

import './App.scss';
import Stars from './components/layout/Hero'
import Footer from './components/layout/Footer'


export function App() {

  const [isMobile, setIsMobile] = useState(false)
  const [viewport, setViewport] = useState(0)
  const [activeRef, setActiveRef] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isTop, setIsTop] = useState(true)



  
  
  const checkIfMobile =()=>{
    setViewport(window.innerWidth);
    setIsMobile(viewport < 900);
    setIsTop(window.scrollY < (0.7 * window.innerHeight));
  };

  const checkMobileDebounced = debounce(checkIfMobile, 1000, true);

  useEffect(() => {
    checkIfMobile();
    
  });

  const calcPercentDebounced = debounce(
    () => {
      setProgress(calcPercent);
    },
    0,
    true
  );
 
  
  
  useEffect(() => {
    window.addEventListener("scroll", calcPercentDebounced);
    window.addEventListener("resize", checkMobileDebounced);
    return () => {
      window.removeEventListener("scroll", calcPercentDebounced);
      window.removeEventListener("resize", checkMobileDebounced);
    };
  }, [calcPercentDebounced, checkMobileDebounced]);
  
  

  return (
    <div className="App">
      <Navbar isMobile={isMobile} progress={progress} activeRef={activeRef} isTop={isTop}/>
      <div className="canvas-wrapper"activeRef={activeRef}>
        <Canvas resize={{scroll: true}} colorManagement camera={{position: [-5,2,50]}}>
          <HeaderContent/>
          <ambientLight intensity={0.5} />
          <Stars />
        </Canvas>
      </div>
      
        <Main
          isMobile={isMobile}
          viewport={viewport}
          setActiveRef={setActiveRef}/>
      
      <Footer />
    </div>
        
  );
}


export function HeaderContent(props){

  const [isTop, setIsTop] = useState(false);

  const smoothTextSroll =()=>{
    setIsTop(300 + (0.3 * window.scrollY));
  }

  const smoothTextScrollDebounce = debounce(smoothTextSroll, 1000, true);

  useEffect(()=>{
    smoothTextScrollDebounce();
  })
  return (
    
      <Html fullscreen>
        <section id="header" className="header">
          <Content>
            <div className="splash">
                    <div className="splash-logo">
                        LW
                    </div>
                    <div className="splash-svg">
                        <svg>
                            <rect width="100%" height="100%"></rect>
                        </svg>
                    
                    </div>
                    <div className="splash-minimize">
                        <svg width="0%" height="0%">
                        <rect width="0%" height="0%"></rect>
                        </svg>
                    </div>
                </div>
                <div className="text" style={{top: `${isTop}px`}}>
                    <p>Hi my name is Liam.</p>
                    <p>I'm a fullstack developer and IT specialist</p>
                </div>
                </Content>
              </section>
          </Html>
        
  )
}


export default App;
