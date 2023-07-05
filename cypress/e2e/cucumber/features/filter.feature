Feature: Filter suite

    Scenario: select and deselect a filter option
        Given I open the website
        Then verify the link
        When I write my credentials correctly
        Then I click on login button
        Then a homepage will be displayed
        When I click on the the reclamation button
        When I select filter options
        Then The cancel button becomes visible
        Then The filter button is not disabled
        When I deselect the filter options
        Then The cancel button becomes invisible
        Then I check if the filter button is disabled

    Scenario: Filter the reclamation
        Given I open the website
        Then verify the link
        When I write my credentials correctly
        Then I click on login button
        Then a homepage will be displayed
        When I click on the the reclamation button
        Then I check if the filter button is disabled
        Then I check all the multiselect lists
        When I select filter options
        Then The cancel button becomes visible
        When I click on the filter button
        Then A list of filtred elements displays

    Scenario: Cancel the applied filter
        Given I open the website
        Then verify the link
        When I write my credentials correctly
        Then I click on login button
        Then a homepage will be displayed
        When I click on the the reclamation button
        Then I select filter options
        Then I click on the filter button
        When I click on the cancel button
        Then The filter resets and all reclamations displays

    Scenario: Unavailable filtre message
        Given I open the website
        Then verify the link
        When I write my credentials correctly
        Then I click on login button
        Then a homepage will be displayed
        When I click on the the reclamation button
        Then I select wrong filter options
        When I click on the filter button
        Then An unavailable content message is shown

