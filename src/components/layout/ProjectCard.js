import React from 'react';
import ImageContainer from './ImageContainer';
import {onModalOpen} from '../../util';

export function ProjectCard(props){
    const { 
        description,
        title, 
        images,
        github,
        live,
        techList,
        setModalInfo,
        setIsModalOpen,
        } = props
    

    return (
        <li>
            <div className="project-card"
                onClick={() =>{
                    setModalInfo(()=>{
                        return {
                            description: description,
                            title: title,
                            images: images,
                            github: github,
                            live: live,
                            techList: techList,
                        }
                        })
                    setIsModalOpen(true);
                    onModalOpen();
                    document.title = title
                    }
                }
            >
                <div className="image">
                    <ImageContainer />
                </div>
                <div className="text">
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
                </div>
            </div>
        </li>
        )
}

export default ProjectCard;