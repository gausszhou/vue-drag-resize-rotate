// request/http.js
import axios from "./axios";
let proxyUrl = "";

if (process.env.NODE_ENV === "development") {
  // proxyUrl = process.env.API_URL ? "proxyUrl" : "./mock";
}
proxyUrl = "./mock";
let notesUrl = "./notes/";

// post的序列化模块
// const Qs = require('qs');

/*-----get数据序列化-----*/
function serialize(params) {
  if (!params || Object.prototype.toString.call(params) != "[object Object]") {
    return "";
  }
  let str = "?",
    keys = Object.keys(params);
  keys.forEach(k => {
    if (
      Object.prototype.toString.call(params[k]) === "[object Object]" ||
      Object.prototype.toString.call(params[k]) === "[object Array]"
    ) {
      str += k + "=" + JSON.stringify(params[k]) + "&";
    } else {
      str += k + "=" + params[k] + "&";
    }
  });
  return str.substr(0, str.length - 1);
}

export default {
  getMarkdown: (params) => axios.get(notesUrl + params + '.md')
};

// main.js
// import http from './request/http'
