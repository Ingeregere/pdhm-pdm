import axios from 'axios'
import { API } from '../../config'

class NewsLetter {
  
    postNewsLetter(data) {
        return axios.post(`${API}/newsletter/post-newsletter/`, data)
    }
}

export default new NewsLetter