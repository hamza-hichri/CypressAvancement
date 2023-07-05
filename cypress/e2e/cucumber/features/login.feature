Feature: Authentification suite

  Scenario: loading page
    Given I open the website
    Then verify the link
    When I leave the inputs empty
    Then the connect button become unclickable

  Scenario: login with wrong email 
    Given I open the website
    Then verify the link
    When I put a wrong formatted email
    Then the connect button become unclickable

  Scenario: login uncorrectly
    Given I open the website
    Then verify the link
    When I write my credentials uncorrectly
    Then I click on login button 
    Then a bad credentials shows
    
  Scenario: show and hide password
    Given I open the website
    Then verify the link
    When I write my credentials correctly
    Then I click the show password
    Then the password shows as text

  Scenario: login correctly
    Given I open the website
    Then verify the link 
    When I write my credentials correctly
    Then I click on login button 
    Then a homepage will be displayed

