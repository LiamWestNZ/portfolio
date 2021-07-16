import React, {useState} from 'react';

export function Image(props){
    const [isLoaded, setIsLoaded] = useState(false)

    
    return (
        <>
          <img
            onLoad={() => {
              setIsLoaded(true);
            }}
            className="image-full"
            style={{ opacity: isLoaded ? 1 : 0, width: props.width, height: props.height }}
            alt={props.alt}
            src={props.src}
          />
        </>
    )
}

export default Image;