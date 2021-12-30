import axios from 'axios'
import { API } from '../../config'

class Rule {

    getAllServices(){
        return axios.get(`${API}/manual/get-all-manual`)
    }
    
}


export default new Rule










