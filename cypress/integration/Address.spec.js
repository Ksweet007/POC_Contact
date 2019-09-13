beforeEach(() => {
  cy.visit("http://localhost:3000/");
});

it("should support editing address", () => {
  cy.get("ul > li")
    .contains("Contact")
    .click();

  cy.get("#addressDiv").within(() => {
    cy.get("input").type("1234 Road Ln");
  });

  cy.get("#cityDiv").within(() => {
    cy.get("input").type("Cincinnati");
  });

  cy.get("#zipDiv").within(() => {
    cy.get("input").type("45230-1234");
  });
});
