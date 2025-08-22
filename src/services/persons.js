import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'


const getAll = () =>{ return axios.get(baseUrl).then(response => response.data) } // Obtiene todos los contactos desde el servidor y devuelve los datos

const deletePerson = (id) => axios.delete(`${baseUrl}/${id}`) // Elimina el contacto con el id especificado

const create = (newObject) => { // Crea un nuevo contacto con el objeto proporcionado
  return axios.post(baseUrl, newObject).then(response => response.data)
}

const update = (id, newObject) => { // Actualiza el contacto con el id especificado con los nuevos datos
  return axios.put(`${baseUrl}/${id}`, newObject).then(response => response.data)
}

export default { getAll, deletePerson, create, update }
      
     