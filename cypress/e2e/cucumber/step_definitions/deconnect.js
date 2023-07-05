const {
  Given,
  Then,
  When,
} = require("@badeball/cypress-cucumber-preprocessor");
const { default: DisconnectPage } = require("../../POM/deconnectPage");
const disconnectPage = new DisconnectPage();
When("I click on deconnect", () => {
  disconnectPage.disconnect;
});
Then("a popup shows", () => {
  disconnectPage.verifypopup();
});

Then("I confirm the deconnection", () => {
  disconnectPage.confirmDisconnect();
});
Then("I verify it", () => {
  disconnectPage.verifydisconnect();
});

Then("I click on cancel", () => {
  disconnectPage.normalCancelDisconnect();
});

Then("I click outside the box", () => {
  disconnectPage.outsideCancelDisconnect();
});
