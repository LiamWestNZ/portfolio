import React, {useState, useEffect} from 'react';

import CarouselImage from './CarouselImage';




export function Carousel(props){

    const [imageList, setImageList] = useState([0,1,2,3,4])
    console.log(imageList)
    
    const carouselHeight = ((Math.min(props.viewport / 2, 800) * 9) / 16) * 0.8;
    const nextImage = () => {
        setImageList((oldList)=>{
            return oldList.map((listItem) =>{
                if (listItem > 0) {
                    return (listItem -= 1);
                }
                if (listItem === 0) {
                    return (listItem = props.images.length - 1);
                }
                return listItem;
            });
        });
    };

    const previousImage = () => {
        setImageList((oldList) => {
          return oldList.map((listItem) => {
            if (listItem > 0) {
              return (listItem -= 1);
            }
            if (listItem === 0) {
              return (listItem = props.images.length - 1);
            }
            return listItem;
          });
        });
      };


    useEffect(()=>{
        if(!props.isModalOpen){
            setImageList([0,1,2,3,4])
        }
    },[props.isModalOpen])

    const displayCarousel = imageList.map((img, index)=>(
        <CarouselImage
            index={index}
            image={props.images[img]}
            key={`${props.images[img].src}-${img}`}
            carouselHeight={carouselHeight}
        />
    ))
    return (
        <div className="carousel" style={{height: carouselHeight}}>
            <div onClick={previousImage} className="left">L</div>
            <div className="image">
                {displayCarousel}
            </div>
            <div onClick={nextImage} className="right">R</div>
        </div>
    )
}

export default Carousel;