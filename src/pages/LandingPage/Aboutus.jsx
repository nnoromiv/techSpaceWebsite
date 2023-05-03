import { MyButton } from './Content'
import "./styles/Aboutus.scss"
import styled from 'styled-components'

const AboutUsHeader = styled.header`
    margin: 80px 0 0 0;
    padding: 0 50px;
    display: flex;
    gap: 57px;

    @media only screen and (max-width: 1025px){
        gap: 47px;
    }

    @media only screen and (max-width: 769px){
        gap: 37px;
        padding: 0 20px;
    }

    @media only screen and (max-width: 686px){
        flex-direction: column;
        gap: 37px;
        padding: 0 20px;
    }

    @media only screen and (max-width: 426px){
        margin: 50px 0 0 0;
        padding: 0 20px;
    }
`
const AboutUsImage = styled.img`
    max-width: 715px;
    max-height: 565px;
    object-fit: cover;
    border-radius: 50% 50% 8% 92% / 62% 91% 9% 38%;

    @media only screen and (max-width: 1025px){
      width: 615px;
      height: 505px;
    }

    @media only screen and (max-width: 769px){
      width: 505px;
      height: 445px;
    }

    @media only screen and (max-width: 686px){
      width: 91vw;
      height: 445px;
    }

    @media only screen and (max-width: 426px){
      width: 91vw;
      height: 400px;
    }
`
const WhoWeAreDiv = styled.div`
    text-align: right;
`
const WhoWeAreH2 = styled.h2`
    font-size: 48px;
    padding: 0 0 30px 0;

    @media only screen and (max-width: 1025px){
      font-size: 38px;               
    }

    @media only screen and (max-width: 769px){
      font-size: 30px;   
      padding: 0 0 20px 0;            
    }

    @media only screen and (max-width: 686px){
      font-size: 40px;   
    }

    @media only screen and (max-width: 426px){
      font-size: 35px;                                            
    }

    @media only screen and (max-width: 376px){
      font-size: 30px;                                         
    }

`
const WhoWeAreP = styled.p`
    font-size: 18px;
    padding: 0 0 30px 0;

    @media only screen and (max-width: 1025px){
      font-size: 16px;
    }

    @media only screen and (max-width: 769px){
      font-size: 14px;
      padding: 0 0 20px 0;
    }

    @media only screen and (max-width: 686px){
      font-size: 16px;
      padding: 0 0 10px 0;
    }

    @media only screen and (max-width: 426px){
      font-size: 16px;                
    }

    @media only screen and (max-width: 376px){
      font-size: 14px;                
    }
`

const Aboutus = () => {
  return (
    <AboutUsHeader className='Aboutus'>
        <AboutUsImage src='tempimg.png' alt='about-us' srcSet='' />
        <WhoWeAreDiv className='Whoweare'>
            <WhoWeAreH2>Who are we?</WhoWeAreH2>
            <WhoWeAreP>
              RunTechSpace community is a group of people who are interested in technology and innovation, and who come together to share knowledge, collaborate on projects, network, or participate in events related to technology.
              We bring together people from a variety of backgrounds and skill levels, including students, professionals, entrepreneurs, and enthusiasts. Our communities may be focused on specific technologies or industries.
              We provide a valuable space for individuals to learn from one another, share their experiences and expertise, and collaborate on innovative projects that have the potential to impact the world in a positive way.
            </WhoWeAreP>
            <MyButton Innertext='Get started' />
        </WhoWeAreDiv>
    </AboutUsHeader>
  )
}

export default Aboutus