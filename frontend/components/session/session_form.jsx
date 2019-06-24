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

    componentDidMount(){
        this.props.clearSessionErrors();
    }

    handleInput(field) {
        return e => {
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { fname, lname, email, password, confirmPassword } = this.state;
        if (confirmPassword === "" || password !== confirmPassword) {
                this.props.receiveErrors(["re-password"]);
            } else {
                // if (confirmPassword === "") {
                    return this.props.action({ fname, lname, email, password }).then(this.props.closeModal);
                } 
                debugger
        this.props.formType === "Create Account" ?
            this.props.action(this.state).then(this.props.closeModal) : 
            this.props.login(this.state).then(this.props.closeModal)
        }

    renderErrors() {
        const errors = Object.values(this.props.errors);
        const fname = errors.includes("Fname can't be blank") ? <li className="errors">Please enter your first name.</li> : null;
        const lname = errors.includes("Lname can't be blank") ? <li className="errors">Please enter your last name.</li> : null;
        const email = errors.includes("Email can't be blank") ? <li className="errors">Please enter your first name.</li> : null;
        const password = errors.includes("Password is too short (minimum is 6 characters)") ? <li className="errors">Please enter your password.</li> : null;
        const confirmPassword = errors.includes("re-password") ? <li className="errors">Please re-enter your password.</li> : null;
        const signinEmail = errors.includes("email") ? <li className="errors">Please enter your password.</li> : null;
        const signinPassword = errors.includes("password") || errors.includes("Invalid username/password combination")  ? <li className="errors">Please enter your password.</li> : null;
        if (this.props.formType === "Create Account") {
            return (
                <ul>
                    {fname}
                    {lname}
                    {email}
                    {password}
                    {confirmPassword}
                </ul>
            )
        } else if (this.props.formType === "Sign In"){
            return (  
                <ul>
                    {signinEmail}
                    {signinPassword}
                </ul>
            )
        } else {
            return null
        }
    }

    render (){
        const errors = Object.values(this.props.errors);
        const redFname = errors.includes("Fname can't be blank") ? "red-border" : '';
        const redLname = errors.includes("Lname can't be blank") ? "red-border" : '';
        const redEmail = errors.includes("Email can't be blank") ? "red-border" : '';
        const redPassword = errors.includes("Password is too short (minimum is 6 characters)") ? "red-border" : '';
        const redConfirmPassword = errors.includes("re-password") ? "red-border" : '';
        const redSigninEmail = errors.includes("email") ? "red-border" : '';
        const redSigninPassword = errors.includes("password") ? "red-border" : '';

        const demoUser = ({
            email: "demo@personalbar.com",
            password: 111111
        })

         if (this.props.formType === "Create Account") {
             
          return (
            <div className="form-container">
                  <form className="form-holder" onSubmit={this.handleSubmit}>
                    <h2 className="form-title">Welcome to OpenCounter!</h2>
                    {this.renderErrors()}
                    <input type="text" value={this.state.fname} className={redFname} onChange={this.handleInput('fname')} placeholder="First Name*" />
                    <input type="text" value={this.state.lname} className={redLname} onChange={this.handleInput('lname')} placeholder="Last Name*" />
                    <input type="text" value={this.state.email} className={redEmail} onChange={this.handleInput('email')} placeholder="Enter email*" />
                    <input type="password" value={this.state.password} className={redPassword} onChange={this.handleInput('password')} placeholder="Enter password*" />
                    <input type="password" value={this.state.confirmPassword} className={redConfirmPassword} onChange={this.handleInput('confirmPassword')} placeholder="Re-enter password*" />
                    <input type="submit" value={this.props.formType}/>
                    {/* <input type="submit" value="Demo User" onClick = { () => this.props.login(demoUser).then(this.props.closeModal())} /> */}
                </form>
            </div>
        )} else { 
          return (
              <div className="form-container" >
                  <form className="form-holder" onSubmit={this.handleSubmit}>
                    <h2 className="form-title">Please sign in</h2>
                        {this.renderErrors()}
                      <input type="text" value={this.state.email} className={redSigninEmail} onChange={this.handleInput('email')} placeholder="Enter email*" />
                      <input type="password" value={this.state.password} className={redSigninPassword} onChange={this.handleInput('password')} placeholder="Enter password*" />
                        <input type="submit" value={this.props.formType} />
                      <input type="submit" value="Demo User" onClick={() => this.props.action(demoUser).then(this.props.closeModal())} />
                </form>
            </div>
        )}
    }
}

export default Signup;