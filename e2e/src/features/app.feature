Feature: Go to the home
  Display the title

  Scenario: Home Page
    Given I am on the home page
    When I do nothing
    Then I should see the title

  Scenario: Cucumber Image
    Given I am on the About page
    When I click on cetriolo button
    Then I see cucumber image
