import { Divider } from '@mui/material'
import React from 'react'
import { Accordion } from 'react-bootstrap'
import "./styles/FAQ.scss"
import styled from 'styled-components'

const FAQHeader = styled.header`
    margin: 80px 0 0 0;
    padding: 50px 0 80px 0;
    text-align: center;

    @media only screen and (max-width: 600px){
        margin: 40px 0 0 0;
    }
`
const FAQH1 = styled.h1`
    font-size: 56px;
    font-weight: 800;

    @media only screen and (max-width: 1025px){
        font-size: 52px;
    }
    @media only screen and (max-width: 769px){
        font-size: 48px;
    }
    @media only screen and (max-width: 600px){
        font-size: 38px;
    }
    @media only screen and (max-width: 426px){
        font-size: 32px;
    }
`

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
    <FAQHeader className='FAQ' id='FAQ'>
        <FAQH1>Frequently Asked Questions</FAQH1>
        <Divider variant='middle' color='black'/>
        <MyAccordion />
    </FAQHeader>
  )
}

export default FAQ