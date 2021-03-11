import axios from 'axios';

const SPECIALITE_API_BASE_URL = "http://localhost:8080/api/v1/Specialites";

class SpecialiteService {

    getSpecialites(){
        return axios.get(SPECIALITE_API_BASE_URL);
    }

    createSpecialite(Specialite){
        return axios.post(SPECIALITE_API_BASE_URL, Specialite);
    }

    getSpecialiteById(specialiteId){
        return axios.get(SPECIALITE_API_BASE_URL + '/' + specialiteId);
    }

    updateSpecialite(Specialite, specialiteId){
        return axios.put(SPECIALITE_API_BASE_URL + '/' + specialiteId, Specialite);
    }

    deleteSpecialite(specialiteId){
        return axios.delete(SPECIALITE_API_BASE_URL + '/' + specialiteId);
    }
}

export default new SpecialiteService()