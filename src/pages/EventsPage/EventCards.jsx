import React from 'react'
import { Card, Button } from 'react-bootstrap'
import "./styles/EventCards.scss"

const BLOGCARD = [
    {
        image: 'images/blogimg.png',
        price: '50000',
        title: 'Story Headline',
        shortText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus ut dictum urna faucibus elit feugiat. Et dignissim in ut tellus vitae venenatis eget varius vestibulum.',
    },
    {
        image: 'images/blogimg.png',
        price: '50000',
        title: 'Story Headline2',
        shortText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus ut dictum urna faucibus elit feugiat. Et dignissim in ut tellus vitae venenatis eget varius vestibulum.',
    },
    {
        image: 'images/blogimg.png',
        price: '50000',
        title: 'Story Headline3',
        shortText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus ut dictum urna faucibus elit feugiat. Et dignissim in ut tellus vitae venenatis eget varius vestibulum.',
    },
    {
        image: 'images/blogimg.png',
        price: '50000',
        title: 'Story Headline4',
        shortText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus ut dictum urna faucibus elit feugiat. Et dignissim in ut tellus vitae venenatis eget varius vestibulum.',
    }
]


function Cards(){
    return(        
        <div className='Card'>
                {
                    BLOGCARD.map(blogcard => {
                        return (
                            <Card key={blogcard.title}>
                                <div className='DateContainer'>
                                    <h1>20<span>th</span></h1>
                                    <h3>May</h3>
                                </div>
                                <Card.Img variant='top' src={blogcard.image}/>
                                <Card.Body>
                                    <Card.Title>{blogcard.title}</Card.Title>
                                    <Card.Text>{blogcard.shortText}</Card.Text>
                                    <div style={{ display: 'flex', gap: '20px'}}>
                                        <Button variant='outline-primary'>Get Ticket</Button>
                                        <Card.Subtitle> Price: <br/> ${blogcard.price}</Card.Subtitle>
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
        </div>
        
    )
}

const EventCards = () => {
  return (
    <div className='EventCards' id='blog'>
        <Cards />
    </div>
  )
}

export default EventCards