import styled from 'styled-components';
import Navbar from './LandingPage/Navbar';
import PropTypes from 'prop-types'

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
        <header>
        <Navbar />
        <StyledPage className="ConstructionHandler">
            <StyledHText>{props.Name} is under construction</StyledHText>
            <StyledImage src="page_construction.svg" srcSet="" alt="underConstruction" />
        </StyledPage>
        </header>
    )
}

UnderConstruct.propTypes = {
    Name : PropTypes.string.isRequired
}

export default UnderConstruct