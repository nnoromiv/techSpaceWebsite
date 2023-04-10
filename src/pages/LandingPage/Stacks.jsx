import React from 'react'
import { MyButton } from './Content'
import { Icon } from '@iconify/react';
import styled from 'styled-components';

const StacksDiv = styled.div`
    margin: 80px 100px 0 100px;
    text-align: center;
    @media only screen and (max-width: 1025px){
        margin: 80px 50px 0 50px;
    }

    @media only screen and (max-width: 769px){
        margin: 60px 20px 0 20px;
    }

    @media only screen and (max-width: 600px){
        margin: 60px 20px 0 20px;
    }

    @media only screen and (max-width: 426px){
        padding: 0 10px 0 10px;
    }

    @media only screen and (max-width: 330px){
        padding: 0 10px 0 10px;
    }
`
const StackedRow = styled.div`
    margin: 80px 0 0 0;
    display: flex;
    gap: 132px;
    text-align: left;
    
    @media only screen and (max-width: 1025px){        
        gap: 30px;           
    }
    @media only screen and (max-width: 600px){ 
        flex-direction: column;        
    }
`
const StackedRowReversed = styled.div`
    margin: 80px 0 0 0;
    display: flex;
    gap: 132px;
    text-align: left;
    flex-direction: row-reverse;
    
    @media only screen and (max-width: 1025px){        
        gap: 30px;           
    }
    @media only screen and (max-width: 600px){ 
        flex-direction: column;        
    }
`
const FrontendStackImage = styled.img`
    width: 450px;
    height: 186.02px;
    border-radius: 50% 50% 65% 35% / 62% 23% 77% 38% ;

    @media only screen and (max-width: 769px){
        width: 350px;
    }
    @media only screen and (max-width: 426px){               
        width: 300.92px !important;
    } 
    @media only screen and (max-width: 330px){               
        width: 250.92px !important;             
    }
`
const UIUXStackImage = styled.img`
     width: 400px !important;
    height: 240.92px;
    border-radius: 57% 43% 59% 41% / 62% 78% 22% 38%   ;

    @media only screen and (max-width: 769px){
        width: 300 !important;
    }
    @media only screen and (max-width: 600px){             
        height: 200.92px;
    }
    @media only screen and (max-width: 426px){               
        width: 300.92px !important;
    } 
    @media only screen and (max-width: 330px){               
        width: 250.92px !important;             
    }
`
const BackendStackImage = styled.img`
    width: 450px !important;
    height: 240.44px;
    border-radius: 100% 0% 67% 33% / 62% 30% 70% 38%;  ;

    @media only screen and (max-width: 769px){
        width: 350 !important;
    }
    @media only screen and (max-width: 600px){             
        height: 200.92px;
    }
    @media only screen and (max-width: 426px){               
        width: 300.92px !important;
    } 
    @media only screen and (max-width: 330px){               
        width: 250.92px !important;             
    }
`
const DataScienceStackImage = styled.img`
    width: 400px !important;
    height: 240.92px;
    border-radius: 65% 35% 76% 24% / 62% 28% 72% 38%; ;

    @media only screen and (max-width: 769px){
        width: 300 !important;
    }
    @media only screen and (max-width: 600px){             
        height: 200.92px;
    }
    @media only screen and (max-width: 426px){               
        width: 300.92px !important;
    } 
    @media only screen and (max-width: 330px){               
        width: 250.92px !important;             
    }
`
const CybersecurityStackImage = styled.img`
    width: 450px !important;
    height: 240.44px;
    border-radius: 65% 35% 13% 87% / 19% 28% 72% 81%;  ;

    @media only screen and (max-width: 769px){
        width: 350 !important;
    }
    @media only screen and (max-width: 600px){             
        height: 200.92px;
    }
    @media only screen and (max-width: 426px){               
        width: 300.92px !important;
    } 
    @media only screen and (max-width: 330px){               
        width: 250.92px !important;             
    }
`
const StackRowH2 = styled.h2`
    margin: -3px 0 3px 15px;
    font-size: 32px;
    font-weight: 600;

    @media only screen and (max-width: 769px){
        font-size: 20px;
    }
`
const StackRowP = styled.p`
    font-size: 18px;
    margin: 0 0 20px 0;

    @media only screen and (max-width: 769px){
        font-size: 16px;
    }
`

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
        <StackedRow className='Frontend'>
            <FrontendStackImage alt='frontend' srcSet='' src='images/frontend.svg' />
            <div className='info'>
                <div style={{display: 'flex'}}>
                    <Icon icon="ic:twotone-library-add-check" color="#002087" width="34" height="34" />
                    <StackRowH2>Frontend Development Stack</StackRowH2>
                </div>
                {
                    STACKDESC.slice(0,1).map( fd => (
                        <StackRowP>{fd.desc.slice(0,390)}.....</StackRowP>
                    ))
                }
                <MyButton Innertext='View more'/>
            </div>
        </StackedRow>
    )
}

