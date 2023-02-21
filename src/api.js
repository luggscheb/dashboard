import axios from "axios";

const url = "http://127.0.0.1:5000/"

export async function api_medals(q){
    const response = await axios.get( url + 'medals/' + q ,{});
    return response.data;
}
export async function api_medals2(q){
    const response = await axios.get( url + 'medals2/' + q ,{});
    return response.data;
}
export async function api_events(){
    const response = await axios.get( url + 'events',{});
    return response.data;
}
export async function api_cbs(){
    const response = await axios.get( url + 'count_by_sex' ,{});
    return response.data;
}
export async function api_regions(){
    const response = await axios.get( url + 'regions',{});
    return response.data;
}
export async function api_cbs2(q){
    const response = await axios.get( url + 'count_by_sex2/' + q ,{});
    return response.data;
}
export async function api_mf_noc(q){
    const response = await axios.get( url + 'MF_by_noc/' + q ,{});
    return response.data;
}
export async function api_age_hight(q){
    const response = await axios.get( url + 'age_by_height/' + q ,{});
    return response.data;
}
