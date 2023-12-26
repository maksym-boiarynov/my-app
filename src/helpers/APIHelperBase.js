import axios from "axios";

class APIHelperBase{
    static baseURL = "http://localhost:7281" //default: 26.145.106.179 ; hardcoded ip..?
    static async HandleRequest(request)
    {
        var response = await request().catch(() =>
        {
            console.log("Could not fetch the code! The error is at the next line")
        });
        if (response === undefined)
        {
            return;
        }
        let data = response.data;

        return data;
    }
    static isValidString(str)
    {
        return !(str == "" || str == undefined || str == "undefined")
    }
}
export default APIHelperBase;