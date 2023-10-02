import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ChartPage from '../../../support/pages/chart/ChartPage.js';

const chartPage = new ChartPage();

Given('I am on the chart page', () => {
    cy.visit('https://apexcharts.com/samples/react/pie/simple-donut.html');
});

When('I select the chart items {string}', (seriesName) => {
    chartPage.selectSeriesItem(seriesName).click();
});


Then('the chart should be selected {string}', (seriesName) => {
chartPage.chartItemIsSelected(seriesName);
});