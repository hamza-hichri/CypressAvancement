class LoginPage {
  verify(){
    return cy.get('body > div > div > div > div.the-card > form > div.card-Content > h1').should('have.text','Bienvenue,')
  }
  error(){
    return cy.get("#error-message").should("be.visible").and("have.text", "Veuillez vérifier vos données de connexion");
  
  }
  dashboard(){
  return cy.get('.selected > a > span').should("have.text", "Tableau de bord");
  }
  get website() {
        return cy.visit("http://10.224.0.18:8080/realms/abiat-agent/protocol/openid-connect/auth?client_id=abiat-agent-web-client&redirect_uri=http%3A%2F%2F10.224.0.60%3A8080&state=dd4ed659-f057-4918-88cc-ec6e6a767bb0&response_mode=fragment&response_type=code&scope=openid&nonce=6c46fc94-2713-4dff-8fa7-ff861173e4b6").wait(1000);

    //return cy.visit("http://10.224.0.18:8080").wait(3000);
  }
  get inputEmail() {
    return cy.get("#username");
  }
  get inputPassword() {
    return cy.get("#password");
  }

  get inputSubmit() {
    return cy.get("#connexion");
  }
  login = (email, password) => {
    this.inputEmail.type(email);
    this.inputPassword.type(password);
    cy.wait(1000);
  };
  buttonclicked(){
    this.inputSubmit.click();
  }
}
export default LoginPage;
