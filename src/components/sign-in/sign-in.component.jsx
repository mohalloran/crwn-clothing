import React, {Component} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {

    constructor(){
        super();

        this.state = {
            email: 'walt200065@gmail.com',
            password: 'Frank#991'
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange = (event) => {
        const { value, name} = event.target;
        this.setState({[name]:value});
    }

    render(){
        return (
           <div className='sign-in'>
               <h2>I already have an account</h2>
               <span className='title'>Sign in with your email and password</span>

               <form onSubmit={this.handleSubmit}>
                   <FormInput 
                       name='email' 
                       type='email' 
                       value={this.state.email} 
                       required onChange={this.handleChange}
                       label="emaill"
                    />
                   
                   <FormInput
                         name='password' 
                         type='password' 
                         value={this.state.password} 
                         required onChange={this.handleChange}
                         label='password'
                    />
                   
                   
                   <div className='button'>
                        <CustomButton type='submit'>
                                Sign in
                        </CustomButton>
                        <span>{'     '}</span>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                                {' '} Sign in with Google {' '}
                        </CustomButton>
                   </div>

               </form>
           </div>
        )
    }
}

export default SignIn;

