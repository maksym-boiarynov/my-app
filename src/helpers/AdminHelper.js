import axios from "axios";
import APIHelperBase from "./APIHelperBase.js";

class CodesHelper extends APIHelperBase{

    static async Login(password) {
        var curDate = new Date();

        if (localStorage.getItem("jwt") != "" && Date.parse(localStorage.getItem("jwtExpDate")) > curDate) {
            return localStorage.getItem("jwt");
        }

        console.log("getting jwt")
        var response = await axios.post(
            this.baseURL + "/Admin",
            {
                password
            }
        );
        let code = response.data;

        localStorage.setItem("code", code);
        localStorage.setItem("codeExpDate", new Date(curDate.getTime() + 30 * 60000));
        return code;
    }
}
export default CodesHelper;