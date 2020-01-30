import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage} from '../../actions/messages'

export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '' 
  }

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool 
  }

  onSubmit = e => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if(password !== password2){
      this.props.createMessage({ passwordsNotMatching: "Passwords do not match" })
    }else{
      const newUser = {username, password, email};
      this.props.register(newUser);
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() { 
    if(this.props.isAuthenticated){
      return <Redirect to="/" />;
    }
    
    const { username, email, password, password2 } = this.state;
   
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body m-4 mb-4">
          <h2 className="text-center"> Register </h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>UserName</label>
              <input 
                type="text" 
                className="form-control" 
                name="username"
                onChange={this.onChange}
                value={username}
                />
              </div>

            <div className="form-group">
              <label>Email address</label>
              <input 
                type="email" 
                className="form-control" 
                placeholder="Enter email"
                name="email"
                onChange={this.onChange}
                value={email}/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                className="form-control" 
                name="password"
                onChange={this.onChange}
                value={password}
                />
            </div>
            <div className="form-group">
              <label>Confirm password</label>
              <input 
                type="password" 
                className="form-control" 
                name="password2"
                onChange={this.onChange}
                value={password2}
                />
              </div>
            <button type="submit" className="btn btn-primary">Register</button>
            <p> Already have an account ? <Link to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register, createMessage })(Register)
