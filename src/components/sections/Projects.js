import React from 'react';
import Content from '../layout/Content';
import ProjectWrapper from '../layout/ProjectWrapper'
import ProjectCard from '../layout/ProjectCard';
import {images,} from '../../util/image'
import hsLogo from '../../assets/images/H&S-Circle.png';







const Projects = (props) => {

    const {setIsModalOpen, setModalInfo, projectRef} = props
    
    const litterTech = ['HTML','CSS','JavaScript','React','Python','SQLite']
    const hsTech = ['HTML','SASS','JavaScript','React','Python','PostgreSQL','Redux','AWS']
    
    
    return (
        <section id="projects" ref={projectRef}>
            <Content>
            <h1 className="open-title">Projects</h1>
            <ProjectWrapper>
                <ProjectCard
                    title={"LitterBox"}
                    description={"LitterBox is a twitter inspired social" +
                    "for cat entusists"}
                    github={"https://github.com/LiamWestNZ/LitterBox"}
                    setIsModalOpen={setIsModalOpen}
                    setModalInfo={setModalInfo}
                    techList={litterTech}
                    images={images.harryandsam}
                    image={'Litter.'}
                    bgColor={`#fde4fb`} />

                <ProjectCard
                    title={"Harry and Sam management app"}
                    description={"The H&S management app is a appointment application and management web application built for the Harry and Sam dog grooming botique in Gisborne."}
                    github={{frontend: "https://github.com/LiamWestNZ/HarryAndSam-Frontend", backend: "https://github.com/LiamWestNZ/HS-Backend-Public"}}
                    setIsModalOpen={setIsModalOpen}
                    setModalInfo={setModalInfo}
                    techList={hsTech}
                    images={images.harryandsam}
                    image={hsLogo}
                    bgColor={`white`}  />
                    
                </ProjectWrapper>

            
            </Content>
        </section>
        
    )
}

export default Projects;