import axios from 'axios'
import { API } from '../../config'

class MenuHomepage {

    getReglement(){
        return axios.get(`${API}/rule/get-all-rule`)
    }
    getHistorique(){
        return axios.get(`${API}/historical/get-all-historical`)
    }
    getBusinnessPlan(){
        return axios.get(`${API}/business/get-all-business`)
    }
    getManueldeprocedure(){
        return axios.get(`${API}/manual/get-all-manual`)
    }
}


export default new MenuHomepage










