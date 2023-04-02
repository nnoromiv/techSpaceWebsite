import React from 'react'
import { MyButton } from './Content'
import "./styles/Aboutus.scss"

const Aboutus = () => {
  return (
    <div className='Aboutus'>
        <img src='images/tempimg.png' alt='about-us' srcSet='' />
        <div className='Whoweare'>
            <h2>Who are we?</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur. Pulvinar rutrum suscipit nulla neque lectus malesuada fames elementum. Pretium nam est nunc amet aenean. Fringilla cursus massa est consequat non purus sit sit tempor. Vitae purus urna dignissim eget. Vitae feugiat ac convallis elementum quam nunc faucibus semper. Amet purus dignissim massa mattis vitae orci rhoncus. Enim venenatis mollis .
            </p>
            <MyButton Innertext='Get started' />
        </div>
    </div>
  )
}

export default Aboutus