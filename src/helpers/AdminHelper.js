import axios from "axios";
import APIHelperBase from "./APIHelperBase.js";

class AdminHelper extends APIHelperBase{
    static baseURL = APIHelperBase.baseURL + "/Admin";
    static async Login(password) {
        var curDate = new Date();

        if (this.isValidString(localStorage.getItem("jwt")) && Date.parse(localStorage.getItem("jwtExpDate")) > curDate) {
            return localStorage.getItem("jwt");
        }

        console.log("getting jwt");

        let jwt = await this.HandleRequest(async () =>
        {
            const config = { headers: {'Content-Type': 'application/json'} };
            return await axios.post(
                this.baseURL,
                    password,
                    config
            );
        }).data

        localStorage.setItem("jwt", jwt);
        localStorage.setItem("jwtExpDate", new Date(curDate.getTime() + 30 * 60000));
        return jwt;
    }
    static TokenPresent() //verifies the token presence in the localStorage (cache)
    {
        var curDate = new Date();
        var isValid = this.isValidString(localStorage.getItem("jwt"));
        var isNotExpired = Date.parse(localStorage.getItem("jwtExpDate")) > curDate;
        return (isValid && isNotExpired);
    }
    static async TokenValid() //tests the token against the API
    {//Note: This function is async, so make sure to either await it, or use TokenValid.then((response) => {...})
        //otherwise it will always be true, as ((bool)promise) == true, no matter the actual result
        let token = "Bearer " + localStorage.getItem("jwt");

        let response = await this.HandleRequest(async () =>
        {
            const config = { headers: {
                                       'Authorization': token} };
            return await axios.get(this.baseURL, config);
        })

        return response.status == 200;
    }
}
export default AdminHelper;