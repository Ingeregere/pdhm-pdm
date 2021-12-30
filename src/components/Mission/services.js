import axios from 'axios'
import { API } from '../../config'

class Rule {

    getAllServices(){
        return axios.get(`${API}/mission/get-all-mission`)
    }
    
}


export default new Rule










