import React from 'react';
import Content from '../layout/Content';
import ProjectWrapper from '../layout/ProjectWrapper'
import ProjectCard from '../layout/ProjectCard';
import {images,} from '../../util/image'
import hsLogo from '../../assets/images/H&S-Circle.png';







const Projects = (props) => {

    const {setIsModalOpen, setModalInfo, projectRef} = props
    
    const litterTech = ['HTML','CSS','JavaScript','React','Python','NodeJS','PostgreSQL']
    const hsTech = ['HTML','SASS','JavaScript','React','Python','MySQL','Redux','AWS']
    
    
    
    return (
        <section id="projects" ref={projectRef}>
            <Content>
            <h1 className="open-title">Projects</h1>
            <ProjectWrapper>
                <ProjectCard
                    title={"LitterBox"}
                    description={"LitterBox, a cat enthusist social media and video platform."}
                    full={"LitterBox is a social media and video platform that I am currently working on," +
                    "the social media side is inspired by twitter, and is built with JavaScript/React and Python/Django." +
                    "The video streaming side is built using NodeJS. Users can upload images, posts, articles and video's to be seen by others."}
                    github={"https://github.com/LiamWestNZ/LitterBox"}
                    setIsModalOpen={setIsModalOpen}
                    setModalInfo={setModalInfo}
                    techList={litterTech}
                    images={images.harryandsam}
                    image={'Litter.'}
                    bgColor={`#fde4fb`}
                    tags={['React','Python','Node.js']} />

                <ProjectCard
                    title={"Harry and Sam management app"}
                    description={"The H&S management app is a pet grooming management web app."}
                    full={"The Harry and Sam management app is a web application I am building for a dog grooming botique in Gisborne. I initially started this application during an IT internship with them"
                    + " The app was initially a google apps script connected to Google Calander and Google form. I have to plans to this idea into a fully fleshed out SaaS in the near future"}
                    github={{frontend: "https://github.com/LiamWestNZ/HarryAndSam-Frontend", backend: "https://github.com/LiamWestNZ/HS-Backend-Public"}}
                    setIsModalOpen={setIsModalOpen}
                    setModalInfo={setModalInfo}
                    techList={hsTech}
                    images={images.harryandsam}
                    image={hsLogo}
                    bgColor={`white`}
                    tags={['React','Python']}  />
                    
                </ProjectWrapper>

            
            </Content>
        </section>
        
    )
}

export default Projects;