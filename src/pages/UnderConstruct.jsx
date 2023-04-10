import React from 'react'
import styled from 'styled-components';
import Navbar from './LandingPage/Navbar';

const StyledPage = styled.div`
    display: 'flex';
    flex-direction: column;
    text-align: center;
`;

const StyledImage = styled.img`
    width: 100vw;
    height: 70vh;
`;

const StyledHText = styled.h1`
    margin: 10px 0 0 0;
    font-size: 2em;
    color: #d3d3d3;
`;

const UnderConstruct = (props) => {
    return(
        <>
        <Navbar />
        <StyledPage className="ConstructionHandler">
            <StyledHText>{props.Name} is under construction</StyledHText>
            <StyledImage src="images/page_construction.svg" srcSet="" alt="underConstruction" />
        </StyledPage>
        </>
    )
}

export default UnderConstruct