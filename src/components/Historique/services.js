import axios from 'axios'
import { API } from '../../config'

class Rule {

    getAllServices(){
        return axios.get(`${API}/historical/get-all-historical`)
    }
    
}


export default new Rule










