import React from 'react'
import { MyButton } from './Content'
import { Icon } from '@iconify/react';
import "./styles/Stacks.scss"

const FrontendStack = () => {
    return(
        <div className='Frontend'>
            <img alt='frontend' srcSet='' src='images/frontendSVG.png' />
            <div className='info'>
                <div className='header'>
                    <Icon icon="ic:twotone-library-add-check" color="#002087" width="34" height="34" />
                    <h2>Frontend Development Stack</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. At quam et hendrerit iaculis varius. Id nulla urna amet odio a pellentesque.</p>
                <MyButton Innertext='View more'/>
            </div>
        </div>
    )
}

const UIUXStack = () => {
    return(
        <div className='UIUX'>
            <img alt='UIUX' srcSet='' src='images/UIUXSVG.png' />
            <div className='info'>
                <div className='header'>
                    <Icon icon="ic:twotone-library-add-check" color="#002087" width="34" height="34" />
                    <h2>UIUX Development Stack</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. At quam et hendrerit iaculis varius. Id nulla urna amet odio a pellentesque.</p>
                <MyButton Innertext='View more'/>
            </div>
        </div>
    )
}

const BackendStack = () => {
    return(
        <div className='Backend'>
            <img alt='backend' srcSet='' src='images/backendSVG.png' />
            <div className='info'>
                <div className='header'>
                    <Icon icon="ic:twotone-library-add-check" color="#002087" width="34" height="34" />
                    <h2>Backend Development Stack</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. At quam et hendrerit iaculis varius. Id nulla urna amet odio a pellentesque.</p>
                <MyButton Innertext='View more'/>
            </div>
        </div>
    )
}

const DataScienceStack = () => {
    return(
        <div className='DataScience'>
            <img alt='DataScience' srcSet='' src='images/DataScienceSVG.png' />
            <div className='info'>
                <div className='header'>
                    <Icon icon="ic:twotone-library-add-check" color="#002087" width="34" height="34" />
                    <h2>Data Science Stack</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. At quam et hendrerit iaculis varius. Id nulla urna amet odio a pellentesque.</p>
                <MyButton Innertext='View more'/>
            </div>
        </div>
    )
}

const CybersecurityStack = () => {
    return(
        <div className='Cybersecurity'>
            <img alt='Cybersecurity' srcSet='' src='images/CybersecuritySVG.png' />
            <div className='info'>
                <div className='header'>
                    <Icon icon="ic:twotone-library-add-check" color="#002087" width="34" height="34" />
                    <h2>Cybersecurity Stack</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. At quam et hendrerit iaculis varius. Id nulla urna amet odio a pellentesque.</p>
                <MyButton Innertext='View more'/>
            </div>
        </div>
    )
}

const Stacks = () => {
  return (
    <div className='Stacks' id='about-stacks'>
        <h1>Stacks</h1>
        <FrontendStack />
        <UIUXStack />
        <BackendStack />
        <DataScienceStack />
        <CybersecurityStack />
    </div>
  )
}

export default Stacks