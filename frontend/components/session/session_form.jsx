import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '', 
            lname: '', 
            email: '',
            password: '',
            confirmPassword: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
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
    this.props.formType === "Create Account" ?
        this.props.signup(this.state).then(this.props.closeModal) : this.props.login(this.state).then(this.props.closeModal)
    }
    renderErrors() {
        return (
            <ul>
            { this.props.errors.map((error, i) => (
                <li key={i}>
                    {error}
                </li>
            ))}
            </ul>
        );
    }

    render (){
         if (this.props.formType === "Create Account") {
          return (
            <div className="form-container">
                  <form className="form-holder" onSubmit={this.handleSubmit}>
                    <h3 className="form-title">Welcome to OpenCounter!</h3>
                <br/>
                    {this.renderErrors()}
                    <input type="text" value={this.state.fname} onChange={this.handleInput('fname')} placeholder="First Name*" />
                    <input type="text" value={this.state.lname} onChange={this.handleInput('lname')} placeholder="Last Name*" />
                    <input type="text" value={this.state.email} onChange={this.handleInput('email')} placeholder="Enter email*" />
                    <input type="password" value={this.state.password} onChange={this.handleInput('password')} placeholder="Enter password*" />
                    <input type="password" value={this.state.confirmPassword} onChange={this.handleInput('confirmPassword')} placeholder="Re-enter password*" />
                    <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        )} else { 
          return (
              <div className="form-container" >
                  <form className="form-holder" onSubmit={this.handleSubmit}>
                    <h3 className="form-title">Please sign in</h3>
                    <br/>
                        {this.renderErrors()}
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} placeholder="Enter email*" />
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} placeholder="Enter password*" />
                        <input type="submit" value={this.props.formType} />
                </form>
            </div>
        )}
    }
}

export default Signup;