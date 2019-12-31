import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
//para mostrar y añadir data se debe definir en el contructor de cada componente

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      file_name: '',
      created: '',
      email: '',
      register_number: '',
      errors: {}
      
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      file_name: decoded.file_name,
      email: decoded.email,
      register_number: decoded.register_number,
      number_register: decoded.number_register,
      created: decoded.created
    })
    
    
  }

  render() {
    return (
      <div className="container">
        <h1 className="main-title">Último registro</h1>
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            
          </div>
          <table className="table col-md-6 mx-auto">
            <thead>
              <td>Fecha</td>
              <td>Responsable</td>
              <td>Nombre archivo</td>
              <td>Numero registro</td>
            </thead>
            <tbody>
                <td>{this.state.created}</td>
                <td>{this.state.email}</td>
                <td>{this.state.file_name}</td>
                <td>{this.state.number_register}</td>
            </tbody>
          </table>
        </div>
        <hr/>
          <p>Subir nuevo archivo</p>
          <input type="file" id="myFile" name="filename2"/><br/><br/>
          <input class="btn btn-primary" type="submit" value="Subir"/>
          <br/><br/><br/>
      </div>
      
    )
  }
}
export default Profile