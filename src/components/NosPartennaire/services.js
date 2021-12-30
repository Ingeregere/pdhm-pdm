import axios from 'axios'
import { API } from '../../config'

class Rule {

    getAllServices(){
        return axios.get(`${API}/partner/get-all-partner`)
    }
    
}


export default new Rule










