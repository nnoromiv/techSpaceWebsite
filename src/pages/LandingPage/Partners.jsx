import "./styles/Partners.scss"
import styled from 'styled-components'

const PartnersHeader = styled.header`
    margin: 100px 0 0 0;
    padding: 50px 100px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 769px){
        padding: 30px;
    }

    @media only screen and (max-width: 666px){
        flex-direction: column;
        text-align: center;
        gap: 30px;
    }
`
const PartnerH1 = styled.h1`
    font-size: 56px;
    margin: 20px 0 0 0;

  @media only screen and (max-width: 769px){
    font-size: 50px;
  }

  @media only screen and (max-width: 666px){
    font-size: 50px;
  }

  @media only screen and (max-width: 350px){
    font-size: 40px;
  }
`
const PartnerLogoDiv = styled.div`
  display: flex;
  gap: 120px;

  @media only screen and (max-width: 769px){
    gap: 70px;
  }

  @media only screen and (max-width: 666px){ 
    justify-content: space-between;
  }
`
const PartnerLogoImage = styled.img`
  width: 127px;
  height: 127px;

  @media only screen and (max-width: 769px){
    width: 100px;
    height: 100px;
  }

  @media only screen and (max-width: 666px){ 
    width: 100px;
    height: 100px;
  }
`

const Partners = () => {
  return (
    <PartnersHeader className='Partners'>
        <PartnerH1>Our partners</PartnerH1>
        <PartnerLogoDiv className='PartnersLogo'>
            <PartnerLogoImage alt='' srcSet='' src='runalumni.png' />
            <PartnerLogoImage alt='' srcSet='' src='hositech.png' />
        </PartnerLogoDiv>
    </PartnersHeader>
  )
}

export default Partners