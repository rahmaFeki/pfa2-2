import axios from 'axios';

const DOMAINE_API_BASE_URL = "http://localhost:8009/api/formateurs";

class FormateurService {

    getFormateurs(){
        return axios.get(DOMAINE_API_BASE_URL);
    }

    createFormateur(Formateur){
        return axios.post(DOMAINE_API_BASE_URL, Formateur);
    }
 

    getDomaineById(formateurId){
        return axios.get(DOMAINE_API_BASE_URL + '/' + formateurId);
    }

    updateFormateur(Formateur, formateurId){
        return axios.put(DOMAINE_API_BASE_URL + '/' + formateurId, Formateur);
    }

    deleteFormateur(formateurId){
        return axios.delete(DOMAINE_API_BASE_URL + '/' + formateurId);
    }
}

export default new FormateurService()