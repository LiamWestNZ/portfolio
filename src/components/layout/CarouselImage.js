import React from 'react';

import ImageContainer from './ImageContainer'

import {scaleSwitch,
    opacitySwitch,
    zIndexSwitch,
    transitionSwitch,
    translateSwitch,
  } from '../../util'



export function CarouselImage(props){
    

    return (
        <div className="carousel-image"
            style={{
                transform: `translateX(${translateSwitch(props.index)}) scale(${scaleSwitch(
                props.index
                )})`,
                zIndex: zIndexSwitch(props.index),
                opacity: opacitySwitch(props.index),
                transition: `all ${transitionSwitch(props.index)}ms ease`,
            }}
        >
            <ImageContainer 
                src={props.image.src} 
                alt={props.image.alt}
                height={props.image.height}
                width={props.image.width}
                carouselHeight={props.carouselHeight}
                />
        </div>
    )
}


export default CarouselImage;