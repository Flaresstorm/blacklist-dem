import React, { Component } from 'react'
//para mostrar y añadir data se debe definir en el contructor de cada componente

class Landing extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Bienvenido</h1>
            <hr />
            <p>Sistema de Blacklist para Departamento de Extranjería y Migración</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
