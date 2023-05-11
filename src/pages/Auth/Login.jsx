import "./styles/Login.scss"
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
    email: Yup.string().email('Invalid email'),
    password: Yup.string()
})

const FormArea = () => {
    return(
        <div className="FormArea">
        <h1>Welcome back!</h1>
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
            <h2>Don&apos;t have an account?<span href='/signup'>Sign up</span></h2>
        </div>
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
