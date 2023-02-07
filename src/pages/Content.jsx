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
    <div className='Content'>
        <h1>Tech for the <span>young</span></h1>
        <p>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat<br /> commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. </p>
        <MyButton Innertext='Get started' />
    </div>
  )
}

export default Content