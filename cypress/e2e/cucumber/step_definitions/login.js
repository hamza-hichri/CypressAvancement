const {
  Given,
  Then,
  When,
} = require("@badeball/cypress-cucumber-preprocessor");
const { default: LoginPage } = require("../../POM/loginPage");
const loginPage = new LoginPage();

Given("I open the website", () => {
  loginPage.website;
});
Then("verify the link", () => {
  loginPage.verify();
});

/////////////////////////////////////////////
When("I leave the inputs empty", () => {
  loginPage.inputEmail.should("have.value", "");
  loginPage.inputPassword.should("have.value", "");
});
Then("the connect button become unclickable", () => {
  loginPage.inputSubmit.should("be.disabled");
  cy.wait(1000);
});

//////////////////////////////////////////

When("I write my credentials uncorrectly", () => {
  cy.fixture("loginFailed.json").then((data) => {
    loginPage.login(data.username, data.password);
    //loginPage.buttonclicked()
  });
});

Then("a bad credentials shows", () => {
  loginPage.error();
  cy.wait(1000);
});

//////////////////////////////////////////////////
When("I put a wrong formatted email", () => {
  cy.fixture("loginFailed.json").then((data) => {
    loginPage.login(data.wrongformatted, data.password);
  });
});

///////////////////////////////////////////////////////

When("I write my credentials correctly", () => {
  cy.fixture("loginCorrect.json").then((data) => {
    loginPage.login(data.username, data.password);
  });
});
Then("I click on login button", () => {
  loginPage.buttonclicked();
});

Then("a homepage will be displayed", () => {
  loginPage.dashboard();

  cy.wait(1000);
});

//////////////////////////////////////////////
Then("I click the show password", () => {
  cy.get("#eye-icon1 > svg").click().wait(1000);
});
Then("the password shows as text", () => {
  cy.get("#password").should("not.be.hidden");
});
