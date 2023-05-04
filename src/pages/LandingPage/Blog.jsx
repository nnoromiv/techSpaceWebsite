import {useContext, useEffect} from 'react'
import { Card, Button } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/Blog.scss"
import { EndPointContext } from '../../App';
import { ErrorHandler } from '../BlogPage/BlogBody.jsx';
import { FetchBlogs } from '../../EndpointCalls.jsx';
import styled from 'styled-components';

const BlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 100px;
  
  @media only screen and (max-width: 1025px){        
    margin: 0 50px ;
  }
  @media only screen and (max-width: 769px){        
    margin: 0 30px;
  }
`
const BlogHeaderH1 = styled.h1`
  font-size: 56px;
  font-weight: 800;

  @media only screen and (max-width: 1025px){        
    font-size: 54px;
  }
  @media only screen and (max-width: 769px){        
    font-size: 44px; 
  }
`
const BlogHeaderButton = styled.button`
  margin: 10px 0 0 0;
  padding: 5px 25px;
  border-radius: 20px;
  height: fit-content;
  transition: 1s;

  :hover {
    padding: 5px 30px;
  }
`
const CardP = styled.p`
  margin: 10px 100px;
  font-size: 18px;
  font-weight: 400;

  @media only screen and (max-width: 1025px){        
    margin: 10px 50px;
  }
  @media only screen and (max-width: 769px){        
    font-size: 15px;
    margin: 10px 30px; 
  }
`

function Cards(){
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

    var SLIDERSETTINGS = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                autoplaySpeed: 3000,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }
    return(        
        <div className='Card'>
            {
                (blogError !== 200 || blogs.length === 0) 
                &&
                <ErrorHandler Name='Blog' />
            }
            <Slider {...SLIDERSETTINGS}>
            {  
                blogs.slice(0,4).map((data, index) => (
                  data.length === 0 ?
                    <ErrorHandler key={index} Name='Blog' />
                    :
                    <Card key={data._id}>
                        <Card.Img variant='top' src='blogimg.png'/>
                        <Card.Body>
                            <Card.Subtitle>{data.text}</Card.Subtitle>
                            <Card.Title>{data.title}</Card.Title>
                            <Card.Text>{data.title}</Card.Text>
                            <Button variant='outline-primary'>Read more</Button>
                        </Card.Body>
                    </Card>
                ))
            }
            </Slider>
        </div>
        
    )
}

const Blog = () => {
  return (
    <header className='Blog' id='blog' style={{ margin: '80px 0 0 0'}}>
        <BlogHeader className='header'>
            <BlogHeaderH1>Blog</BlogHeaderH1>
            <BlogHeaderButton>
              <a href="/blogs" style={{textDecoration: 'none', color: '#C3CEE7'}}>More</a>
            </BlogHeaderButton>
        </BlogHeader>
        <CardP>Read up-to-date articles on scoops and latest trends happening around us.</CardP>
        <Cards />
    </header>
  )
}

export default Blog