import axios from "axios";
import store from "../Components/Redux/Store";

const tokenAxios = axios.create();

tokenAxios.interceptors.request.use(request => {

    request.headers = {
        "authorization": store.getState().authState.user?.token
    };

    return request;
});

export default tokenAxios;