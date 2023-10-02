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