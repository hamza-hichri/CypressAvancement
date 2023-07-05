const {
  Given,
  Then,
  When,
} = require("@badeball/cypress-cucumber-preprocessor");
const { default: FilterPage } = require("../../POM/filterPage");
const filterPage = new FilterPage();

Then("I check if the filter button is disabled", () => {
  filterPage.disabledbtn();
});
Then("I check all the multiselect lists", () => {
  filterPage.MultiListOptions();
});

Then("I select filter options", () => {
  filterPage.selectFilter();
});
Then("The cancel button becomes visible", () => {
  filterPage.visibleCancel();
});
When("I click on the filter button", () => {
  filterPage.filtrer();
});
Then("A list of filtred elements displays", () => {
  filterPage.displayedElements();
});

When("I click on the cancel button", () => {
  filterPage.annuler();
});
Then("The filter resets and all reclamations displays", () => {
  filterPage.resetPage();
});
Then("I select wrong filter options", () => {
  filterPage.wrongfilter();
});

Then("An unavailable content message is shown", () => {
  filterPage.unavailableMessage();
});

Then("The filter button is not disabled", () => {
  filterPage.filterNotDisabled();
});
Then("The cancel button becomes invisible", () => {
  filterPage.unvisibleCancel();
});
When("I deselect the filter options", () => {
  filterPage.deselect();
});
