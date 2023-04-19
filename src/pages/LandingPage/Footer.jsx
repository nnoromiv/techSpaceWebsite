import React from 'react'
import "./styles/Footer.scss"
import { Button, InputGroup } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Nav } from 'react-bootstrap'
import { SECONDARYNAVBARMENU } from './Navbar'
import styled from 'styled-components';

const FooterHeader = styled.div`
    margin: 10px 0 0 0;
    padding: 40px;
    align-items: center;

    @media only screen and (max-width: 601px){
        padding: 20px;
    }
`
const GridFooterHeadDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media only screen and (max-width: 769px){
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }

    @media only screen and (max-width: 601px){
        grid-template-columns: repeat(1, 1fr);
        gap: 30px;
    }
`
const GetintouchDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;

    @media only screen and (max-width: 769px){
        gap: 50px;
    }
`
const H3 = styled.h3`
    font-size: 22px;
    font-weight: 600;

    @media only screen and (max-width: 769px){
        font-size: 20px;
    }
`
const P = styled.p`
    font-size: 18px;
    opacity: 0.7;
    text-decoration: underline;

    @media only screen and (max-width: 769px){
        font-size: 15px;
    }
`
const FooterTailDiv = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 769px){
        display: grid;
        grid-template-columns: 10% 60% 30%;
        gap: 10px;
    }
    @media only screen and (max-width: 651px){
        padding: 20px;
        grid-template-columns: 30% 70% ;
    }
    @media only screen and (max-width: 426px){
        padding: 10px;
        grid-template-columns: 100% ;
    }
`
const H2 = styled.h2`
    font-weight: 600;
    font-size: 18px;
    margin: 10px 0 0 0;

    @media only screen and (max-width: 769px){
        margin: 5px 0 0 0;
        font-size: 10px;
    }
    @media only screen and (max-width: 651px){
        margin: 5px 0 0 10px;
    }
`

const InstagramIcon = 'https://img.icons8.com/material-outlined/ffffff/30/instagram-new.png'
const GithubIcon = 'https://img.icons8.com/ios-glyphs/ffffff/30/github.png'
const TwitterIcon = 'https://img.icons8.com/ios-filled/ffffff/30/null/twitter.png'
const LinkedInIcon = 'https://img.icons8.com/ios-filled/ffffff/30/linkedin-2.png'
const YoutubeIcon = 'https://img.icons8.com/ios-filled/ffffff/40/youtube-play--v1.png'

const SOCIALS = [
    {
        name: 'instagram',
        src: `${InstagramIcon}`,
        hrf: 'https://instagram.com/runtechspace?igshid=YmMyMTA2M2Y='
    },
    {
        name: 'github',
        src: `${GithubIcon}`,
        hrf: 'https://github.com/RUN-TECH-SPACE'
    },
    {
        name: 'twitter',
        src: `${TwitterIcon}`,
        hrf: 'https://twitter.com/RunTechSpace_?t=GAP34g337qfcCsQYbS_cCw&s=09'
    },
    {
        name: 'linkedin',
        src: `${LinkedInIcon}`,
        hrf: ''
    },
    {
        name: 'youtube',
        src: `${YoutubeIcon}`,
        hrf: ''
    }
]

function Socials(){
    return (
        <header id='nav-socials' >
        {
        SOCIALS.map((social) => {
            return (
                <div className={social.name} key={social.name} style={{ padding: '0 10px'}}>
                    <a href={social.hrf} target='_blank' rel='noreferrer'>
                    <img srcSet='' alt={social.name} src={social.src} color='white'/>  
                    </a>                                
                </div>
            )
        })
        }
        </header>
    )
}

const FooterHead = () => {
    return(
        <FooterHeader className='FooterHead'>
        <GridFooterHeadDiv>
            <GetintouchDiv className='Getintouch'>
                <div>
                    <H3>Want to become part of our team ?</H3>
                    <P>Get in touch</P>
                </div>

                <div>
                    <H3>Want to be part of a stack ?</H3>
                    <a href='#about-stacks' style={{textDecoration: 'none', color: 'white',}}>
                        <P>Check out our stacks and<br /> courses</P>
                    </a>
                </div>
            </GetintouchDiv>
                <div>
                    <P>Our Headquarter</P>
                    <H3>Redeemers University Ede,<br />Osun State, Nigeria</H3>
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
        </GridFooterHeadDiv>
    </FooterHeader>
    )
}

const FooterTail = () => {
    return(
        <FooterTailDiv className='FooterTail'>
            <H2>© 2023</H2>
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
        </FooterTailDiv>
    )
}

const Footer = () => {
  return (
    <header>
        <FooterHead />
        <FooterTail />
    </header>
  )
}

export default Footer