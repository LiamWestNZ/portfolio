import React, {useState} from 'react';

import Modal from './components/layout/Modal'
import About from './components/sections/About';
import Skills from './components/sections/Skills'
import Portfolio from './components/sections/Projects';
import Contact from './components/sections/Contact';



import './assets/css/main.scss';


export function Main(props){
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState([] | undefined)

    
    

    

    return (
        <>
        <Modal
            show={isModalOpen}
            modalInfo={modalInfo}
            setIsModalOpen={setIsModalOpen}
            viewport={props.viewport}
            
         />
            <main id="main">
                    <About aboutRef={props.aboutRef}/>
                    <Skills skillsRef={props.skillsRef}/>
                    <Portfolio setIsModalOpen={setIsModalOpen} setModalInfo={setModalInfo} projectRef={props.projectRef}/>
                    <Contact contactRef={props.contactRef} isMobile={props.isMobile}/>
            </main>
                

            
        </>
    )
}

export default Main;