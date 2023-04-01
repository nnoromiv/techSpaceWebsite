import React from 'react'
import { Card, Button } from 'react-bootstrap'
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
    return(
        <div className='Card'>
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