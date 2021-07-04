import React from 'react';
import Content from '../layout/Content';



export function Header() {

    
    return (

        <section id="header">
            
            <Content>
                <div className="splash">
                    <div className="splash-logo">
                        LW.
                    </div>
                    <div className="splash-svg">
                        <svg>
                            <rect width="100%" height="100%"></rect>
                        </svg>
                    
                    </div>
                    <div className="splash-minimize">
                        <svg width="100%" height="100%">
                        <rect width="100%" height="100%"></rect>
                        </svg>
                    </div>
                </div>
                <div class="text">
                    <p>Hi my name is Liam.</p>
                    <p>I'm a fullstack developer</p>
                </div>
                
            </Content>
        </section>
    
    )
    
}

export default Header;

