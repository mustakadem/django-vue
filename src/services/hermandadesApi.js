import axios from 'axios'
import Vue from 'vue'
import {getCookie} from "./utils";

let csrftoken = getCookie('csrftoken');

axios.defaults.headers.common['cookiename'] = 'csrftoken';
axios.defaults.headers.common['X-CSRFToken'] = csrftoken;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default {
  getListHermandades(){
    return axios.get('/hermandades/').then(response => {
      return response.data;
    })
  },
  postCrearHermandad(datos){
    return axios.post('/hermandades/',datos).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    })
  }
}
