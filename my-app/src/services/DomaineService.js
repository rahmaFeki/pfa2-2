import axios from 'axios';

const DOMAINE_API_BASE_URL = "http://localhost:8080/api/v1/domaines";

class DomaineService {

    getDomaines(){
        return axios.get(DOMAINE_API_BASE_URL);
    }

    createDomaine(domaine){
        return axios.post(DOMAINE_API_BASE_URL, domaine);
    }

    getDomaineById(domaineId){
        return axios.get(DOMAINE_API_BASE_URL + '/' + domaineId);
    }

    updateDomaine(domaine, domaineId){
        return axios.put(DOMAINE_API_BASE_URL + '/' + domaineId, domaine);
    }

    deleteDomaine(domaineId){
        return axios.delete(DOMAINE_API_BASE_URL + '/' + domaineId);
    }
}

export default new DomaineService()