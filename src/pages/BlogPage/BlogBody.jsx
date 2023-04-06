import React, { useContext, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import './styles/BlogBody.scss'
import { EndPointContext } from '../../App';
import { BLOGURL, headers } from '../../EndpointCalls';

const ErrorHandler = (props) => {
    return(
        <div className="ErrorHandler">
            <img src="images/under_construction.svg" srcSet="" alt="underConstruction" />
            <h1>{props.Name} is on it's way</h1>
        </div>
    )
}

const BlogBody = () => { 
    const [blogs, setBlogs, blogError, setBlogError] = useContext(EndPointContext)

    useEffect(() =>{
        async function FetchData(){
            try {
                const response = await fetch(`${BLOGURL}getAllPost`, {
                    method: 'GET',
                    headers,
                });
                if (!response.ok) {
                    setBlogError(response.status)
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setBlogError(200)
                setBlogs([...blogs, data])
            } catch (error) {                
                console.log(blogError)
                console.error(`Error fetching data: ${error}`);
            }
        }
        FetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[blogError])

  return (
    <div className='BlogBody'>
    {
        blogError !== 200 &&
        <ErrorHandler Name='Blog' />
    }
    {  
        blogs.map(blog => (
            blog === [] ?
            <ErrorHandler Name='Blog' />
            :
                blog.map(data => (
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
        ))
    }
    </div>
  )
}

export default BlogBody