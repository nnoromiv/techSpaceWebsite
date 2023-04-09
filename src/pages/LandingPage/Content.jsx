import React from 'react'
import { Button } from 'react-bootstrap'
import "./styles/Content.scss"

export const MyButton = (props) => {
  return(
    <Button>{props.Innertext}</Button>
  )
}

const Content = () => {
  return (
    <div className='Content' id="contact">
        <h1>Tech for the <span>young</span></h1>
        <p>
        The aim of tech education for young people is to prepare them for a world that is increasingly driven by technology<br />
        we equips young people with the tools and knowledge they need to thrive in a rapidly evolving digital landscape.
        </p>
        <MyButton Innertext='Get started' />
    </div>
  )
}

export default Content