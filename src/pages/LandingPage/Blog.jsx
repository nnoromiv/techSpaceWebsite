import React, {useContext, useEffect} from 'react'
import { Card, Button } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/Blog.scss"
import { EndPointContext } from '../../App';
import { ErrorHandler } from '../BlogPage/BlogBody';
import { BLOGURL, headers } from '../../EndpointCalls';

// const BLOGCARD = [
//     {
//         image: 'images/blogimg.png',
//         date: '13-JAN-2023',
//         title: 'Story Headline',
//         shortText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus ut dictum urna faucibus elit feugiat. Et dignissim in ut tellus vitae venenatis eget varius vestibulum.',
//     },
//     {
//         image: 'images/blogimg.png',
//         date: '13-JAN-2023',
//         title: 'Story Headline2',
//         shortText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus ut dictum urna faucibus elit feugiat. Et dignissim in ut tellus vitae venenatis eget varius vestibulum.',
//     },
//     {
//         image: 'images/blogimg.png',
//         date: '13-JAN-2023',
//         title: 'Story Headline3',
//         shortText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus ut dictum urna faucibus elit feugiat. Et dignissim in ut tellus vitae venenatis eget varius vestibulum.',
//     },
//     {
//         image: 'images/blogimg.png',
//         date: '13-JAN-2023',
//         title: 'Story Headline4',
//         shortText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus ut dictum urna faucibus elit feugiat. Et dignissim in ut tellus vitae venenatis eget varius vestibulum.',
//     }
// ]


function Cards(){
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
            <Slider {...SLIDERSETTINGS}>
            {  
                blogs.map(blog => (
                  blog === [] ?
                    <ErrorHandler Name='Blog' />
                    :
                        blog.slice(0,4).map(data => (
                          <Card key={data._id}>
                                    <Card.Img variant='top' src='images/blogimg.png'/>
                                    <Card.Body>
                                        <Card.Subtitle>{data.text}</Card.Subtitle>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Text>{data.title}</Card.Text>
                                        <Button variant='outline-primary'>Read more</Button>
                                    </Card.Body>
                                </Card>
                        ))
                ))
            }
            </Slider>
        </div>
        
    )
}

const Blog = () => {
  return (
    <div className='Blog' id='blog'>
        <div className='header'>
            <h1>Blog</h1>
            <button>
              <a href="/blogs" style={{textDecoration: 'none', color: '#C3CEE7'}}>More</a>
            </button>
        </div>
        <p>Read up-to-date articles on scoops and latest trends happening around us.</p>
        <Cards />
    </div>
  )
}

export default Blog