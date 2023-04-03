import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import './styles/EventBody.scss'

const EVENTIMAGE = [
    {
        key: 'first-slide',
        captionTitle: 'Tech Fest',
        price: 50000,
        captionText: 'In the second edition, we want to look at the education needed to get into tech and also the various role that doesn’t involves coding. We are also going to talking about our present educational system and the various things that affects students or people going into tech.',
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

function EventBody() {
  return (
    <div className='EventBody'>
        <div className='DateContainer'>
            <h1>17<span>th</span></h1>
            <h3>May</h3>
        </div>
    <Carousel className='Carousel' fade>
    {
        EVENTIMAGE.map(eventcarousel => {
            return(
                <Carousel.Item key={eventcarousel.key}>
                    <img alt={eventcarousel.key} src={eventcarousel.image} srcSet='' />
                    <Carousel.Caption>
                        <h3>{eventcarousel.captionTitle}</h3>
                        <p>{eventcarousel.captionText}</p>                        
                        <h2>Price: ${eventcarousel.price} </h2>
                        <Button>Get Ticket</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })
    }
    </Carousel>
    </div>
    
  )
}

export default EventBody