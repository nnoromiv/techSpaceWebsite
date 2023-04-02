import { Divider } from '@mui/material'
import React from 'react'
import { Accordion } from 'react-bootstrap'
import "./styles/FAQ.scss"

const ACCORDION = [
    {
        key: '0',
        question: 'What’s the best thing about RunTech Space ?',
        answer: ' Students that register under the available stacks are taught to the peak and trained to work in a team.'
    },
     {
        key: '1',
        question: 'How do I register for a stack ?',
        answer: ''
    },
    {
        key: '2',
        question: 'What should I do if I don’t receive an information ?',
        answer: ''
    },
    {
        key: '3',
        question: 'Are students to pay fees monthly ?',
        answer: ''
    },
    {
        key: '4',
        question: 'What type of resources are available ?',
        answer: ''
    },
    {
        key: '5',
        question: 'Can I be in more than one stack at the same time ?',
        answer: ''
    },
]

function MyAccordion (){
    return(
        <Accordion>
            {
                ACCORDION.map(accordion => {
                    return(
                        <Accordion.Item eventKey={accordion.key} key={accordion.key}>
                                <Accordion.Header>
                                    {accordion.question}
                                </Accordion.Header>
                                <Accordion.Body>
                                    {accordion.answer}
                                </Accordion.Body>
                        </Accordion.Item>
                    )
                })
            }
        </Accordion>
    )
}

const FAQ = () => {
  return (
    <div className='FAQ' id='FAQ'>
        <h1>Frequently Asked Questions</h1>
        <Divider variant='middle' color='black'/>
        <MyAccordion />
    </div>
  )
}

export default FAQ