module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "请填写项目名称"
    },
    "appid": {
      "type": "string",
      "required": false,
      "message": "wxmp appid",
      "default": "touristappid"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "请填写项目描述",
      "default": "A Mpvue project"
    },
    "author": {
      "type": "string",
      "message": "请填写作者名称"
    },
    "build": {
      "type": "list",
      "message": "mpvue仅支持runtime-only",
      "choices": [
        // {
        //   "name": "Runtime + Compiler: recommended for most users",
        //   "value": "standalone",
        //   "short": "standalone"
        // },
        {
          "name": "Runtime-only: no custom render function, only can compile template in *.vue",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    // "vuex": {
    //   "type": "confirm",
    //   "message": "Use Vuex?"
    // },
    "lint": {
      "type": "confirm",
      "message": "是否使用ESLint？"
    },
    // "lintConfig": {
    //   "when": "lint",
    //   "type": "list",
    //   "message": "Pick an ESLint preset",
    //   "choices": [
    //     {
    //       "name": "Standard (https://github.com/feross/standard)",
    //       "value": "standard",
    //       "short": "Standard"
    //     },
    //     {
    //       "name": "Airbnb (https://github.com/airbnb/javascript)",
    //       "value": "airbnb",
    //       "short": "Airbnb"
    //     },
    //     {
    //       "name": "none (configure it yourself)",
    //       "value": "none",
    //       "short": "none"
    //     }
    //   ]
    // },
    "test": {
      "value": false,
      "message": "欢迎学习mpvue相关课程，地址：https://coding.imooc.com/class/376.html"
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    // "config/test.env.js": "unit || e2e",
    // "test/unit/**/*": "unit",
    // "build/webpack.test.conf.js": "unit",
    // "test/e2e/**/*": "e2e"
    "config/test.env.js": "test",
    "test/unit/**/*": "test",
    "build/webpack.test.conf.js": "test",
    "test/e2e/**/*": "test",
    "src/pages/counter/*": "vuex",
  },
  // "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at http://mpvue.com"
};
