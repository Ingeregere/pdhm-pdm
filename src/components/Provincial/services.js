import axios from 'axios'
import { API } from '../../config'

class Rule {

    getAllServices(){
        return axios.get(`${API}/provincial/get-all-provincial`)
    }
    
}


export default new Rule










