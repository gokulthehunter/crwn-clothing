import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        this.setState({email:'',password:''})
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
                    <CustomButton type="submit">Submit</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;