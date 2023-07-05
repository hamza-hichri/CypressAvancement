Feature: assign suite

    Scenario: assign to me a reclamation
        Given I open the website
        Then verify the link
        When I write my credentials correctly
        Then I click on login button
        Then a homepage will be displayed
        When I click on the the reclamation button
        Then I assign a reclamation to me based on the status

    Scenario: assign to another person a reclamation
        Given I open the website
        Then verify the link
        When I write my credentials correctly
        Then I click on login button
        Then a homepage will be displayed
        When I click on the the reclamation button
        Then I assign a reclamation to another person based on the status
