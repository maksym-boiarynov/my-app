import axios from "axios";

class CodesHelper{
    static baseURL = "http://26.145.106.179:7281" //hardcoded ip..?

    static async GetCode() {
        var curDate = new Date();
        //console.log(curDate);
        if (localStorage.getItem("code") != "" && Date.parse(localStorage.getItem("codeExpDate")) > curDate) {
            return localStorage.getItem("code");
        }

        console.log("getting a code.........................")
        var response = await axios.post(
            this.baseURL + "/Generate"
        );
        let code = response.data;

        localStorage.setItem("code", code);
        localStorage.setItem("codeExpDate", new Date(curDate.getTime() + 30 * 60000));
        return code;
    }
}
export default CodesHelper;