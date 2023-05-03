import {useEffect, useState} from 'react'
import { Card, Button, Form, Modal } from 'react-bootstrap'
import "./styles/EventCards.scss"
import styled from 'styled-components'

const EventCard = styled.header`
        margin: 40px 50px !important;
        display: grid;
        grid-template-columns: 30% 30% 30%;
        gap: 20px;
        overflow-x: scroll;
        overflow-y: hidden;

        
    @media only screen and (max-width: 1025px){
        margin: 40px 40px !important;              
    }

    @media only screen and (max-width: 769px){
        margin: 40px 30px !important;     
        grid-template-columns: 50% 50% ;  
        gap: 5px; 
    }

    @media only screen and (max-width: 426px){   
        margin: 40px 0 !important;
        grid-template-columns: 100%;   
    }
`;

const DateContainerDiv = styled.div`
    padding: 15px 30px;
    width: fit-content;
    border-radius: 50%;
    margin: -30px 0 0 -30px;
    position: absolute;
    z-index: 1;

    @media only screen and (max-width: 1025px){
        padding: 15px 30px;
    }

    @media only screen and (max-width: 769px){
        padding: 10px 25px;
    }

    @media only screen and (max-width: 426px){ 
        margin: -20px 0 0 -10px;   
    }
`;

const BLOGCARD = [
    {
        image: 'blogimg.png',
        price: '3000',
        title: 'Story Headline',
        shortText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus ut dictum urna faucibus elit feugiat. Et dignissim in ut tellus vitae venenatis eget varius vestibulum.',
    },
    {
        image: 'blogimg.png',
        price: '40000',
        title: 'Story Headline2',
        shortText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus ut dictum urna faucibus elit feugiat. Et dignissim in ut tellus vitae venenatis eget varius vestibulum.',
    },
    {
        image: 'blogimg.png',
        price: '9000',
        title: 'Story Headline3',
        shortText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus ut dictum urna faucibus elit feugiat. Et dignissim in ut tellus vitae venenatis eget varius vestibulum.',
    },
    {
        image: 'blogimg.png',
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
        <EventCard className='Card'>
                {
                    BLOGCARD.map((blogcard, idx) => {
                        return (
                            <div key={idx}>
                            <Card>
                                <DateContainerDiv className='DateContainer'>
                                    <h1>20<span>th</span></h1>
                                    <h3>May</h3>
                                </DateContainerDiv>
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
                                <Modal show={selectedEventIndex === idx} fullScreen scrollable onHide={()=> setSelectedEventIndex(null)}>
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
        </EventCard>
        
    )
}

const EventCards = () => {
  return (
    <header className='EventCards' id='blog' style={{ margin: '80px 0 0 0'}}>
        <Cards />
    </header>
  )
}

export default EventCards