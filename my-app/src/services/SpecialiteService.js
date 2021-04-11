import axios from 'axios';

const SPECIALITE_API_BASE_URL = "http://localhost:8009/api/Specialites";

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
    deleteSpecialiteByDomaine(domaineId){
        return axios.delete(SPECIALITE_API_BASE_URL + '/delete/' + domaineId);
    }
    updateSpecialite(Specialite){
        return axios.put(SPECIALITE_API_BASE_URL, Specialite);
    }

    deleteSpecialite(specialiteId){
        return axios.delete(SPECIALITE_API_BASE_URL + '/' + specialiteId);
    }
}

export default new SpecialiteService()