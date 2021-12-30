import axios from 'axios'
import { API } from '../../config'

class Rule {

    getAllServices(){
        return axios.get(`${API}/innovation/get-all-innovation`)
    }
    
}


export default new Rule










