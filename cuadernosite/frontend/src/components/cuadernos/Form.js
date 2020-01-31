import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addCuaderno  } from '../../actions/cuadernos'


export class Form extends Component {
  state = {
    title: '',
    abstract: ''
  }

  static propTypes = { 
    addCuaderno: PropTypes.func.isRequired 
  }

  onChange = e => this.setState({[e.target.name]: e.target.value})

  onSubmit = e => {
    e.preventDefault();
    const { title, abstract } = this.state;
    const cuaderno = { title, abstract };
    this.props.addCuaderno(cuaderno); 
    this.setState({
      title: "",
      abstract: ""
    })
  }

  render() {
    const {title, abstract} = this.state;
    return (
      <div className="card card-body m-4 mb-4">
        <h2> Add Cuaderno </h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter title"
              name="title"
              onChange={this.onChange}
              value={title}
              />
            </div>
          <div className="form-group">
            <label>Abstract</label>
            <textarea 
              className="form-control" 
              placeholder="Enter abstract"
              name="abstract"
              onChange={this.onChange}
              value={abstract}/>
           </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addCuaderno  })(Form)
