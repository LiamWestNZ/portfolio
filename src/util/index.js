import React, {useState, useEffect} from 'react';
import cssLogo from '../assets/images/css-5.svg'
import githubLogo from '../assets/images/github-icon-1.svg'
import nodeLogo from '../assets/images/nodejs-icon.svg'
import reactLogo from '../assets/images/react-1.svg'
import postgresLogo from '../assets/images/postgresql.svg'
import htmlLogo from '../assets/images/html5.svg'
import javascriptLogo from '../assets/images/logo-javascript.svg'
import phpLogo from '../assets/images/php-1.svg'
import pythonLogo from '../assets/images/python-5.svg'
import sassLogo from '../assets/images/sass-1.svg'
import djangoLogo from '../assets/images/django.svg'
import flaskLogo from '../assets/images/flask.svg'
import awsLogo from '../assets/images/aws-2.svg'
import gasLogo from '../assets/images/Google_Apps_Script.png'
import wsLogo from '../assets/images/windows-server.svg'
import linuxLogo from '../assets/images/linux-tux.svg'
import csharpLogo from '../assets/images/csharp.svg'
import laravelLogo from '../assets/images/laravel-2.svg';
import expressLogo from '../assets/images/expressjs.svg';
import typescriptLogo from '../assets/images/typescript.svg'
import netLogo from '../assets/images/.NET.png';







export const frontendSkills = [
    {
        src: htmlLogo,
        title: "HTML5",
        list: ['Hyper Text Markup Language.','4+ prof. experience.']
    },
    {
        src: cssLogo,
        title: "CSS",
        list: ['Cascading Style Sheets.','4+ prof. years experience.']
    },
    {
        src: sassLogo,
        title: "SASS/SCSS",
        list: ['Syntactically Awesome Style Sheets.','4+ years prof experience.']
    },
    {
        src: javascriptLogo,
        title: "JavaScript",
        list: ['4+ years experience.', 'frameworks.',{icon: typescriptLogo, name: '4+ prof. experience with TypeScript'}]
    },{
        src: reactLogo,
        title: "React.js",
        list: ['JavaScript library.','4+ years prof. experience.']
    }]
    
export const backendSkills = [
    {
        src: phpLogo,
        title: 'PHP',
        list: ['PHP: Hypertext Preprocessor.','4+ years prof experience.','Backend.',{icon: laravelLogo, name: '4+ years prof. experience'}]
    },
    {   
        src: pythonLogo,
        title: 'Python',
        list: ['4+ prof. years experience.','Backend.','Data.','Scripting.',{icon: djangoLogo, name:'Django'},{icon: flaskLogo, name: 'Flask'}]
    },
    {
        src: csharpLogo,
        title: 'C#',
        list:['2+ years experience.','Backend',{icon: netLogo, name: '.NET ecosystem'}]
    },
    {   
        src: nodeLogo,
        title: 'Node.js',
        list: ['JavaScript Runtime.','2+ years experience.','Backend',{icon: expressLogo, name: 'express.js'}]
        
    },
    {   
        src: postgresLogo,
        title: 'PostgreSQL',
        list: ['SQL Database development platform.','DB development.','DB design.','Adv. Query writing.']
        
    },
    
]

export const platformSkills = [
    {
        src: githubLogo,
        title: 'GitHub',
        list: ['Git open source platform.','4+ prof. years experience.']
    },
    {
        src: awsLogo,
        title:'Amazon Web Services',
        list: ['Cloud Computing Platform.','4+ prof years experience.','EC2.','Lambda.','Step Functions.','S3.']
    },
    {
        src: gasLogo,
        title: "Google Apps Suite",
        list: ['Development using Googles App suite.','ES5 JavaScript.','2+ years experience.']
    },
    {
        src: linuxLogo,
        title: 'Linux OS',
        list: ['Linux OS Dev and use.','Administration.','Terminal.','Bash.']

    },
    {
        src: wsLogo,
        title: 'Windows Server',
        list: ['Windows Server Administration platform.','Windows administation','DNS.','Domain services.']
    }
]

export const zIndexSwitch = (index) => {
switch (index) {
    case 0:
    return 1;
    case 1:
    return 2;
    case 2:
    return 3;
    case 3:
    return 2;
    case 4:
    return 1;
    default:
    return 1;
}
};

export const scaleSwitch = (index) => {
switch (index) {
    case 0:
    return 0.5;
    case 1:
    return 0.75;
    case 2:
    return 1;
    case 3:
    return 0.75;
    case 4:
    return 0.5;
    default:
    return 1;
}
};

export const opacitySwitch = (index) => {
switch (index) {
    case 0:
    return 0;
    case 1:
    return 0.8;
    case 2:
    return 1;
    case 3:
    return 0.8;
    case 4:
    return 0;
    default:
    return 1;
}
};

export const transitionSwitch = (index) => {
    switch (index) {
        case 0:
        return 200;
        case 4:
        return 200;
        default:
        return 450;
    }
}

export const translateSwitch = (index) => {
switch (index) {
    case 0:
    return "-125%";
    case 1:
    return "-100%";
    case 2:
    return "-50%";
    case 3:
    return "0%";
    case 4:
    return "25%";
    default:
    return "-50%";
}
};

export const onModalOpen = () => {
    const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
    const body = document.body;
    setTimeout(() => {
      body.style.position = "fixed";
      body.style.top = `-${scrollY}`;
    }, 200);
  };
  
export const onModalClose = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
};

export const isInViewport = (el) => {
	if (el === null) return false;

  	let top = el.offsetTop;
  	let left = el.offsetLeft;
  	let width = el.offsetWidth;
  	let height = el.offsetHeight;

	return (
        top < window.pageYOffset + window.innerHeight &&
    	left < window.pageXOffset + window.innerWidth &&
    	top + height > window.pageYOffset &&
    	left + width > window.pageXOffset
    )
}


export function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

  export const calcPercent = () => {
    let h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
  
    return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  };
  

export function useOnScreen(ref, rootMargin = "0px") {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            // Update our state when observer callback fires
            setIntersecting(entry.isIntersecting);
        },
        {
            rootMargin,
        }
        );
        if (ref.current) {
        observer.observe(ref.current);
        }
        return () => {
        observer.unobserve(ref.current);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting;
}

export const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };