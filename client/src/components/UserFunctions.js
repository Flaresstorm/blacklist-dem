import axios from 'axios'
//axios sirve como gestionaron para las consultar (leer documentacion ), axios puede usar rutas api http
export const register = newUser => {
  return axios
    .post('users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
      file_name: newUser.file_name,
      number_register: newUser.number_register
    })
    .then(response => {
      console.log('Registered')
    })
}
export const update = editUser => {
  return axios
    .put('users/register', {
      first_name: editUser.first_name,
      last_name: editUser.last_name,
      email: editUser.email,
      password: editUser.password,
      file_name: editUser.file_name,
      number_register: editUser.number_register
    })
    .then(response => {
      console.log('Registered')
    })
}
export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
