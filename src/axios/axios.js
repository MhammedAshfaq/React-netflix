import axios from "axios";
import { BaseUrl } from '../constent'

const instance = axios.create({
    baseURL: BaseUrl
});

export default instance;