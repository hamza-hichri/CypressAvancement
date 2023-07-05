class DisconnectPage {
  dcbtn =
    "body > app-root > app-dashboard > div > div.row.dashboard-content > div.dashboard-content-left > app-abiat-drawer > div > div > div:nth-child(2) > ul > li > a > span";

  popup =
    "body > ngb-modal-window > div > div > app-abiat-modal > div > div.modal-header > h5";

  cfrmdc =
    "body > ngb-modal-window > div > div > app-abiat-modal > div > div.modal-footer > app-abiat-modal-button:nth-child(2) > button";

  bienvenue =
    "body > div > div > div > div.the-card > form > div.card-Content > h1";

  canceldc = ".abiat-modal-button-outlined";

  dashboard = ".selected > a > span";

  get disconnect() {
    return cy
      .get(this.dcbtn)
      .should("have.text", "Se déconnecter")
      .click()
      .wait(500);
  }
  verifypopup() {
    cy.get(this.popup).should("have.text", " Déconnexion ");
  }
  confirmDisconnect() {
    cy.get(this.cfrmdc).click().wait(500);
  }
  verifydisconnect() {
    cy.get(this.bienvenue).should("have.text", "Bienvenue,");
  }
  normalCancelDisconnect() {
    cy.get(this.canceldc).click().wait(500);

    cy.get(this.dashboard).should("have.text", "Tableau de bord");
  }
  outsideCancelDisconnect() {
    cy.get("body > ngb-modal-window").then(($element) => {
      const width = $element.width();
      const x = width - 1;
      const y = 1;
      cy.wrap($element).click({ force: true, x, y });
    });
  }
}
export default DisconnectPage;