const UIUXStack = () => {
    return(
        <StackedRowReversed className='UIUX'>
            <UIUXStackImage alt='UIUX' srcSet='' src='images/uiux.svg' />
            <div className='info'>
                <div style={{display: 'flex'}}>
                    <Icon icon="ic:twotone-library-add-check" color="#002087" width="34" height="34" />
                    <StackRowH2>UIUX Development Stack</StackRowH2>
                </div>
                {
                    STACKDESC.slice(1,2).map( uiux => (
                        <StackRowP>{uiux.desc.slice(0,390)}.....</StackRowP>
                    ))
                }                
                <MyButton Innertext='View more'/>
            </div>
        </StackedRowReversed>
    )
}

const BackendStack = () => {
    return(
        <StackedRow className='Backend'>
            <BackendStackImage alt='backend' srcSet='' src='images/backend.svg' />
            <div className='info'>
                <div style={{display: 'flex'}}>
                    <Icon icon="ic:twotone-library-add-check" color="#002087" width="34" height="34" />
                    <StackRowH2>Backend Development Stack</StackRowH2>
                </div>
                {
                    STACKDESC.slice(2,3).map( bd => (
                        <StackRowP>{bd.desc.slice(0,380)}.....</StackRowP>
                    ))
                }
                <MyButton Innertext='View more'/>
            </div>
        </StackedRow>
    )
}

const DataScienceStack = () => {
    return(
        <StackedRowReversed className='DataScience'>
            <DataScienceStackImage alt='DataScience' srcSet='' src='images/datascience.svg' />
            <div className='info'>
                <div style={{display: 'flex'}}>
                    <Icon icon="ic:twotone-library-add-check" color="#002087" width="34" height="34" />
                    <StackRowH2>Data Science Stack</StackRowH2>
                </div>
                {
                    STACKDESC.slice(3,4).map( ds => (
                        <StackRowP>{ds.desc.slice(0,390)}.....</StackRowP>
                    ))
                }                
                <MyButton Innertext='View more'/>
            </div>
        </StackedRowReversed>
    )
}

const CybersecurityStack = () => {
    return(
        <StackedRow className='Cybersecurity'>
            <CybersecurityStackImage alt='Cybersecurity' srcSet='' src='images/cybersecurity.svg' />
            <div className='info'>
                <div style={{display: 'flex'}}>
                    <Icon icon="ic:twotone-library-add-check" color="#002087" width="34" height="34" />
                    <StackRowH2>Cybersecurity Stack</StackRowH2>
                </div>
                {
                    STACKDESC.slice(4,5).map( cs => (
                        <StackRowP>{cs.desc.slice(0,390)}.....</StackRowP>
                    ))
                }                
                <MyButton Innertext='View more'/>
            </div>
        </StackedRow>
    )
}

const Stacks = () => {
  return (
    <StacksDiv className='Stacks' id='about-stacks'>
        <h1>Stacks</h1>
        <FrontendStack />
        <UIUXStack />
        <BackendStack />
        <DataScienceStack />
        <CybersecurityStack />
    </StacksDiv>
  )
}

export default Stacks