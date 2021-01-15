import React, {Component} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {

    constructor(){
        super();

        this.state = {
            email: 'walt200065@gmail.com',
            password: 'Frank#991'
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {email, password} = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'',password:''});

        }catch(error){
            console.log(error);
        }

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

               <form onSubmit={this.handleSubmit} >

                        <FormInput 
                            name='email' 
                            type='email' 
                            value={this.state.email} 
                            required onChange={this.handleChange}
                            label="email"
                            />
                        
                        <FormInput
                                name='password' 
                                type='password' 
                                value={this.state.password} 
                                required onChange={this.handleChange}
                                label='password'
                        />

                    <div className='button-container'>
                        <div className='button'>
                                <CustomButton type='submit'>
                                        Sign in
                                </CustomButton>
                                <span>{'     '}</span>
                                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                                        {' '} Sign in with Google {' '}
                                </CustomButton>
                        </div>
                   </div>
                
               </form>
           </div>
        )
    }
}

export default SignIn;

