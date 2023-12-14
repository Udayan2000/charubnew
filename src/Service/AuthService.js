import HttpClientXml from "../utils/Utils/HttpClientXml";


const GetAllCountry = async()=> {
    let endpoint = "get-countries"
    return HttpClientXml.get(endpoint)
}

const Register = async(data) => {
    let endpoint = "register";
    return HttpClientXml.post(endpoint, data)
}


const GetAllSkills = async()=> {
    let endpoint = "get-skills"
    return HttpClientXml.get(endpoint)
}



export default {
    GetAllCountry,
    Register,
    GetAllSkills
}