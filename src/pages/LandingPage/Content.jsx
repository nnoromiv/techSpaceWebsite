import { Button } from 'react-bootstrap'
import "./styles/Content.scss"
import styled from 'styled-components'
import PropTypes from 'prop-types';

const ContentHeader = styled.header`
  text-align: center;
  padding: 20px 0 0 0;

  @media only screen and (max-width: 426px){
    padding: 40px 20px 0 20px;
    text-align: left;
  }
`
const ContentH1 = styled.h1`
  font-size: 56px;
  font-weight: bolder;

  
  @media only screen and (max-width: 768px){
      font-size: 54px;
  }
  @media only screen and (max-width: 682px){
      font-size: 50px;
  }
  @media only screen and (max-width: 426px){
      font-size: 40px;
  }
  @media only screen and (max-width: 376px){
      font-size: 35px;
  }
  @media only screen and (max-width: 321px){
      font-size: 30px;
  }
`
const ContentP = styled.p`
  font-size: 20px;
  font-weight: 100;

  
  @media only screen and (max-width: 768px){
    font-size: 18px;
  }
  @media only screen and (max-width: 682px){
    font-size: 16px;
  }
  @media only screen and (max-width: 426px){
    font-size: 14px;
  }
  @media only screen and (max-width: 376px){
    font-size: 14px;   
  }
  @media only screen and (max-width: 321px){
    font-size: 12px; 
  }
`

export const MyButton = (props) => {
  return(
    <Button>{props.Innertext}</Button>
  )
}

MyButton.propTypes = {
    Innertext: PropTypes.string.isRequired,
};

const Content = () => {
  return (
    <ContentHeader className='Content' id="contact">
        <ContentH1>Tech for the <span>young</span></ContentH1>
        <ContentP>
        The aim of tech education for young people is to prepare them for a world that is increasingly driven by technology<br />
        we equips young people with the tools and knowledge they need to thrive in a rapidly evolving digital landscape.
        </ContentP>
        <MyButton Innertext='Get started' />
    </ContentHeader>
  )
}

export default Content