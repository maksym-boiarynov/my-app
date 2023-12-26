import axios from "axios";
import APIHelperBase from "./APIHelperBase.js";

class AdminHelper extends APIHelperBase{

    static async Login(password) {
        var curDate = new Date();

        if (this.isValidString(localStorage.getItem("jwt")) && Date.parse(localStorage.getItem("jwtExpDate")) > curDate) {
            return localStorage.getItem("jwt");
        }

        console.log("getting jwt");
        const config = { headers: {'Content-Type': 'application/json'} };
        var response = await axios.post(
            this.baseURL + "/Admin",
                password,
                config
        );
        let jwt = response.data;

        localStorage.setItem("jwt", jwt);
        localStorage.setItem("jwtExpDate", new Date(curDate.getTime() + 30 * 60000));
        return jwt;
    }
    static async isLoggedIn()
    {
        var curDate = new Date();
        console.log(localStorage.getItem("jwt"));
        console.log(this.isValidString(localStorage.getItem("jwt")));
        return (this.isValidString(localStorage.getItem("jwt")) && Date.parse(localStorage.getItem("jwtExpDate")) > curDate);
    }
}
export default AdminHelper;