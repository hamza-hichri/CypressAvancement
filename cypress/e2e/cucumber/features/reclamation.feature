Feature: reclamation suite

  Scenario: consult reclamation page
    Given I open the website
    Then verify the link
    When I write my credentials correctly
    Then I click on login button
    Then a homepage will be displayed
    When I click on the the reclamation button
    Then I verify the labels displays correctly

  Scenario: verify the existance of reclamations
    Given I open the website
    Then verify the link
    When I write my credentials correctly
    Then I click on login button
    Then a homepage will be displayed
    When I click on the the reclamation button
    Then I verify the display of the reclamation list

  Scenario: verify content of a reclamation
    Given I open the website
    Then verify the link
    When I write my credentials correctly
    Then I click on login button
    Then a homepage will be displayed
    When I click on the the reclamation button
    Then I check the content of a reclamation

  Scenario: ascending order using dates of reclamations
    Given I open the website
    Then verify the link
    When I write my credentials correctly
    Then I click on login button
    Then a homepage will be displayed
    When I click on the the reclamation button
    Then I check if the reclamations are ordered correctly

  Scenario: Testing the number of displayed reclamations
    Given I open the website
    Then verify the link
    When I write my credentials correctly
    Then I click on login button
    Then a homepage will be displayed
    When I click on the the reclamation button
    Then I check if the number of displayed reclamations

  Scenario: Testing the existance of pagination
    Given I open the website
    Then verify the link
    When I write my credentials correctly
    Then I click on login button
    Then a homepage will be displayed
    When I click on the the reclamation button
    Then I check the total recalamtions for paginations

  Scenario: Testing the first and last number of pagination
    Given I open the website
    Then verify the link
    When I write my credentials correctly
    Then I click on login button
    Then a homepage will be displayed
    When I click on the the reclamation button
    Then I check the existance of the first and last pagination

  Scenario: Testing the disabled buttons in pagination
    Given I open the website
    Then verify the link
    When I write my credentials correctly
    Then I click on login button
    Then a homepage will be displayed
    When I click on the the reclamation button
    Then the previous button should be disabled
    Then the next button should not be disabled
    When I click on the last page
    Then the next button become disabled

  Scenario: accessing the details of a reclamation
    Given I open the website
    Then verify the link
    When I write my credentials correctly
    Then I click on login button
    Then a homepage will be displayed
    When I click on the the reclamation button
    Then I click on a reclamation
    Then the details shows up correctly
  Scenario: testing the return button of a reclamation
    Given I open the website
    Then verify the link
    When I write my credentials correctly
    Then I click on login button
    Then a homepage will be displayed
    When I click on the the reclamation button
    Then I click on a reclamation
    Then I click on the return button
    Then return to the same page