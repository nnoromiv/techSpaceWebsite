import React from 'react'
import { Button } from 'react-bootstrap'
import "./styles/Banner.scss"

const Banner = () => {
  return (
    <div className='Banner'>
        <h1> Ready to dive in ? <br /> <span>Become a member today</span></h1>
        <Button>Become a member</Button>
    </div>
  )
}

export default Banner