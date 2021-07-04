import React from 'react';


import {frontendSkills, backendSkills, platformSkills,} from '../../util/index'

    



export function SkillsWrapper(props){
    
    const displayFrontendSkills = frontendSkills.map(skill =>(
        <Skill ke={skill} img={skill.src} title={skill.title} list={skill.list}/>
    ))
    const displayBackendSkills = backendSkills.map(skill =>(
        <Skill ke={skill} img={skill.src} title={skill.title} list={skill.list}/>
    ))
    
    const displayPlatformSkills = platformSkills.map(skill =>(
        <Skill ke={skill} img={skill.src} title={skill.title} list={skill.list}/>
    ))
    
    
    
    



    return (
        <>
        <div className="skills-wrapper">
        
                {displayFrontendSkills}
            
            
                {displayBackendSkills}
            
            
                {displayPlatformSkills}
            
        </div>
        </>
    )
}


export function Skill(props){

    const handleList = props.list.map(item=>(
        item.hasOwnProperty('icon') ? <li><img src={item.icon} with="20px" height="20px"></img> {item.name}</li> : <li>{item}</li>
    ))

    return (
        <div className="skill" >
            <div className="skill-more-less"></div>
            <div className="skill-meta">
                <div className="skill-close"></div>
                <ul className="skill-list">
                    <hr className="bar"/>
                    <h4 className="skill-title">{props.title}</h4>
                    {handleList}
                </ul>
            </div>
            <div className="overflow-wrapper"></div>
            <img className="img" key={props.img} src={props.img}></img>
        </div>
    )
}


export default SkillsWrapper;