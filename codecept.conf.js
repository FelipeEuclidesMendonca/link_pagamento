const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'scenarios/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://euclides.mobypay.com.br/',
      browser: 'chrome',
      logLevel: "error",
      logOutput: ".//logs//output//webdriver",
      screenshotOnReject: true,
      smartWait: 5000,
      windowSize: "1920x1080", // largura x altura.
      timeouts: {
        script: 10000,
        "page load": 10000
      },
      desiredCapabilities: {
        chromeOptions: {
          args: ["incognito", "--lang=pt-BR"],
          //args: ["incognito", "--headless", "--disable-gpu", "--lang=pt-BR"],
          w3c: false
        }
      }
    }
  },
  include: {
    I: './steps_file.js',
    acessar_link: "./pages/acessar_link.js"
  },
  bootstrap: null,
  mocha: {
    reporterEnabled: "mochawesome",
    reporterOptions: {
      "codeceptjs-cli-reporter": {
        stdout: "-",
        options: {
          verbose: true,
          steps: true
        }
      },
      mochawesome: {
        stdout: "-",
        options: {
          reportDir: ".//logs//output",
          reportFilename: "report",
          reportPageTitle: "tests-with-codeceptjs - Acceptance Tests",
          reportTitle: "tests-with-codeceptjs - Acceptance Tests",
          autoOpen: true,
          enableCode: true,
          inlineAssets: true,
          overwrite: true,
          quiet: false
        }
      }
    }
  },
  name: 'link-pagamento',
  Mochawesome: {
    uniqueScreenshotNames: "true"
  },
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    autoDelay: {
      enabled: true,
      delayBefore: 300,
      delayAfter: 300
    },
    wdio: {
      enabled: true,
      services: ["selenium-standalone"],
      seleniumArgs: {
        version: "3.141.59",
        baseURL: "https://selenium-release.storage.googleapis.com",
        basePath: "./node_modules/selenium-standalone/.selenium",
        logsFile: "./logs/output/seleniumDebug.log",
        drivers: {
          chrome: {
            version: "80.0.3987.16",
            arch: process.arch,
            baseURL: "https://chromedriver.storage.googleapis.com"
          }
        }
      },
      seleniumInstallArgs: {
        version: "3.141.59",
        baseURL: "https://selenium-release.storage.googleapis.com",
        drivers: {
          chrome: {
            version: "80.0.3987.16",
            arch: process.arch,
            baseURL: "https://chromedriver.storage.googleapis.com"
          }
        }
      }
    }
  }
}