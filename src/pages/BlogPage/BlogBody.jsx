import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './styles/BlogBody.scss'

const BlogBody = () => {
  return (
    <div className='BlogBody'>
        <Card>
            <Card.Img src="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg" variant='top' />
            <Card.Body>
                <Card.Header>Technology</Card.Header>
                <Card.Text>Technology has revolutionized the way we live our lives, and it continues to do so at an exponential rate. From smartphones to self-driving cars, technology has transformed the way we communicate, work, and interact with the world around us. In this blog post, we will explore some of the latest trends and innovations in the world of tech.</Card.Text>
                <Button>Learn more</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default BlogBody