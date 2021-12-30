import axios from 'axios'
import { API } from '../../config'

class Rule {

    getAllServices(){
        return axios.get(`${API}/regional/get-all-regional`)
    }
    
}


export default new Rule










