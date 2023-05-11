import "./styles/Login.scss"
import  HeroImage from '../../assets/heroimage.png'
import { Field, Form, Formik } from "formik"
import { Button } from "react-bootstrap"
import * as Yup from 'yup'
import styled from "styled-components"

export const AuthImage = styled.img`
    width: 50%;
    object-fit: cover;
    @media screen and (max-width: 769px) {
        width: 45%;
    }
    @media screen and (max-width: 426px) {
        display: none
    }
`
export const FormAreaDiv =  styled.div`
    padding: 40px 80px;
    width: 50%;

    @media screen and (max-width: 769px) {
        padding: 40px 40px;
        width: 55%;
    }

    @media screen and (max-width: 426px) {
        padding: 40px;
        width: 100%;
    }
`
export const FormAreaH1 = styled.h1`
    font-size: 40px !important;
    margin: 0 0 40px 0;

    @media screen and (max-width: 769px) {  
        font-size: 30px;
    }


    @media screen and (max-width: 426px) {  
        font-size: 30px;
    }


    @media screen and (max-width: 321px) {          
        font-size: 33px !important;
    }

    
`
export const FormAreaH2 = styled.h2`
    text-align: center;
    margin: 20% 0 0 0;
    font-weight: 200;
    font-size: 20px;


    @media screen and (max-width: 769px) {
        margin-top: 10%;
        font-size: 18px;  
    }

    @media screen and (max-width: 376px) {
        margin-top: 15%;
        font-size: 16px;  
    }
`
export const FormAreaSpan = styled.span`
    color: #002087;
    text-decoration: underline;
    font-weight: 500;
    padding: 0 0 0 5px;
    cursor: pointer;

@media screen and (max-width: 769px) {
    padding: 0 0 0 3px;
}

@media screen and (max-width: 426px) {
    padding: 0 0 0 3px;
}

@media screen and (max-width: 376px) {
    padding: 0 0 0 3px;
}
`

const ImageArea = () => {
    return(
        <AuthImage src={HeroImage} alt='runtechspace-image' srcSet="" />
    )
}

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email'),
    password: Yup.string()
})

const FormArea = () => {
    return(
        <FormAreaDiv className="FormArea">
        <FormAreaH1>Welcome back!</FormAreaH1>
            <Formik initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={values => {console.log(values.password, values.email)}}
            >
            {({ errors }) => (
                <Form style={{ display: 'flex', flexDirection: 'column'}}>
                    <em>Email address</em>
                    <Field type='email' id='email' name='email' placeholder='Enter your email address' required/>
                    <em>Password</em>
                    <Field type='password' id='password' name='password' placeholder='Enter your password' required/>
                    <div>                        
                        <p>Forgot password?</p>
                    </div>
                    <Button variant='primary' type='submit'>Log In</Button>
                </Form>
            )}
            </Formik>
            <FormAreaH2>Don&apos;t have an account?<FormAreaSpan href='/signup'>Sign up</FormAreaSpan></FormAreaH2>
        </FormAreaDiv>
    )
}

const Login = () => {
    return (
      <header className='Login'>
          <ImageArea />
          <FormArea />
      </header>
    )
  }
  
  export default Login
