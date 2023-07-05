class FilterPage {
  disabledbtn() {
    cy.get(".main-button").should("be.disabled");
  }
  MultiListOptions() {
    cy.contains("Branche").click();
    cy.contains("Assistance").should("be.visible");
    cy.contains("Automobile").should("be.visible");
    cy.contains("Epargne").should("be.visible");
    cy.contains("Incendie").should("be.visible");

    cy.contains("Statut").click();
    cy.contains("Annulée").should("be.visible");
    cy.contains("Clôturée").should("be.visible");
    cy.contains("En cours de traitement").should("be.visible");
    cy.contains("Ouverte").should("be.visible");
    cy.contains("Prise en charge").should("be.visible");
    cy.contains("Retournée").should("be.visible");
    cy.contains("Réponse délivrée").should("be.visible");

    cy.contains("Responsable").click();
    cy.contains("Responsable")
      .parent()
      .parent()
      .should("contain.text", "Nourddine Charfi");
    cy.contains("Responsable")
      .parent()
      .parent()
      .should("contain.text", "Semi Samsoum");
  }
  selectFilter() {
    cy.get(
      ":nth-child(1) > app-abiat-dropdown > .input-group > #dropdownBasic1"
    ).click();
    cy.contains("Assistance").scrollIntoView().click();
  }
  visibleCancel() {
    cy.contains("Annuler").scrollIntoView().should("be.visible");
    cy.get(".main-button").should("not.be.disabled");
  }
  displayedElements() {
    cy.get("table>tr").then((e) => {
      if (e.length < 8) {
        for (let i = 2; i <= e.length; i++)
          cy.get("table>tr:nth-child(" + i + ")>td:nth-child(2)").should(
            "contain.text",
            "Assistance"
          );
      } else {
        for (let i = 2; i <= e.length; i++)
          cy.get("table>tr:nth-child(" + i + ")>td:nth-child(2)").should(
            "contain.text",
            "Assistance"
          );
        cy.contains("Suivant").should("not.be.disabled");
      }
    });
  }
  filtrer() {
    cy.get(".main-button").click().wait(500);
  }
  annuler() {
    cy.get(".filters-line").contains("Annuler").click().wait(1000);
  }
  resetPage() {
    var pages = "";
    cy.get(".filters-line").contains("Appliquer").should("be.disabled");
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
  wrongfilter() {
    cy.get(".datepicker-wrapper > input").type("2000-01-25");
    cy.get(".filters-line").contains("Branche").parent().click();
    cy.get(".filters-line").contains("Assistance").click();
  }
  unavailableMessage() {
    cy.get(".empty-reclamation-table").should(
      "contain.text",
      "Aucune correspondance à votre recherche"
    );
    cy.get(".empty-reclamation-table").should(
      "contain.text",
      "Pas de réclamations relatives à votre recherche"
    );
  }
  filterNotDisabled() {
    cy.get(".filters-line").contains("Appliquer").should("not.be.disabled");
  }
  unvisibleCancel() {
    cy.get(".filter-btn-area.filter-item").should(
      "not.contain.text",
      "annuler"
    );
  }
  deselect() {
    cy.get(".filters-line").contains("Branche").click().wait(500);
    cy.get(".dropdown-item.dropdown-menu-item.selected-item").click().wait(500);
  }
}
export default FilterPage;
