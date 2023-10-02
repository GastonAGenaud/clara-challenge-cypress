const { defineConfig } = require("cypress");
const { NodeModulesPolyfillPlugin } = require('@esbuild-plugins/node-modules-polyfill');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({

  e2e: {
    async setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        console.log(launchOptions.args);

        if (browser.name === "chrome") {
          launchOptions.args.push("--disable-gpu");
        }

        return launchOptions;
      });

      Object.keys(process.env).forEach((envKey) => {
        config.env[envKey] = process.env[envKey];
      });

      const bundler = createBundler({
        plugins: [NodeModulesPolyfillPlugin(), createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "cypress/e2e/features/**/*.feature",
    viewportHeight: 960,
    viewportWidth: 1536,
    chromeWebSecurity: false,
    videoUploadOnPasses: false,
    video: false,
    retries: {
      runMode: 0,
      openMode: 0,
    }
  },
});
