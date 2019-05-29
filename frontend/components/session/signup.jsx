import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '', 
            lname: '', 
            email: '',
            password: '',
            // confirmPassword: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(field) {
        return e => {
            this.setState({[field]: e.target.value})
        }
    }



    handleSubmit(e) {
        e.preventDefault();
        // const { fname, lname, email, password, confirmPassword } = this.state;
        // if (this.state.password !== this.state.confirmPassword) {
        //     this.props.errors.push("The passwords doesn't match")
        // } else {
        //     this.props.signup({ fname, lname, email, password })
        // }
        this.props.signup(this.state)
    }

    render (){
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.fname} onChange={this.handleInput('fname')} placeholder="First Name*" />
                <input type="text" value={this.state.lname} onChange={this.handleInput('lname')} placeholder="Last Name*" />
                <input type="text" value={this.state.email} onChange={this.handleInput('email')} placeholder="Enter email*" />
                <input type="password" value={this.state.password} onChange={this.handleInput('password')} placeholder="Enter password*" />
                {/* <input type="password" value={this.state.confirmPassword} onChange={this.handleInput('confirmPassword')} placeholder="Re-enter password*" /> */}
                <input type="submit" value="Create Account"/>
            </form>
            </>
        )
    }
}

export default Signup;