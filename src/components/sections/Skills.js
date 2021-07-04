import React from 'react';
import Content from '../layout/Content';



import SkillsWrapper from '../layout/SkillsWrapper'

export function Skills(props){

    return (
        <section id="skills" ref={props.skillsRef}>
            
            <Content>
                <h1 className="open-title">Skills</h1>
                    <SkillsWrapper />
            </Content>

        </section>
    )
}

export default Skills;