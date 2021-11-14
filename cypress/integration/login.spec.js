/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Login", () => {
	it("should login successfully", () => {
        cy.signup();
        
		cy.visit("http://localhost:3000/signin");

		cy.get("input[placeholder=email]").type("admin@admin.com");
		cy.get("input[placeholder=password").type("Admin@123");
		cy.get("button[type=submit]").click();
		
		cy.url().should("equal", "http://localhost:3000/");
	});
});