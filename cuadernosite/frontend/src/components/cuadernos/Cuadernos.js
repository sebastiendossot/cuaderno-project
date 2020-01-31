import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getCuadernos, deleteCuaderno }  from '../../actions/cuadernos'

export class Cuadernos extends Component {
  static propTypes = {
    cuadernos: PropTypes.array.isRequired,
    getCuadernos: PropTypes.func.isRequired,
    deleteCuaderno: PropTypes.func.isRequired,
  }

  componentDidMount(){
    this.props.getCuadernos();
  }

  render() {
    return (
      <Fragment>
        <h2>
          Cuadernos List
        </h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Abstract</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            {this.props.cuadernos.map(cuaderno => (
              <tr key={cuaderno.id}>
                <td>{cuaderno.id}</td>
                <td>{cuaderno.title}</td>
                <td>{cuaderno.abstract}</td>
                <td><button onClick={this.props.deleteCuaderno.bind(this, cuaderno.id)} className="btn btn-danger btn-sm">Delete</button></td>
              </tr>)
              
            )}
          </tbody>
        </table>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  cuadernos: state.cuadernos.cuadernos
})

export default connect(mapStateToProps, {getCuadernos, deleteCuaderno})(Cuadernos);
