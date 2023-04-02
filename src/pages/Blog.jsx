import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/Blog.scss"

const BLOGCARD = [
    {
        image: 'images/blogimg.png',
        date: '13-JAN-2023',
        title: 'Story Headline',
        shortText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus ut dictum urna faucibus elit feugiat. Et dignissim in ut tellus vitae venenatis eget varius vestibulum.',
    },
    {
        image: 'images/blogimg.png',
        date: '13-JAN-2023',
        title: 'Story Headline2',
        shortText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus ut dictum urna faucibus elit feugiat. Et dignissim in ut tellus vitae venenatis eget varius vestibulum.',
    },
    {
        image: 'images/blogimg.png',
        date: '13-JAN-2023',
        title: 'Story Headline3',
        shortText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus ut dictum urna faucibus elit feugiat. Et dignissim in ut tellus vitae venenatis eget varius vestibulum.',
    },
    {
        image: 'images/blogimg.png',
        date: '13-JAN-2023',
        title: 'Story Headline4',
        shortText: 'Lorem ipsum dolor sit amet consectetur. Rhoncus ut dictum urna faucibus elit feugiat. Et dignissim in ut tellus vitae venenatis eget varius vestibulum.',
    }
]


function Cards(){
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
                    BLOGCARD.map(blogcard => {
                        return (

                                <Card key={blogcard.title}>
                                    <Card.Img variant='top' src={blogcard.image}/>
                                    <Card.Body>
                                        <Card.Subtitle>{blogcard.date}</Card.Subtitle>
                                        <Card.Title>{blogcard.title}</Card.Title>
                                        <Card.Text>{blogcard.shortText}</Card.Text>
                                        <Button variant='outline-primary'>Read more</Button>
                                    </Card.Body>
                                </Card>

                        )
                    })
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
            <button>More</button>
        </div>
        <p>Read up-to-date articles on scoops and latest trends happening around us.</p>
        <Cards />
    </div>
  )
}

export default Blog