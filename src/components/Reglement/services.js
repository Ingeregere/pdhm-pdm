import axios from 'axios'
import { API } from '../../config'

class Rule {

    getAllServices(){
        return axios.get(`${API}/rule/get-all-rule`)
    }
    
}


export default new Rule










