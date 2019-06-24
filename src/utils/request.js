import axios from "axios";
// const config = require('config');

// const dbConfig = config.get('Customer.dbConfig');
// console.log(dbConfig)
const baseURL = "http://202.45.146.41";

const instance = axios.create({
  baseURL,
  timeout: 10000
});

export default instance;
