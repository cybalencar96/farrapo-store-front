/* eslint-disable no-undef */

const imageLink = 'https://www.oficinadanet.com.br/imagens/post/24347/330xNxfundo-transparente.jpg.pagespeed.ic.c7297c4891.jpg'

Cypress.Commands.add('setupDb', () => {
    cy.request("http://localhost:4000/setup-test-db?cypress=tests")
});


Cypress.Commands.add('signin', () => {
    cy.visit("http://localhost:3000/signin")

    cy.get("input[placeholder=email]").type("admin@admin.com");
	cy.get("input[placeholder=password").type("Admin@123");

	cy.get("button[type=submit]").click();
});

Cypress.Commands.add('signup', () => {
    cy.visit("http://localhost:3000/signup");

    cy.get("input[placeholder=name]").type("Carlin Vrau");
    cy.get("input[placeholder=email]").type("admin@admin.com");
    cy.get("input[placeholder=password").type("Admin@123");
    cy.get('input[placeholder="confirm password"').type("Admin@123");
    cy.get('input[placeholder="phone number"').type("21987654321");
    cy.get('input[placeholder="image perfil url"').type(imageLink);
    cy.get('input[placeholder="birth date"').type('2020-11-24', {force: true});
    cy.get('input[placeholder="not_said"]').click();
    cy.get('input[placeholder="CEP"').type('12312123');
    cy.get('input[placeholder="Número"').type('1');

    cy.get("button[type=submit]").click();
});
