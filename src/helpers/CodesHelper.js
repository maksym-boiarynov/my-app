import axios from "axios";
import APIHelperBase from "./APIHelperBase.js"

class CodesHelper extends APIHelperBase {

    static async GetCode() {
        var curDate = new Date();
        //console.log(curDate);
        if (this.isValidString(localStorage.getItem("code")) && Date.parse(localStorage.getItem("codeExpDate")) > curDate) {
            return localStorage.getItem("code");
        }

        console.log("getting a code.........................")
        let code = await this.HandleRequest(async () =>
        {
            return axios.post(this.baseURL + "/Generate")
        })
        if (! this.isValidCode(code))
            return;
        console.log(code);
        localStorage.setItem("code", code);
        localStorage.setItem("codeExpDate", new Date(curDate.getTime() + 30 * 60000));
        return code;
    }
}
export default CodesHelper;