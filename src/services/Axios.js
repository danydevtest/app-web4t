import Axios from "axios";

export default Axios.create({
    baseURL:"http://localhost:4000/api/V1"
})