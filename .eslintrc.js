module.exports = {
  root: true,
  env: {
    node: true
  },
  // extends: ['plugin:vue/recommended', 'eslint:recommended'], // 官方推荐，比较严格
  extends: ["plugin:vue/essential", "eslint:recommended"], // 基本的
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "off",
    "no-unreachable": "off"
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 6,
    sourceType: "module"
  }
};
