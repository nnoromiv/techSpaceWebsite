import React, {useEffect, useState} from 'react'
import { Card, Button, Form, Modal } from 'react-bootstrap'
import "./styles/EventCards.scss"

const BLOGCARD = [
    {
        image: 'images/blogimg.png',
        price: '3000',
        title: 'Story Headline',
        shortText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus ut dictum urna faucibus elit feugiat. Et dignissim in ut tellus vitae venenatis eget varius vestibulum.',
    },
    {
        image: 'images/blogimg.png',
        price: '40000',
        title: 'Story Headline2',
        shortText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus ut dictum urna faucibus elit feugiat. Et dignissim in ut tellus vitae venenatis eget varius vestibulum.',
    },
    {
        image: 'images/blogimg.png',
        price: '9000',
        title: 'Story Headline3',
        shortText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus ut dictum urna faucibus elit feugiat. Et dignissim in ut tellus vitae venenatis eget varius vestibulum.',
    },
    {
        image: 'images/blogimg.png',
        price: '10000',
        title: 'Story Headline4',
        shortText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus ut dictum urna faucibus elit feugiat. Et dignissim in ut tellus vitae venenatis eget varius vestibulum.',
    }
]


function Cards(){
    const [ticketNumber, setTicketNumber] = useState(1);
    const [selectedEventIndex, setSelectedEventIndex] = useState(null)

    const selectedEvent = selectedEventIndex === null 
    ? 
    null 
    :  
    BLOGCARD[selectedEventIndex]

    function handleOpenModal(index) {
        setSelectedEventIndex(index)
        setTicketNumber(1)
    }

    useEffect((

    ) => {},
    [selectedEventIndex, ticketNumber])

    return(        
        <div className='Card'>
                {
                    BLOGCARD.map((blogcard, idx) => {
                        return (
                            <div key={idx}>
                            <Card>
                                <div className='DateContainer'>
                                    <h1>20<span>th</span></h1>
                                    <h3>May</h3>
                                </div>
                                <Card.Img variant='top' src={blogcard.image}/>
                                <Card.Body>
                                    <Card.Title>{blogcard.title}</Card.Title>
                                    <Card.Text>{blogcard.shortText}</Card.Text>
                                    <div style={{ display: 'flex', gap: '20px'}}>
                                        <Button variant='outline-primary' onClick={()=> handleOpenModal(idx)}>Get Ticket</Button>
                                        <Card.Subtitle> Price: <br/> ₦{blogcard.price}</Card.Subtitle>
                                    </div>
                                </Card.Body>
                            </Card>
                            {
                                selectedEventIndex === null
                                ? 
                                <div></div>
                                :
                                <Modal show={selectedEventIndex === idx} fullscreen scrollable onHide={()=> setSelectedEventIndex(null)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{selectedEvent.title}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <h1>Description</h1>
                                    <p>{selectedEvent.shortText}</p>
                                    <div className="Ticketing">
                                        <Form.Label htmlFor="TicketAmount">Number of Ticket</Form.Label>
                                        <Form.Control 
                                            type="number"
                                            min="1" max="10" placeholder={ticketNumber}
                                            id="TicketAmount"
                                            aria-describedby="ticketAmountHelpBlock"
                                            onChange={(e)=> setTicketNumber(e.target.value)}
                                        />
                                        <Form.Text id="ticketAmountHelpBlock" muted>Minimum is 1 and Maximum is 10</Form.Text>

                                        <Form.Control 
                                            type="number"
                                            placeholder="Enter code"
                                            id="TicketCode"
                                            aria-describedby="ticketCodeHelpBlock"
                                        />
                                        <Form.Text id="ticketCodeHelpBlock" muted>RUN-TECH SPACE code</Form.Text>
                                    </div>
                                    <h2 id="TotalPrice">₦{ ticketNumber * selectedEvent.price }</h2>
                                    <Button id="TicketCheckoutButton">Get Ticket</Button>
                                </Modal.Body>
                            </Modal>
                            }
                            </div>                            
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