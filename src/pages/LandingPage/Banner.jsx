import React from 'react'
import { Button } from 'react-bootstrap'
import "./styles/Banner.scss"
import styled from 'styled-components'

const BannerDiv = styled.div`
    padding: 40px 100px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1025px){
      padding: 40px 80px;
    }
    @media only screen and (max-width: 768px){
      padding: 40px 50px;
    }
    @media only screen and (max-width: 600px){
      padding: 40px 30px;
    }
    @media only screen and (max-width: 426px){
      padding: 40px 20px;
      flex-direction: column;
    }
`
const BannerH1 = styled.h1`
    font-size: 40px;
    font-weight: 800;

    @media only screen and (max-width: 769px){
      font-size: 36px;
    }
    @media only screen and (max-width: 600px){
      font-size: 30px;
    }
    @media only screen and (max-width: 426px){
      font-size: 24px;
    }
`

const Banner = () => {
  return (
    <BannerDiv className='Banner'>
        <BannerH1> Ready to dive in ? <br /> <span>Become a member today</span></BannerH1>
        <Button>Become a member</Button>
    </BannerDiv>
  )
}

export default Banner