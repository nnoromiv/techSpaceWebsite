import Button from 'react-bootstrap/Button'
import "./styles/Navbar.scss"
import { Divider } from '@mui/material'
import { Nav, NavDropdown } from 'react-bootstrap'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import {SECONDARYNAVBARMENU} from '../../Constants'
import { useState } from 'react'

const LogoImg = styled.img`
    width: 144px;
    height: 61px;
    object-fit: cover;
`

const PrimaryNavbarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 40px 0 40px;
    height: 100%;

    @media only screen and (max-width: 426px){
        padding: 10px 20px 0 20px;
    }
`

const AuthButtonDiv =styled.div`
    height: 100%;
    display: flex;

    @media only screen and (max-width: 693px){
        display: none;
    }
    @media only screen and (max-width: 426px){
            margin: 10px 0 0 0;
    }
`

const Logo = () => {
    return (
        <LogoImg src='logo.svg' alt="logo" srcSet="" />
    )
}

const AuthButton = () => {
    return(
        <AuthButtonDiv >
            <Button variant='primary' href='/signup'>Sign up</Button>
            <div style={{ opacity: 0}}> 1 </div>
            <Button variant='outline-primary' href='/login'>Log in</Button> 
        </AuthButtonDiv>
    )
}


const PrimaryNavbar = () => {
    return(
        <PrimaryNavbarDiv className='PrimaryNavbar'>
        <Logo />
        <AuthButton />
        <HamBurgerMenu />
    </PrimaryNavbarDiv>
    )
}

const HamBurgerMenu = () => {
    return (
        <div className='HamBurgerMenu'>
            <Menu right width={'100%'} >
                <SecondaryNavbar className='HamBurgerSecondaryNavbar' />
                <div style={{ display: 'flex'}}>
                    <Button variant='primary' href='/signup'>Sign up</Button>
                    <div style={{ opacity: 0}}> 1 </div>
                    <Button variant='outline-primary' href='/login'>Log in</Button> 
                </div>
            </Menu>
        </div>
    )
}

const SecondaryNavbar = (props) => {
    const [active, setActive] = useState(props.Active)
    return (
        <Nav className={props.className} defaultActiveKey='/' activeKey={active} color='black'  onSelect={(selectedKey) => setActive(selectedKey)}>
        {
            SECONDARYNAVBARMENU.slice(0,2).map(navbarmenu => {
                return(
                    <Nav.Item key={navbarmenu.href}>
                        <Nav.Link href={navbarmenu.href} eventKey={navbarmenu.href}>{navbarmenu.link}</Nav.Link>
                    </Nav.Item>
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
                    <Nav.Item key={navbarmenu.href}>
                        <Nav.Link href={navbarmenu.href}>{navbarmenu.link}</Nav.Link>
                    </Nav.Item>
                )
            })
        }
        </Nav>
    )
}

SecondaryNavbar.propTypes = {
    className: PropTypes.string,
    Active: PropTypes.string
}

const Navbar = (props) => {
  return (
    <header>
        <PrimaryNavbar />
        <Divider variant="middle" color='#E5E7EB'/>
        <SecondaryNavbar className='SecondaryNavbar' Active={props.navActive}/>
    </header>
  )
}

Navbar.propTypes = {
    navActive: PropTypes.string
}

export default Navbar