import axios from 'axios';

const DISPONIBILITE_API_BASE_URL = "http://localhost:8009/api/disponibilites";

class DisponibilitesService {

 

    createDisponib(disponib){
        return axios.post(DISPONIBILITE_API_BASE_URL, disponib);
    }

    getDisponibById(id){
        return axios.get(DISPONIBILITE_API_BASE_URL + '/' + id);
    }

    updateDisponib(disponibilite){
        return axios.put(DISPONIBILITE_API_BASE_URL, disponibilite);
    }

    deleteDisponib(disponibId){
        return axios.delete(DISPONIBILITE_API_BASE_URL + '/' + disponibId);
    }
}

export default new DisponibilitesService()