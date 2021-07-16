import React, {useEffect, useState} from 'react'

import Carousel from './Carousel'



export function RenderCarousel(props){

    const {modalInfo, isModalOpen, viewport} = props
    const [isMounted, setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
        return function cleanup(){
            setIsMounted(false)
        }
    },[])

    if(isMounted && modalInfo){
        return (
            <Carousel isModalOpen={isModalOpen} images={modalInfo.images} viewport={viewport}/>
        )
        } else {
            return <><h1>Test</h1></>
    }
}

export default RenderCarousel;