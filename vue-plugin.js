const { fast } = require('./index');

const FastDebuggerPlugin = {
  install(Vue, options) {
    Vue.prototype.$fast = fast;
  }
};

module.exports = FastDebuggerPlugin;
