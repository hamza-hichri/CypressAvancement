const {
  Given,
  Then,
  When,
} = require("@badeball/cypress-cucumber-preprocessor");
const { default: AssignPage } = require("../../POM/assignPage");
const assignPage = new AssignPage();
Then("I assign a reclamation to me based on the status", () => {
  let cell =
    "body > app-root:nth-child(1) > app-dashboard:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > app-abiat-reclamations-management:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > table:nth-child(1) > tr:nth-child(2)";
  cy.get(
    cell +
      "> td:nth-child(3) > app-abiat-badge:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2)"
  ).then((e) => {
    let status = e.text();
    if (status == " En cours de traitement " || status == " Prise en charge ") {
      cy.get(cell + "> td.reclamation-responsable.data-cell").then((respo) => {
        responsable = respo.text();
        cy.get(
          "body > app-root > app-dashboard > div > div.row.top-bar-container > div.col-4.top-bar.justify-content-end.pr-4 > app-abiat-agent-profile-highlight > div > div > span"
        ).then((name) => {
          if (name.text().toUpperCase() == responsable.toUpperCase()) {
            cy.get(cell + "> :last-child")
              .click()
              .should("not.contain", "M'assigner la réclamation");
          } else {
            cy.get(cell + ">:last-child").click();
            cy.contains("M'assigner la réclamation").click();
            cy.get(cell + "> td.reclamation-responsable.data-cell").should(
              "contain.text",
              name.text()
            );
          }
        });
      });
    } else if (status == " Ouverte ") {
      cy.get(cell + ">:last-child").click();
      cy.contains("M'assigner la réclamation").click();
      cy.wait(500);
      cy.get(
        "body > app-root > app-dashboard > div > div.row.top-bar-container > div.col-4.top-bar.justify-content-end.pr-4 > app-abiat-agent-profile-highlight > div > div > span"
      ).then((e) => {
        cy.get(cell + ">:nth-child(5)").should("contain.text", e);
      });
    }
  });
});
Then("I assign a reclamation to another person based on the status", () => {
  let cell =
    "body > app-root:nth-child(1) > app-dashboard:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > app-abiat-reclamations-management:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > table:nth-child(1) > tr:nth-child(2)";
  cy.get(
    cell +
      "> td:nth-child(3) > app-abiat-badge:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2)"
  ).then((e) => {
    let status = e.text();
    if (
      status == " En cours de traitement " ||
      status == " Prise en charge " ||
      status == " Ouverte "
    ) {
      cy.get(cell + "> td.reclamation-responsable.data-cell").then((respo) => {
        responsable = respo.text();
        cy.get(
          "body > app-root > app-dashboard > div > div.row.top-bar-container > div.col-4.top-bar.justify-content-end.pr-4 > app-abiat-agent-profile-highlight > div > div > span"
        ).then((name) => {
          if (name.text().toUpperCase() == responsable.toUpperCase()) {
            cy.get(cell + "> :last-child")
              .click()
              .should("not.contain", "M'assigner la réclamation");
          } else {
            cy.get(cell + ">:last-child").click();
            cy.contains("M'assigner la réclamation");
          }
        });
        cy.contains("Assigner la réclamation à un autre chargé").click();
        cy.get(".abiat-modal-button-filled").should("be.disabled");
        cy.get(".abiat-modal-content").contains("Semi Samsoum").click();
        cy.get(".abiat-modal-button-filled").should("not.be.disabled").click();
        cy.get(".toaster-title").should("be.visible");
        cy.get(cell + "> td.reclamation-responsable.data-cell").should(
          "have.text",
          " Semi Samsoum "
        );
      });
    }
  });
});
