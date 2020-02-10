const getConfig = require("vuepress-bar");

module.exports = {
  title: "Skyhop",
  base: "/",
  description: "An automatic logbook for pilots",
  themeConfig: {
    ...getConfig(`${__dirname}/..`)
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-45114631-9' // UA-00000000-0
      }
    ]
  ]
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ]
  }
};