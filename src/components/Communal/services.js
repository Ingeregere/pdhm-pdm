import axios from 'axios'
import { API } from '../../config'

class Rule {

    getAllServices(){
        return axios.get(`${API}/communal/get-all-communal`)
    }
    
}


export default new Rule










