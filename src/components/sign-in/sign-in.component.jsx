import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth,signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async (event)=>{
        event.preventDefault();

        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
        }catch(error){
            console.log(error);
        }
        

        
    }

    handleChange = (event) => {
        const {value,name} = event.target;
        this.setState( {[name]:value} );
    }



    render(){
        return(
            <div className="sign-in">
                <h2>I Have Already an Account</h2>
                <span>Please Sign in Using Email And Password</span>
                <form onSubmit={this.handleSubmit}>
                    {/* <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    <label htmlFor="email">Email</label> */}

                    <FormInput label="Email" type="email" name="email" value={this.state.email} handleChange={this.handleChange}/>

                    {/* <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <label htmlFor="password">Password</label> */}

                    <FormInput label="Password" type="password" name="password" value={this.state.password} handleChange={this.handleChange}/>

                    {/* <input type="submit" value="Submit Form"/> */}
                    <div className="buttons">
                        <CustomButton type="submit">Submit</CustomButton>
                        <CustomButton  onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default SignIn;