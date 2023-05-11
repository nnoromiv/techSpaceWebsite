import "./styles/TechBanner.scss"
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StoreBannerDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    border-radius: 33px;
    overflow: hidden;
    position: relative;

    @media only screen and (max-width: 676px){ 
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        padding: 20px;
        margin: 20px;
    }
`
const OuterBand = styled.div`
    width: 341px;
    height: 341px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 170px;
    position: absolute;
    bottom: 0;
`
const InnerBand = styled.div`
    width: 291px;
    height: 291px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    position: relative;
`
const Band = styled.div`
width: 241px;
height: 241px;
border-radius: inherit;
`
const FittextDiv = styled.div`
    margin: 80px 0 0;
    text-align: center;

    @media only screen and (max-width: 769px){ 
        margin: 60px 0 0;
    }
`
const FittextP = styled.p`
    @media only screen and (max-width: 769px){
        font-size: 10px;
    }
    @media only screen and (max-width: 676px){
        font-size: 16px;
    }
    @media only screen and (max-width: 478px){
        font-size: 14px;
    }
    @media only screen and (max-width: 376px){
        font-size: 10px;
    }
`
const UniqueImage = styled.img`
    max-width: 500px !important;

    @media only screen and (max-width: 769px){
        max-width: 384px !important;
    }

    @media only screen and (max-width: 676px){
        max-width: 300px !important;
    }
`

export const CircularBands = (props) => {
    return (
        <OuterBand id={props.OuterBand}>
            <InnerBand id={props.InnerBand}>
                <Band></Band>
            </InnerBand>
        </OuterBand>
    )
}

CircularBands.propTypes = {
    OuterBand : PropTypes.string.isRequired,
    InnerBand : PropTypes.string.isRequired
}

const TechBanner = () => {
  return (
    <header className="TechBanner">
        <StoreBannerDiv className="InnerBanner">
            <CircularBands OuterBand="BottomWhite" InnerBand="InnerBlue" />
            <FittextDiv id="Fittext">
                <h1>Unique Fits</h1>
                <FittextP>Our fits are stylish  and comfortable they make you<br />
                    feel and look your best</FittextP>
            </FittextDiv>
            <UniqueImage src="slant_unique_fits.png" alt="Unique Fit" srcSet="" />
            <CircularBands OuterBand="TopWhite" InnerBand="InnerBlue" />
        </StoreBannerDiv>
    </header>
  )
}

export default TechBanner