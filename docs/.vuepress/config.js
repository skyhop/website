const getConfig = require("vuepress-bar");

module.exports = {
  title: "Skyhop",
  base: "/website/",
  description: "An automatic logbook for pilots",
  themeConfig: {
    ...getConfig(`${__dirname}/..`)
  },
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ]
  }
};