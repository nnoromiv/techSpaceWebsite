import { useContext, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import './styles/BlogBody.scss'
import { EndPointContext } from '../../App';
import { FetchBlogs } from '../../EndpointCalls';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ErrorHandlerDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const ErrorHandler = (props) => {
    return(
        <ErrorHandlerDiv className="ErrorHandler">
            <img src="under_construction.svg" srcSet="" alt="underConstruction" />
            <h1>{props.Name} is on it&apos;s way</h1>
        </ErrorHandlerDiv>
    )
}

ErrorHandler.propTypes = {
    Name: PropTypes.string
}

const BlogBody = () => { 
    const [blogs, setBlogs, blogError, setBlogError] = useContext(EndPointContext)

    useEffect(() => {
        async function fetchBlog() {
          try {
            await FetchBlogs(setBlogs, setBlogError);
          } catch (error) {
            console.error(`Error fetching data: ${error}`);
          }
        }
        fetchBlog();
    }, [setBlogs, setBlogError]);
      
  return (
    <header className='BlogBody'>
    {
        (blogError !== 200 || blogs.length === 0) 
        &&
        <ErrorHandler Name='Blog' />
    }
    {  
        blogs.map((data, index) => (
            data.length === 0 ?
            <ErrorHandler key={index} Name='Blog' />
            :
            <Card key={data._id}>
                <Card.Img src="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg" variant='top' />
                <Card.Body>
                    <Card.Header>{data.headLine}</Card.Header>
                    <Card.Text>{data.text}
                    Technology has revolutionized the way we live our lives, and it continues to do so at an exponential rate. From smartphones to self-driving cars, technology has transformed the way we communicate, work, and interact with the world around us. In this blog post, we will explore some of the latest trends and innovations in the world of tech.</Card.Text>
                    <Button>Learn more</Button>
                </Card.Body>
            </Card>
        ))
    }
    </header>
  )
}

export default BlogBody