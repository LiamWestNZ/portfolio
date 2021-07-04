import React from 'react';


export function ContactIcon({href, children, title, string, isMobile}){

    if(!isMobile){
    return (
        <li>
            <a
                className="icon-button"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={title}    
            >
                <div className="icon">
                    {children}
                </div>
                <p>{string}</p>
            </a>
        </li>
    )} else {
        return (
            <li className="mobile">
                <div className="mobile-button">
                    <a
                    className="icon-button"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={title}>
                    <div className="mobile-icon">
                        {children}
                    </div>
                
                    </a>
                </div>
            </li>
        )
    }
}


export default ContactIcon;