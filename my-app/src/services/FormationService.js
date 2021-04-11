import axios from 'axios';

const FORMATION_API_BASE_URL = "http://localhost:8009/api/formations";

class FormationService {

    getFormations(){
        return axios.get(FORMATION_API_BASE_URL);
    }

    createFormation(formation){
        return axios.post(FORMATION_API_BASE_URL, formation);
    }

    getFormationById(formationId){
        return axios.get(FORMATION_API_BASE_URL + '/' + formationId);
    }

    updateFormation(formation){
        return axios.put(FORMATION_API_BASE_URL, formation);
    }

    deleteFormation(formationId){
        return axios.delete(FORMATION_API_BASE_URL + '/' + formationId);
    }
}

export default new FormationService()