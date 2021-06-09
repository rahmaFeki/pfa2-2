import axios from 'axios';

const SESSION_API_BASE_URL = "http://localhost:8009/api/sessions";

class SessionService {

 

    createSession(session){
        return axios.post(SESSION_API_BASE_URL, session);
    }


    getSessions(id){
        return axios.get(SESSION_API_BASE_URL + '/' + id);
    }

    updateSession(SESSION){
        return axios.put(SESSION_API_BASE_URL, SESSION);
    }

    deleteSession(sessionId){
        return axios.delete(SESSION_API_BASE_URL + '/' + sessionId);
    }
}

export default new SessionService()