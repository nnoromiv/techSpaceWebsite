import React, {useState} from 'react'
import { Button, Carousel, Form, Modal } from 'react-bootstrap'
import './styles/EventBody.scss'
import styled from 'styled-components'

const EVENTIMAGE = [
    {
        key: 'first-slide',
        captionTitle: 'Tech Fest',
        price: 50000,
        captionText: 'In the second edition, we want to look at the education needed to get into tech and also the various role that doesn’t involves coding. We are also going to talking about our present educational system and the various things that affects students or people going into tech.',
        image: 'https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg'
    }
]

const DateContainerDiv = styled.div`
    padding: 20px 40px;
    width: fit-content;
    border-radius: 50%;
    margin: -50px 0 0 10px;
    position: absolute;
    z-index: 1;

    @media only screen and (max-width: 1025px){     
        padding: 15px 30px;
    }
    @media only screen and (max-width: 769px){ 
        padding: 10px 25px;
    }
    @media only screen and (max-width: 426px){ 
        margin: -20px 0 0 5px;
    }  
`


function EventBody() {
    const [ticketNumber, setTicketNumber] = useState(1);
    const [show, setShow] = useState(false)

    function handler(breakpoint){
        setShow(true)
    }
  return (
    <header className='EventBody'>
        <DateContainerDiv className='DateContainer'>
            <h1>17<span>th</span></h1>
            <h3>May</h3>
        </DateContainerDiv>
    <Carousel className='Carousel' fade>
    {
        EVENTIMAGE.map(eventcarousel => {
            return(
                <Carousel.Item key={eventcarousel.key}>
                    <img alt={eventcarousel.key} src={eventcarousel.image} srcSet='' />
                    <Carousel.Caption>
                        <h3>{eventcarousel.captionTitle}</h3>
                        <p>{eventcarousel.captionText}</p>                        
                        <h2>Price: ₦{eventcarousel.price} </h2>
                        <Button onClick={()=> handler(true)}>Get Ticket</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })
    }
    </Carousel>
    <Modal show={show} fullscreen scrollable onHide={()=> setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Tech Fest</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h1>Description</h1>
                <p>The first tech fest, event was themed: A journey into tech, which showcased various speakers telling us of their journey into tech. In the second edition, we want to look at the education needed to get into tech and also the various role that doesn’t involves coding. We are also going to talking about our present educational system and the various things that affects students or people going into tech. This tech fest aims to get people informed and involved in tech but we wouldn’t be limiting our view to just tech as we also hope to look at other topic relating to tech, topics such finances, mental health and fitness among other would be considered.</p>
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
                <h2 id="TotalPrice">₦{ ticketNumber * 50000 }</h2>
                <Button id="TicketCheckoutButton">Get Ticket</Button>
            </Modal.Body>
    </Modal>
    </header>
    
  )
}

export default EventBody