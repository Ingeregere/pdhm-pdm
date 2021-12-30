import axios from 'axios'
import { API } from '../../config'

class Vision {

    getAllServices(){
        return axios.get(`${API}/vision/get-all-vision`)
    }
    
}


export default new Vision










