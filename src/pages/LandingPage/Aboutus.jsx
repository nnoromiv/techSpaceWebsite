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
              RunTechSpace community is a group of people who are interested in technology and innovation, and who come together to share knowledge, collaborate on projects, network, or participate in events related to technology.
              We bring together people from a variety of backgrounds and skill levels, including students, professionals, entrepreneurs, and enthusiasts. Our communities may be focused on specific technologies or industries.
              We provide a valuable space for individuals to learn from one another, share their experiences and expertise, and collaborate on innovative projects that have the potential to impact the world in a positive way.
            </p>
            <MyButton Innertext='Get started' />
        </div>
    </div>
  )
}

export default Aboutus