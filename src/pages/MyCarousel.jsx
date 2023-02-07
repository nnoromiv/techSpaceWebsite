import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./styles/MyCarousel.scss"

const TESTIMG = 'https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg'

function MyCarousel() {
  return (
    <Carousel className='Carousel' fade>
        <Carousel.Item>
            <img alt='first-slide' src={TESTIMG} srcSet='' />
        </Carousel.Item>
        <Carousel.Item>
            <img alt='first-slide' src={TESTIMG} srcSet='' />
        </Carousel.Item>
        <Carousel.Item>
            <img alt='first-slide' src={TESTIMG} srcSet='' />
        </Carousel.Item>
        <Carousel.Item>
            <img alt='first-slide' src={TESTIMG} srcSet='' />
        </Carousel.Item>
    </Carousel>
  )
}

export default MyCarousel