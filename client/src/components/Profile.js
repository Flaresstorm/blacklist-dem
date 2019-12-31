import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

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
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Last register</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <thead>
              <td>fecha</td>
              <td>responsable</td>
              <td>nombre archivo</td>
              <td>numero registro</td>
              
              
            </thead>
            <tbody>
                <td>{this.state.created}</td>
                <td>{this.state.email}</td>
                <td>{this.state.file_name}</td>
                <td>{this.state.number_register}</td>
               
             
                
              
            </tbody>
          </table>
        </div>
          <p>Subir nuevo archivo</p>
          <input type="file" id="myFile" name="filename2"/><br/><br/>
          <input class="btn btn-primary" type="submit" value="Submit"/>
          <br/><br/><br/>
      </div>
      
    )
  }
}
export default Profile