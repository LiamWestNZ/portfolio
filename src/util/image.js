import dog1 from '../assets/images/placeholder-image.png'
import dog2 from '../assets/images/placeholder-image.png'
import dog3 from '../assets/images/placeholder-image.png'
import cat1 from '../assets/images/placeholder-image.png'
import cat2 from '../assets/images/placeholder-image.png'

import hsLogo from '../assets/images/H&S-Circle.png';


export const images = {
    harryandsam: [
        {
            width: 400,
            height: 400,
            src: dog1,
            alt: "Harry and Sam image 1"
            },
        {
            width: 400,
            height: 400,
            src: dog2,
            alt: "Harry and Sam image 2"
        },
        {
            width: 400,
            height: 400,
            src: dog3,
            alt: "Harry and Sam image 3"
        },
        {
            width: 400,
            height: 400,
            src: cat1,
            alt: "Harry and Sam image 4"
        }, 
        {
            width: 400,
            height: 400,
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

export const RightArrow = () =>{

  return (
    <svg class="svg-icon" viewBox="0 0 20 20">
				<path d="M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10"></path>
		</svg>
  )
}

export const LeftArrow = ()=>{
  return (
    <svg class="svg-icon" viewBox="0 0 20 20">
				<path d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"></path>
		</svg>
  )
}


export const ExitIcon = ()=>{
  return (
    <svg class="svg-icon" viewBox="0 0 20 20">
				<path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
		</svg>
  )
}


export const HarryAndSamLogo = ()=>{
  return (
    <div>
      <hsLogo/>
    </div>
  )
}