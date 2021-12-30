import axios from 'axios'
import { API } from '../../config'

class Vision {

    getAllServices(){
        return axios.get(`${API}/zonal/get-all-zonal`)
    }
    
}


export default new Vision










