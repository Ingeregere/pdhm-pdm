import axios from 'axios'
import { API } from '../../config'

class Rule {

    getAllServices(){
        return axios.get(`${API}/nation/get-all-nation`)
    }
    
}


export default new Rule










