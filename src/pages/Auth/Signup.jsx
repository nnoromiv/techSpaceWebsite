import "./styles/Signup.scss"
import  HeroImage from '../../assets/heroimage.png'
import { Field, Form, Formik } from "formik"
import { Button } from "react-bootstrap"
import * as Yup from 'yup'

const ImageArea = () => {
    return(
        <img src={HeroImage} alt='runtechspace-image' srcSet="" />
    )
}

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required(),
    matricNo: Yup.string().matches(/^RUN\/[a-z]{3}\/\d{2}\/\d{4}$/i).required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required(),
})

const FormArea = () => {
    return(
        <div className="FormArea">
        <h1>Welcome, get started!</h1>
            <Formik initialValues={{
                email: '',
                matricNo : '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={values => {alert(values.password, values.email, values.matricNo, values.confirmPassword)}}
            >
            {({ errors }) => (
                <Form style={{ display: 'flex', flexDirection: 'column'}}>
                    <em>Email address</em>
                    <Field type='email' id='email' name='email' placeholder='Enter your email address' required/>
                    <em>Matric Number</em>
                    <Field type='text' id='matricNo' name='matricNo' placeholder='Enter your matric number' required />
                    <em>Password</em>
                    <Field type='password' id='password' name='password' placeholder='Enter your password' required/>
                    <em>Confirm Password</em>
                    <Field type='password' id='confirmPassword' name='confirmPassword' placeholder='Confirm your password' required/>
                    
                    <Button variant='primary' type='submit'>Sign Up</Button>
                </Form>
            )}
            </Formik>
            <h2>Already have an account?<span href='/login'>Log In</span></h2>
        </div>
    )
}

const Signup = () => {
    return (
      <header className='Signup'>
          <FormArea />
          <ImageArea />
      </header>
    )
  }
  
  export default Signup
