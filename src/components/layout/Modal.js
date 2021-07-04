import React, {useEffect, useState} from 'react';
import RenderCarousel from './RenderCarousel';
import {onModalClose} from '../../util';


export function Modal({show, setIsModalOpen, modalInfo, viewport}){
    

    const showHideClassName = show ? "modal display-block" : "modal display-none"
    
    
    if (modalInfo){
    return (
        <div className={showHideClassName}>
            <div className="modal-main">
            <div onClick={()=>{
                setIsModalOpen(false);
                onModalClose();
            
            }} className="close">XXXXX</div>
            
            <div className="content">
                <div className="images">
                    <RenderCarousel
                    isModalOpen={show} modalInfo={modalInfo} viewport={viewport}/>
                </div>
                <div className="title"><h1>{modalInfo.title}</h1></div>
                <div className="description"><p className="description-text">{modalInfo.description}</p></div>
                <div className="technologies-wrapper"><TechList techList={modalInfo.techList}/></div>
            </div>
        </div>  

        </div>
    )
    } else {
        return <></>
    }
}


export function TechList(props){
    const [techLists, setTechLists] = useState([])
    

    useEffect(()=>{
        setTechLists(props.techList)
    })
    
    const displayTechList = (techLists ? techLists.map(tech =>{
        return( <li key={tech}>{tech}</li>)
    }) : null)

    return (<ul>
                {displayTechList}
            </ul>
    )
}

export default Modal;