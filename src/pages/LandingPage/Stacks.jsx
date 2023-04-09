import React from 'react'
import { MyButton } from './Content'
import { Icon } from '@iconify/react';
import "./styles/Stacks.scss"

const STACKDESC = [
    {
        desc: `Frontend development is the practice of creating the visual and interactive components of a website or web application that users interact with directly. It involves using programming languages like HTML, CSS, and JavaScript to design and implement the user interface and user experience of a website.
        Frontend development is an important area of web development, as it plays a critical role in determining how users perceive and interact with a website or web application. A well-designed frontend can make a website feel intuitive, engaging, and easy to use, while a poorly designed frontend can lead to frustration and user abandonment.
        If you're interested in pursuing a career in web development or simply want to learn more about how websites are built, attending a lecture on frontend development is a great way to get started. In a frontend development lecture, you'll learn about the basics of HTML, CSS, and JavaScript, as well as more advanced topics like responsive design, accessibility, and performance optimization. You'll also have the opportunity to ask questions, interact with other learners, and get hands-on experience building your own frontend projects.
        Whether you're a complete beginner or an experienced developer looking to expand your skills, a frontend development lecture can provide valuable insights and knowledge that will help you take your skills to the next level. So why not join a frontend development lecture today and start exploring the exciting world of web development?`
    },
    {
        desc: `UI/UX (User Interface/User Experience) design is a crucial aspect of creating successful digital products that meet the needs of users.
        A good UI/UX design can make a significant difference in the success of a product, by creating a user-friendly and engaging experience that encourages users to interact with the product and achieve their goals. On the other hand, a poorly designed UI/UX can lead to frustration and confusion, resulting in a negative user experience and potentially impacting the success of the product.
        If you're interested in learning more about UI/UX design and how it can impact the success of your digital products, then joining a lecture on the topic is a great opportunity. You'll learn about the key principles of UI/UX design, including user research, prototyping, and testing, and how to apply these principles to create engaging and effective digital products.
        Furthermore, you'll have the opportunity to network with other like-minded individuals who are passionate about design and technology, and learn from experienced professionals who have a wealth of knowledge and insights to share. So don't miss out on this chance to gain valuable skills and knowledge in UI/UX design!`
    },
    {
        desc: `Backend development is a crucial aspect of modern software engineering, responsible for building the server-side components of web and mobile applications. As a backend developer, you'll work with databases, APIs, servers, and other technologies to ensure that applications run smoothly, securely, and efficiently.
        If you're interested in a career in software engineering, backend development is a great place to start. Not only is it a highly sought-after skill in the tech industry, but it also offers the opportunity to work on projects that have a real-world impact.
        In a lecture on backend development, you'll learn the fundamental concepts and techniques needed to build robust and scalable applications. You'll explore topics such as server-side programming languages, database management, API design, security, and performance optimization. You'll also have the opportunity to work on hands-on projects that will help you apply these concepts in a real-world setting.
        Whether you're an experienced developer looking to expand your skill set or a newcomer to the field of software engineering, a lecture on backend development can provide you with the knowledge and tools you need to succeed in this exciting and rapidly-evolving field.`
    },
    {
        desc: `Data science is an exciting and rapidly growing field that combines advanced statistical and computational techniques with domain-specific knowledge to extract insights and knowledge from data. In today's data-driven world, data science skills are in high demand across a wide range of industries, from finance and healthcare to retail and entertainment.
        If you're interested in learning more about data science, joining a lecture or course can be a great way to get started. These lectures typically cover topics such as data exploration, data visualization, machine learning, and predictive modeling, as well as more advanced topics such as deep learning and natural language processing.
        By attending a data science lecture, you'll have the opportunity to learn from experienced data scientists and practitioners, as well as network with other individuals who share your interest in data science. You'll also gain hands-on experience working with real-world datasets and tools such as Python, R, and SQL, which are essential skills for any aspiring data scientist.
        Overall, if you're looking to gain a competitive edge in today's job market or simply want to expand your knowledge in a fascinating and rapidly growing field, joining a data science lecture or course is a great place to start.`
    },
    {
        desc: `Cybersecurity Stack refers to the collection of tools and technologies that are used to protect computer systems, networks, and data from unauthorized access, theft, or damage. This includes a range of software and hardware solutions that work together to identify and respond to potential security threats in real-time.
        If you're interested in learning more about cybersecurity and how to protect yourself or your organization from cyber threats, attending a lecture on Cybersecurity Stack is an excellent opportunity to do so. By joining the lecture, you'll have the chance to learn about the latest tools and technologies that are being used to secure computer systems and networks, as well as the best practices for implementing and managing these solutions effectively.
        Additionally, the lecture may provide valuable insights into the current state of cybersecurity threats and trends, including emerging threats like ransomware and phishing attacks. By understanding these threats, you'll be better equipped to protect yourself and your organization from potential cyber attacks.
        Overall, attending a lecture on Cybersecurity Stack is an excellent opportunity to learn about the latest cybersecurity tools and technologies, gain practical skills for securing computer systems and networks, and stay up-to-date on emerging cybersecurity threats and trends.`
    },
]

