import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth ,createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try{
            //creates a new user account from the supplied email and password.
            //Upon successful creation the user will then be logged in .If the
            //account exists then a new account will not be created .
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            
            //Save the User to FireStore DB
            const authRef = await createUserProfileDocument(user, {displayName} );

            //Reset the display Values
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
                

            },() => console.log('sign-up.component',this.state))

        }catch(error){
            console.error(error);
        }



    }

    handleChange = (evt) => {
        const { name,value} = evt.target;
        this.setState({
             [name]: value
        });
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className='sign-up'>
                <h2>I do not have an account</h2>
                <span className='title'>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />

                    <CustomButton type='submit'>
                        SIGN UP
                    </CustomButton>

                </form>
            </div>
        );
    }

}

export default SignUp;



