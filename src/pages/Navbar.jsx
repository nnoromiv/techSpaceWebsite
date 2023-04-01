import Button from 'react-bootstrap/Button'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./styles/Navbar.scss"
import { Divider } from '@mui/material'
import { Nav, NavDropdown } from 'react-bootstrap'
import { slide as Menu } from 'react-burger-menu'

const Logo = () => {
    return (
        <img src='images/Logo.png' alt="logo" srcSet="" />
    )
}

const PrimaryNavbar = () => {
    return(
        <div className='PrimaryNavbar'>
        <Logo />
        <div className='SearchBar'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='faMagnifyingGlass' />
            <input placeholder='Search' type="search"/>
        </div>
        <div className='AuthButton'>
            <Button variant='primary' >Sign in</Button>
            <Button variant='outline-primary'>Log in</Button> 
        </div>
        <HamBurgerMenu />
    </div>
    )
}

const HamBurgerMenu = () => {
    return (
        <div className='HamBurgerMenu'>
            <Menu right width={'100%'} >
                <SecondaryNavbar className='HamBurgerSecondaryNavbar' />
                <div className='AuthButton'>
                    <Button variant='primary' >Sign in</Button>
                    <Button variant='outline-primary'>Log in</Button> 
                </div>
            </Menu>
        </div>
    )
}

export const SECONDARYNAVBARMENU = [
    {
        href: '/',
        link: 'Home'
    },
    {
        href: '/tech-store',
        link: 'Tech store'
    },
    {
        href: '/ai-data-science',
        link: 'AI/Data Science'
    },
    {
        href: '/backend',
        link: 'Backend Development'
    },
    {
        href: '/cybersecurity',
        link: 'Cybersecurity'
    },
    {
        href: '/frontend',
        link: 'Frontend Development'
    },
    {
        href: '/UIUX',
        link: 'UI/UX Development'
    },
    {
        href: '#blog',
        link: 'Blogs'
    },
    {
        href: '/events',
        link: 'Events'
    },
    {
        href: '/gallery',
        link: 'Gallery'
    },
    {
        href: '/about-us',
        link: 'About us'
    },
    {
        href: '#FAQ',
        link: 'FAQ'
    },
    {
        href: '#about-stacks',
        link: 'About Stacks'
    },
    {
        href: '/contact',
        link: 'Contact'
    },
]

const SecondaryNavbar = (props) => {
    return (
        <Nav className={props.className}>
        {
            SECONDARYNAVBARMENU.slice(0,2).map(navbarmenu => {
                return(
                    <Nav variant='tabs' activeKey='/' color='#C3CEE7' key={navbarmenu.href} >
                        <Nav.Item>
                            <Nav.Link href={navbarmenu.href} eventKey={navbarmenu.href}>{navbarmenu.link}</Nav.Link>
                        </Nav.Item>
                    </Nav>
                )
            })
        }
        <NavDropdown title='Stacks'>
           {
            SECONDARYNAVBARMENU.slice(2,7).map(navbarmenu => {
                return(
                    <NavDropdown.Item key={navbarmenu.href}  href={navbarmenu.href} >
                        {navbarmenu.link}
                    </NavDropdown.Item>
                )
            })
           }
        </NavDropdown>
        {
            SECONDARYNAVBARMENU.slice(7,12).map(navbarmenu => {
                return(
                    <Nav variant='tabs' defaultActiveKey="/home" color='#C3CEE7' key={navbarmenu.href}>
                        <Nav.Item>
                            <Nav.Link href={navbarmenu.href}>{navbarmenu.link}</Nav.Link>
                        </Nav.Item>
                    </Nav>
                )
            })
        }
        </Nav>
    )
}

const Navbar = () => {
  return (
    <header>
        <PrimaryNavbar />
        <Divider variant="middle" color='#E5E7EB'/>
        <SecondaryNavbar className='SecondaryNavbar' />
    </header>
  )
}

export default Navbar