// eslint-disable-next-line no-undef
const target = process.env.CI ? "chrome.app" : "chrome.docker"
console.log("TARGET", target)

// eslint-disable-next-line
module.exports = {
  configurations: {
    "chrome.laptop": {
      target: "chrome.docker",
      width: 1366,
      height: 768,
      deviceScaleFactor: 1,
      mobile: false,
    },
    "chrome.iphone7": {
      target: "chrome.docker",
      preset: "iPhone 7",
    },
  },
}
