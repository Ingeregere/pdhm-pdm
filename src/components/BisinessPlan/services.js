import axios from 'axios'
import { API } from '../../config'
class Rule {
    getAllServices(){
        return axios.get(`${API}/business/get-all-business`)
    }
}
export default new Rule










