import React from 'react'
import "./styles/Footer.scss"
import { Button, InputGroup } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Nav } from 'react-bootstrap'
import { SECONDARYNAVBARMENU } from './Navbar'

const InstagramIcon = 'https://img.icons8.com/material-outlined/ffffff/30/instagram-new.png'
const GithubIcon = 'https://img.icons8.com/ios-glyphs/ffffff/30/github.png'
const TwitterIcon = 'https://img.icons8.com/ios-filled/ffffff/30/null/twitter.png'
const LinkedInIcon = 'https://img.icons8.com/ios-filled/ffffff/30/linkedin-2.png'
const FacebookIcon = 'https://img.icons8.com/ios-glyphs/ffffff/30/facebook-f.png'

const SOCIALS = [
    {
        name: 'instagram',
        src: `${InstagramIcon}`,
        hrf: ''
    },
    {
        name: 'github',
        src: `${GithubIcon}`,
        hrf: ''
    },
    {
        name: 'twitter',
        src: `${TwitterIcon}`,
        hrf: ''
    },
    {
        name: 'linkedin',
        src: `${LinkedInIcon}`,
        hrf: ''
    },
    {
        name: 'facebook',
        src: `${FacebookIcon}`,
        hrf: ''
    }
]

function Socials(){
    return (
        <div id='nav-socials' >
        {
        SOCIALS.map((social) => {
            return (
                <div className={social.name} key={social.name} style={{ padding: '0 10px'}}>
                    <a href={social.hrf} >
                    <img srcSet='' alt={social.name} src={social.src} color='white'/>  
                    </a>                                
                </div>
            )
        })
        }
        </div>
    )
}

const FooterHead = () => {
    return(
        <div className='FooterHead'>
        <div className='GridFooterHead'>
            <div className='Getintouch'>
                <div>
                    <h3>Want to become part of our team ?</h3>
                    <p>Get in touch</p>
                </div>

                <div>
                    <h3>Want to be part of a stack ?</h3>
                    <p>Check out our stacks and<br /> courses</p>
                </div>
            </div>
                <div>
                    <p>Our Headquarter</p>
                    <h3>Redeemers University Ede,<br />Osun State, Nigeria</h3>
                </div>
                <div className='Mailus'>
                    <h3>Keep up with news from us</h3>
                    <InputGroup id='email'>
                        <Form.Control placeholder='Email'/>
                    </InputGroup>
                    <InputGroup id='checkbox'>
                    <InputGroup.Checkbox />
                        Sign up to our Newsletter, to receive updates on the latest news releases and special offers.
                    </InputGroup>
                    <Button>Subscribe</Button>
                </div>
        </div>
    </div>
    )
}

const FooterTail = () => {
    return(
        <div className='FooterTail'>
            <h2>© 2023</h2>
           <div className='FooterMenu'>
           {
                SECONDARYNAVBARMENU.slice(1,2).map(navbarmenu => {
                    return(
                        <Nav variant='pills' activeKey='/home' color='#C3CEE7' key={navbarmenu.href} >
                            <Nav.Item>
                                <Nav.Link href={navbarmenu.href} eventKey={navbarmenu.href}>{navbarmenu.link}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    )
                })
            }
            {
                SECONDARYNAVBARMENU.slice(7,9).map(navbarmenu => {
                    return(
                        <Nav variant='pills' activeKey='/home' color='#C3CEE7' key={navbarmenu.href} >
                            <Nav.Item>
                                <Nav.Link href={navbarmenu.href} eventKey={navbarmenu.href}>{navbarmenu.link}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    )
                })
            }
            {
                SECONDARYNAVBARMENU.slice(12,).map(navbarmenu => {
                    return(
                        <Nav variant='pills' activeKey='/home' color='#C3CEE7' key={navbarmenu.href} >
                            <Nav.Item>
                                <Nav.Link href={navbarmenu.href} eventKey={navbarmenu.href}>{navbarmenu.link}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    )
                })
            }
           </div>
           <Socials />
        </div>
    )
}

const Footer = () => {
  return (
    <>
        <FooterHead />
        <FooterTail />
    </>
  )
}

export default Footer