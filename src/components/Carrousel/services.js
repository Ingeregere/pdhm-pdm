import axios from 'axios'
import { API } from '../../config'

class CarouselHomepage {

    getAllCarouselHomepage(){
        return axios.get(`${API}/carousel/get-all-carousels`)
    }
    getAllCarouselHomepageAside(){
        return axios.get(`${API}/publicity/get-all-publicity`)
    }
}


export default new CarouselHomepage










