// tooltip.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/**
 * Cypress will default scroll element into view
 * @see https://docs.cypress.io/guides/core-concepts/interacting-with-elements#Scrolling
 */
describe('tooltip', () => {
    it('leftTopOver', () => {
        cy.visit('http://127.0.0.1:6009/iframe.html?id=tooltip--left-top-over-demo&args=&viewMode=story');
        cy.get('[data-cy="leftTopOver"]').click();
        cy.get('[x-placement="leftBottomOver"]').should('have.length', 2);
        cy.get('#root > div').click({force: true}); // click outside
        cy.get('[x-placement="leftBottomOver"]').should('have.length', 1);
        cy.get('[data-cy="leftTopOver"]').scrollIntoView();
        cy.get('[data-cy="leftTopOver"]').click();
        cy.get('[x-placement="leftTopOver"]').should('have.length', 2);
        cy.get('#root > div').click({force: true}); // click outside
        cy.get('[x-placement="leftTopOver"]').should('have.length', 1);
    });
});