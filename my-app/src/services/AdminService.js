import axios from 'axios';

const DOMAINE_API_BASE_URL = "http://localhost:8009/api/login";

class AdminService {



    login(admin){
        return axios.post(DOMAINE_API_BASE_URL, admin);
    }
 

}

export default new AdminService()