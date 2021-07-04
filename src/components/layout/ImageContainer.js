import React from 'react'
import Image from './Image'






export function ImageContainer(props){
    const {carouselHeight, width, height, src, alt} = props
    
    if (carouselHeight){
        return (
            <div
             className="image-container-wrapper" style={{
                width: (width / height) * carouselHeight,
                height: carouselHeight,
              }}>
                  <div
                    className="image-container"
                    style={{
                        width: (width / height) * carouselHeight,
                        height: carouselHeight,
                    }}>
                        <Image
                            src={src}
                            alt={alt}
                            height={carouselHeight}
                            width={(width / height) * carouselHeight}
                        />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="image-container">
                <Image src={src} alt={alt} />
            </div>
        )
    }
};

export default ImageContainer;