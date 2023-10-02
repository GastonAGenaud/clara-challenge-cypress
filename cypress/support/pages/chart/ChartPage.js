class ChartPage {

    selectSeriesItem(seriesNumber) {
        return cy.get(`span[rel="${seriesNumber}"]`).last();
    }
    chartItemIsSelected(seriesName) {
        return cy.get(`g[seriesName="${seriesName}"]`).find('path').should('have.attr', 'data:pieClicked', 'true')
    }

}

export default ChartPage;