const FrontendStack = () => {
    return(
        <div className='Frontend'>
            <img alt='frontend' srcSet='' src='images/frontend.svg' />
            <div className='info'>
                <div className='header'>
                    <Icon icon="ic:twotone-library-add-check" color="#002087" width="34" height="34" />
                    <h2>Frontend Development Stack</h2>
                </div>
                {
                    STACKDESC.slice(0,1).map( fd => (
                        <p>{fd.desc.slice(0,390)}.....</p>
                    ))
                }
                <MyButton Innertext='View more'/>
            </div>
        </div>
    )
}

const UIUXStack = () => {
    return(
        <div className='UIUX'>
            <img alt='UIUX' srcSet='' src='images/uiux.svg' />
            <div className='info'>
                <div className='header'>
                    <Icon icon="ic:twotone-library-add-check" color="#002087" width="34" height="34" />
                    <h2>UIUX Development Stack</h2>
                </div>
                {
                    STACKDESC.slice(1,2).map( uiux => (
                        <p>{uiux.desc.slice(0,390)}.....</p>
                    ))
                }                
                <MyButton Innertext='View more'/>
            </div>
        </div>
    )
}

const BackendStack = () => {
    return(
        <div className='Backend'>
            <img alt='backend' srcSet='' src='images/backend.svg' />
            <div className='info'>
                <div className='header'>
                    <Icon icon="ic:twotone-library-add-check" color="#002087" width="34" height="34" />
                    <h2>Backend Development Stack</h2>
                </div>
                {
                    STACKDESC.slice(2,3).map( bd => (
                        <p>{bd.desc.slice(0,380)}.....</p>
                    ))
                }
                <MyButton Innertext='View more'/>
            </div>
        </div>
    )
}

const DataScienceStack = () => {
    return(
        <div className='DataScience'>
            <img alt='DataScience' srcSet='' src='images/datascience.svg' />
            <div className='info'>
                <div className='header'>
                    <Icon icon="ic:twotone-library-add-check" color="#002087" width="34" height="34" />
                    <h2>Data Science Stack</h2>
                </div>
                {
                    STACKDESC.slice(3,4).map( ds => (
                        <p>{ds.desc.slice(0,390)}.....</p>
                    ))
                }                
                <MyButton Innertext='View more'/>
            </div>
        </div>
    )
}

const CybersecurityStack = () => {
    return(
        <div className='Cybersecurity'>
            <img alt='Cybersecurity' srcSet='' src='images/cybersecurity.svg' />
            <div className='info'>
                <div className='header'>
                    <Icon icon="ic:twotone-library-add-check" color="#002087" width="34" height="34" />
                    <h2>Cybersecurity Stack</h2>
                </div>
                {
                    STACKDESC.slice(4,5).map( cs => (
                        <p>{cs.desc.slice(0,390)}.....</p>
                    ))
                }                
                <MyButton Innertext='View more'/>
            </div>
        </div>
    )
}

const Stacks = () => {
  return (
    <div className='Stacks' id='about-stacks'>
        <h1>Stacks</h1>
        <FrontendStack />
        <UIUXStack />
        <BackendStack />
        <DataScienceStack />
        <CybersecurityStack />
    </div>
  )
}

export default Stacks