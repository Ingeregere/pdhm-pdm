import axios from 'axios'
import { API } from '../../config'

class pdfAds {

    getPdfAds(){
        return axios.get(`${API}/text/publicity/get-all-text-publicity`)
    }
}

export default new pdfAds
