# README.md

## Project Overview
This project, named `apexchart-cypress`, is a test automation project specifically created for the company CLARA as a part of an exercise. It is developed by Gaston Genaud and serves to validate the functionality of a web page containing a chart.

### Purpose
The primary goal of this project is to ensure the stability and reliability of the chart feature on the web page by automating the testing processes.

### Project Structure
- The test cases are specified in `cypress\e2e\features\Chart.feature`.
- The page objects are located in `cypress\support\pages\chart\ChartPage.js`.

## POM (Page Object Model)
The Page Object Model (POM) is a design pattern used in the automation of testing to create an object repository for UI elements. In this project, POM is used to improve test maintenance and reduce code duplication. A page object is created for the chart page, which is located at `cypress\support\pages\chart\ChartPage.js`, and it contains the elements and actions that can be performed on the chart page.

## Test Case: Chart Feature
The test case is designed to validate the selection of items on the chart. The feature file, `Chart.feature`, outlines the scenario as follows:

```gherkin
Feature: Chart

    Scenario Outline: Validating the selection of the chart's items
        Given I am on the chart page
        When I select the chart items '<num>'
        Then the chart should be selected '<series>'

    Examples:
        | series   | num |
        | series-1 | 1   |
        | series-2 | 2   |
        | series-3 | 3   |
        | series-4 | 4   |
        | series-5 | 5   |
```

This scenario tests the selection of various chart items and validates whether the correct series is selected.

## Dependencies
This project utilizes several dependencies to achieve its functionality:

```json
{
    "@badeball/cypress-cucumber-preprocessor": "^18.0.6",
    "@bahmutov/cypress-esbuild-preprocessor": "^2.2.0",
    "@esbuild-plugins/node-modules-polyfill": "^0.2.2",
    "cypress": "^13.3.0"
}
```

- `cypress`: The main dependency used for writing the test cases.
- `@badeball/cypress-cucumber-preprocessor`: A preprocessor for Cypress that allows the use of Cucumber features.
- `@bahmutov/cypress-esbuild-preprocessor`: A preprocessor plugin that uses esbuild.
- `@esbuild-plugins/node-modules-polyfill`: A plugin that provides a polyfill for node modules.

## Scripts
- To open the Cypress Test Runner, use the following command:
    ```sh
    npm run open
    ```
- To run the Cypress Test Runner, use the following command:
    ```sh
    npm run test
    ```

## Author
Gaston Genaud

## License
This project is licensed under the MIT License.

