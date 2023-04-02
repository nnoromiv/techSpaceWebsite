import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./styles/MyCarousel.scss"

const CAROUSELIMAGE = [
    {
        key: 'first-slide',
        image: 'https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg'
    },
    {
        key: 'second-slide',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    },
    {
        key: 'third-slide',
        image: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg'
    }
]

function MyCarousel() {
  return (
    <Carousel className='Carousel' fade>
    {
        CAROUSELIMAGE.map(carouselimage => {
            return(
                <Carousel.Item key={carouselimage.key}>
                    <img alt={carouselimage.key} src={carouselimage.image} srcSet='' />
                </Carousel.Item>
            )
        })
    }
    </Carousel>
  )
}

export default MyCarousel