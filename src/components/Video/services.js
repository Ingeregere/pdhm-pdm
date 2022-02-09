import axios from 'axios'
import { API } from '../../config'

class videoLink {

    getLinkVideo(){
        return axios.get(`${API}/video/publicity/get-all-video-publicity`)
    }
}

export default new videoLink
