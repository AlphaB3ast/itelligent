const presets = [
    [
      "@babel/env",
      {
        targets: {
          edge: "44",
          firefox: "70",
          chrome: "78",
          safari: "13.0",
        },
        useBuiltIns: "usage",
      },
    ],
  ];
  
  module.exports = { presets };