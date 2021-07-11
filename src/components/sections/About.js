import React from 'react'
import Content from '../layout/Content'






const About = (props) => {

    
    
    return (
        <section id="about" ref={props.aboutRef}>
            <Content>
                <h1>About me</h1>
                <p id="intro">
                    Hi, I'm Liam. I'm an IT graduate that has a profound passion for web development.
                    I first started programming during my degree. To be honest I REALLY struggled with it as a whole, and without the help
                    of my peers and lecturers, I would have failed the class. Despite the stress and confusion I experienced learning to code,
                    I couldn't rebuff the sense of accomplishment I got when the applications I was required to make for assignments worked
                    on my own accord. That following holidays I got a copy of "Automate the boring stuff" and "Python Crash Course" and dedicate
                    a few hours a day learning Python.

                </p>
                <p id="next">
                    Fast forward to today, I've since graduated and I am still continuing my daily learning, while developing some web applications
                    in my spare time.

                </p>
                
            </Content>
        </section>
    )
}

export default About