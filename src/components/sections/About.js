import React from 'react'
import Content from '../layout/Content'






const About = (props) => {

    
    
    return (
        <section id="about" ref={props.aboutRef}>
            <Content>
                <h1>About me</h1>
                <p id="intro">
                    Hi, I'm Liam. I'm a professional web developer/software engineer who has been working since 2021. I have a keen passion for tech, while initially going down a 
                    traditional IT route, I become interested in programming during the introductry programming courses of my degree. Truthly, I really struggled with it initially,
                    but my willingess to learn and overcome the challenges I faced. The following holidays of my graduation I picked up a copy of 'Automate the boring things' and the rest was history.

                </p>
            </Content>
        </section>
    )
}

export default About