import dog1 from '../assets/images/dog1.jpg'
import dog2 from '../assets/images/dog2.jpg'
import dog3 from '../assets/images/dog3.jpg'
import cat1 from '../assets/images/cat1.png'
import cat2 from '../assets/images/cat2.jpg'


export const images = {
    harryandsam: [
        {
            width: 100,
            height: 100,
            src: dog1,
            alt: "Harry and Sam image 1"
            },
        {
            width: 100,
            height: 100,
            src: dog2,
            alt: "Harry and Sam image 2"
        },
        {
            width: 100,
            height: 100,
            src: dog3,
            alt: "Harry and Sam image 3"
        },
        {
            width: 100,
            height: 100,
            src: cat1,
            alt: "Harry and Sam image 4"
        }, 
        {
            width: 100,
            height: 100,
            src: cat2,
            alt: "Harry and Sam image 5"
        }
    ]
}

export const SendMailIcon = () =>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                      <line fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="0.5" y1="15.5" x2="5.5" y2="15.5"/>
                      <line fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="2.5" y1="12.5" x2="6" y2="12.5"/>
                      <line fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="4.5" y1="9.5" x2="6.5" y2="9.5"/>
                        <polygon fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="22.5,17.5     7.5,17.5 8.5,7.5 23.5,7.5   "/>
                        <polyline fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="8.5,7.5     16,13.5 23.5,7.5   "/>
                <g id="Frames-24px">
                    <rect fill="none" width="24" height="24"/>
                </g>
        </svg>
    )
}

export const EmailIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="44" width="44">
        <path
          
          d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"
        />
      </svg>
    );
  };

export const LinkedInIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="44px" width="44px">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    );
  };

export const GithubIcon = () => {
return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height="44px"
    width="44px"
    >
    <path
        
        d="M11.51,0a12,12,0,0,0-3.3,23.38c.6.11.79-.26.79-.58V20.58c-3.34.72-4-1.42-4-1.42A3.19,3.19,0,0,0,3.63,17.4c-1.08-.74.09-.72.09-.72a2.52,2.52,0,0,1,1.84,1.23,2.54,2.54,0,0,0,3.49,1,2.53,2.53,0,0,1,.76-1.6C7.15,17,4.34,16,4.34,11.37A4.63,4.63,0,0,1,5.58,8.15,4.28,4.28,0,0,1,5.7,5s1-.32,3.3,1.23a11.49,11.49,0,0,1,3-.41,11.63,11.63,0,0,1,3,.41C17.3,4.66,18.3,5,18.3,5a4.23,4.23,0,0,1,.12,3.17,4.63,4.63,0,0,1,1.24,3.22c0,4.61-2.81,5.63-5.48,5.93A2.86,2.86,0,0,1,15,19.52v3.29c0,.32.19.69.8.58A12,12,0,0,0,11.51,0Z"
        transform="translate(0 0)"
    />
    </svg>
);
};