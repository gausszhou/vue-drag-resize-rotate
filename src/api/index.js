import http from "./http";

export default {
  install: function(Vue) {
    Vue.prototype.$http = http;
  }
};
