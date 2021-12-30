import axios from 'axios'
import { API } from '../../config'

class Contact {
  
    postContact(data) {
        return axios.post(`${API}/page-contact/post-contact/`, data)
    }
}

export default new Contact