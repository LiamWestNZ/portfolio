import React from "react";
import Content from "../layout/Content";

function Employment(props) {
    return (
        <section id="employment" className="employment-section">
            <Content>
                <h2 className="employment-title">Employment</h2>

                <div className="job-entry">
                    <h3 className="job-title">Full-stack Developer</h3>
                    <p className="job-meta">HortPlus (NZ) Ltd – Wellington | 2021 – Present</p>
                    <ul className="job-responsibilities">
                        <li>Rebuilt legacy flagship application with modern web development tools.</li>
                        <li>Built new features and tools using modern software principles.</li>
                        <li>Contributed to the company’s most popular application across frontend, backend, and infrastructure.</li>
                        <li>Worked directly with key stakeholders to turn ideas into working tools for end users.</li>
                        <li>Developed and used RESTful APIs and internal services.</li>
                    </ul>
                </div>
            </Content>
        </section>
    );
}

export default Employment;