import React from 'react';
import ImageContainer from './ImageContainer';
import {onModalOpen} from '../../util';

export function ProjectCard(props){
    const { 
        description,
        full,
        title, 
        images,
        github,
        live,
        techList,
        setModalInfo,
        setIsModalOpen,
        image,
        tags,
        bgColor
        } = props
    
    
    return (
        <li>
            <div className="project-card"
                onClick={() =>{
                    setModalInfo(()=>{
                        return {
                            description: full,
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
                <div className="item-wrapper">
                    <div className="image">
                        <div className="image-wrapper" style={{backgroundColor: bgColor}}>
                            {image === 'Litter.' ? 'Litter.' :  <img src={image} height="200px" width="200px"></img>}
                        </div>
                    </div>
                    <div className="content">
                            <div className="title">{title}</div>
                            <div className="description">{description}</div>
                        
                    </div>
                </div>
                View More!
                <ul className="tags">
                            {tags.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))}
                        </ul>
            </div>
        </li>
        )
}

export default ProjectCard;