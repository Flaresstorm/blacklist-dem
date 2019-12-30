import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class History extends Component {
  constructor() {
    super()
    this.state = {
      file_name: '',
      created: '',
      email: '',
      register_number: '',
      errors: {}
      
    }
    console.log(this.state.file_name + 'holaa')
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      file_name: decoded.file_name,
      email: decoded.email,
      register_number: decoded.register_number,
      created: decoded.created
    })
    
    
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Last register</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Nombre del archivo guardado</td>
                <td>{this.state.file_name}</td>
                {console.log('aquii'+ this.state.file_name)}
              </tr>
              <tr>
                <td>Total de registro guardados</td>
                <td>{this.state.register_number}</td>
              </tr>
              <tr>
                <td>Encargado</td>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                <td>created</td>
                <td>{this.state.created}</td>
              </tr>
            </tbody>
          </table>
        </div>
          <p>Subir nuevo archivo</p>
          <input type="file" id="myFile" name="filename2"/>
          <br/><br/><br/>
      </div>
      
    )
  }
}
export default History