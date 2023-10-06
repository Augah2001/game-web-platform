import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "48e3762875864c1db6a8a25df6939805"
    }
})