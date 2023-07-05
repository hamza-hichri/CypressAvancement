class ReclamationPage {
  reclamation = "REC23062607415620";
  branche = "Autre";
  statut = "Ouverte";
  recpage() {
    //consult the reclamation page
    cy.get(":nth-child(2) > a").click().wait(1500);
  }

  labels() {
    cy.get(
      "body > app-root > app-dashboard > div > div.row.dashboard-content > div.dashboard-content-right > app-abiat-reclamations-management > div > div.reclamation-title"
    ).should("have.text", " Gestion des réclamations ");
    cy.get(".reclamation-table-head > :nth-child(1)").should(
      "have.text",
      " Référence "
    );
    cy.get(".reclamation-table-head > :nth-child(2)").should(
      "contain",
      "Branche"
    );
    cy.get(".reclamation-table-head > :nth-child(3)").should(
      "contain",
      "Statut"
    );
    cy.get(".reclamation-table-head > :nth-child(4)").should(
      "have.text",
      " Client "
    );
    cy.get(".reclamation-table-head > :nth-child(5)").should(
      "contain",
      " Responsable "
    );
    cy.get(".reclamation-table-head > :nth-child(6)").should(
      "contain",
      " Titre"
    );
    cy.get(".reclamation-table-head > :nth-child(7)").should("contain", "Date");
  }
  verifytable() {
    cy.get(".reclamation-table")
      .find("tr")
      .then((rows) => {
        if (rows.length === 1) {
          cy.contains("Vous n'avez aucune réclamation");
        } else {
          cy.get(".reclamation-table > :nth-child(2)")
            .find("td")
            .should("have.length", 8);
        }
      });
  }
  verifycontent() {
    cy.get("tr:nth-child(2)")
      .find("td")
      .then((rows) => {
        for (let i = 0; i < rows.length - 1; i++) {
          cy.get(
            ".reclamation-table > :nth-child(2) > :nth-child(" + (i + 1) + ")"
          ).should("not.be.empty");
          if (i === 3) {
            cy.log(
              cy
                .get(
                  ".reclamation-table > :nth-child(2) > :nth-child(" +
                    (i + 1) +
                    ")"
                )
                .children()
            );
            cy.get(
              ".reclamation-table > :nth-child(2) > :nth-child(" + (i + 1) + ")"
            )
              .children()
              .should("contain.text", "CIN");
          }
        }
      });
  }

  sortingtable(Dates, DatesSorted) {
    cy.get(".number-of-reclamations").then((e) => {
      let msg = e.text();
      pages = msg.substring(msg.indexOf("«") + 2, msg.indexOf("»") - 1);
      cy.log(pages);
      if (parseInt(pages) < 7) {
        for (let i = 2; i <= parseInt(pages); i++) {
          cy.get("tr:nth-child(" + i + ") td:nth-child(7)")
            .invoke("text")
            .then((e) => {
              cy.log(e);
              this.Dates.push(e);
            });
        }
      } else {
        for (let i = 2; i <= 8; i++) {
          cy.get("tr:nth-child(" + i + ") td:nth-child(7)")
            .invoke("text")
            .then((e) => {
              cy.log(e);
              Dates.push(e);
            });
        }
        DatesSorted = Dates.sort(function (a, b) {
          return new Date(a.date) - new Date(b.date);
        });
        cy.log(Dates);
        cy.log(Dates.keys());
        expect(Dates).to.eq(DatesSorted);
      }
    });
  }
  nbrec() {
    return cy.get(".reclamation-table> tr").should("have.length.at.most", 8);
  }
  pagination() {
    cy.get(".number-of-reclamations").then((e) => {
      let msg = e.text();
      pages = msg.substring(msg.indexOf("«") + 2, msg.indexOf("»") - 1);
      cy.log(pages);
      if (parseInt(pages) > 7) {
        if (parseInt(pages) % 7 == 0) {
          this.paginations = parseInt(pages / 7);

          cy.get(
            "app-abiat-pagination-button[btntype='pageBtn'] button[class='pagination-button']"
          ).then((e) => {
            expect(e.text().trim()).to.equal(this.paginations + "");
          });
        } else {
          this.paginations = parseInt(pages / 7) + 1;
          cy.log(this.paginations);
          cy.get(
            "body > app-root > app-dashboard > div > div.row.dashboard-content > div.dashboard-content-right > app-abiat-reclamations-management > div > app-abiat-pagination > div > div > app-abiat-pagination-button:nth-last-child(2) > container-element > button"
          ).then((e) => {
            expect(e.text().trim()).to.equal(this.paginations + "");
          });
        }
      }
    });
  }
  prevbtn() {
    cy.get(".number-of-reclamations").then((e) => {
      let msg = e.text();
      pages = msg.substring(msg.indexOf("«") + 2, msg.indexOf("»") - 1);
      cy.log(pages);
      if (parseInt(pages) > 7) {
        cy.contains(" Précédant ").should("be.disabled");
      }
    });
  }
  nextbtn() {
    cy.get(".number-of-reclamations").then((e) => {
      let msg = e.text();
      pages = msg.substring(msg.indexOf("«") + 2, msg.indexOf("»") - 1);
      cy.log(pages);
      if (parseInt(pages) > 7) {
        cy.contains("Suivant").should("not.be.disabled");
      }
    });
  }
  lastpage() {
    cy.get(".number-of-reclamations").then((e) => {
      let msg = e.text();
      pages = msg.substring(msg.indexOf("«") + 2, msg.indexOf("»") - 1);
      cy.log(pages);
      if (parseInt(pages) > 7) {
        if (parseInt(pages) % 7 == 0) {
          cy.get(
            "body > app-root > app-dashboard > div > div.row.dashboard-content > div.dashboard-content-right > app-abiat-reclamations-management > div > app-abiat-pagination"
          )
            .contains(parseInt(pages) / 7)
            .click();
        } else {
          cy.get(
            "body > app-root > app-dashboard > div > div.row.dashboard-content > div.dashboard-content-right > app-abiat-reclamations-management > div > app-abiat-pagination"
          )
            .contains(parseInt(pages / 7) + 1)
            .click();
        }
      }
    });
  }
  nextdisabled() {
    cy.get(".number-of-reclamations").then((e) => {
      let msg = e.text();
      pages = msg.substring(msg.indexOf("«") + 2, msg.indexOf("»") - 1);
      cy.log(pages);
      if (parseInt(pages) > 7) {
        cy.contains("Suivant").should("be.disabled");
        cy.contains(" Précédant ").should("not.be.disabled");
      }
    });
  }
  firstlastpage() {
    cy.get(".number-of-reclamations").then((e) => {
      let msg = e.text();
      pages = msg.substring(msg.indexOf("«") + 2, msg.indexOf("»") - 1);
      cy.log(pages);
      if (parseInt(pages) > 7) {
        cy.get(
          "body > app-root:nth-child(1) > app-dashboard:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > app-abiat-reclamations-management:nth-child(2) > div:nth-child(1) > app-abiat-pagination:nth-child(3) > div:nth-child(1) > div:nth-child(1) > app-abiat-pagination-button:nth-child(2) > container-element:nth-child(1) > button:nth-child(1)"
        )
          .scrollIntoView()
          .should("be.visible");
        cy.get(
          "body > app-root:nth-child(1) > app-dashboard:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > app-abiat-reclamations-management:nth-child(2) > div:nth-child(1) > app-abiat-pagination:nth-child(3) > div:nth-child(1) > div:nth-child(1) > app-abiat-pagination-button:nth-child(5) > container-element:nth-child(1) > button:nth-child(1)"
        ).should("be.visible");
      } else {
        cy.log("No Pagination Found !");
      }
    });
  }
  accederreclamation() {
    cy.contains(this.reclamation).click().wait(1000);
  }
  detailrec() {
    cy.get(".reclamation-details-header").should("contain", this.reclamation);

    cy.contains("Branche").parent().should("contain.text", this.branche);

    cy.contains("Statut").parent().should("contain.text", this.statut);

    cy.contains("Client").parent().should("not.be.empty");
  }
  returnpage() {
    cy.contains(this.reclamation).should("be.visible");
  }
}
export default ReclamationPage;
