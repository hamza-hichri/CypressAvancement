const {
  Given,
  Then,
  When,
} = require("@badeball/cypress-cucumber-preprocessor");

const { default: ReclamationPage } = require("../../POM/reclamationPage");
const reclamationpage = new ReclamationPage();

var paginations = 0;
When("I click on the the reclamation button", () => {
  reclamationpage.recpage();
});

Then("I verify the labels displays correctly", () => {
  reclamationpage.labels();
});

//////////////////////////////////////////////////////////

Then("I verify the display of the reclamation list", () => {
  reclamationpage.verifytable();
});
//////////////////////////////////////////////////////////////

Then("I check the content of a reclamation", () => {
  reclamationpage.verifycontent();
});

////////////////////////////////////////////////////////////////////////////////
Then("I check if the reclamations are ordered correctly", () => {
  Dates = [];
  DatesSorted = [];
  pages = "";
  reclamationpage.sortingtable(Dates, DatesSorted);
});

////////////////////////////////////////////
Then("I check if the number of displayed reclamations", () => {
  reclamationpage.nbrec();
});

/////////////////////////
Then("I check the total recalamtions for paginations", () => {
  reclamationpage.pagination();
});

///////////////////////////////////////////////////
Then("the previous button should be disabled", () => {
  reclamationpage.prevbtn();
});
Then("the next button should not be disabled", () => {
  reclamationpage.nextbtn();
});

When("I click on the last page", () => {
  reclamationpage.lastpage();
});
Then("the next button become disabled", () => {
  reclamationpage.nextdisabled();
});
Then("I check the existance of the first and last pagination", () => {
  reclamationpage.firstlastpage();
});

//////////////////////////////////////
Then("I click on a reclamation", () => {
  reclamationpage.accederreclamation();
});
Then("the details shows up correctly", async () => {
  reclamationpage.detailrec();
});

///////////////////////////////////////////////////////////////////////////////

Then("I click on the return button", () => {
  cy.get(".sort-icon").click().wait(1000);
});
Then("return to the same page", () => {
  reclamationpage.returnpage();
});
