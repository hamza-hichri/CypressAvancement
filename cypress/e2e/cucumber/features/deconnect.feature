Feature: Deconnection suite

  Scenario: deconnect correctly
    Given I open the website
    Then verify the link 
    When I write my credentials correctly
    Then I click on login button 
    Then a homepage will be displayed
    When I click on deconnect
    Then a popup shows
    Then I confirm the deconnection
    Then I verify it

  Scenario: cancel deconnection
    Given I open the website
    Then verify the link 
    When I write my credentials correctly
    Then I click on login button 
    Then a homepage will be displayed
    When I click on deconnect
    Then a popup shows
    Then I click on cancel 

  Scenario: cancel deconnection by clicking outside the box
    Given I open the website
    Then verify the link 
    When I write my credentials correctly
    Then I click on login button 
    Then a homepage will be displayed
    When I click on deconnect
    Then a popup shows
    Then I click outside the box 
