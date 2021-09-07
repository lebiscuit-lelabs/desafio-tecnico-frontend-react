// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit Lelabs application Challenge
     * @example cy.visitLelabsChallenge()
     */
    visitLelabsChallenge(): Chainable<Window>

    /**
     * Custom command to Add One character to the Cart
     * @example cy.shouldAddToCart('character')
     */
    shouldAddToCart(characterName?: string): Chainable<Element>

    /**
     * Custom command to test if character exist
     * @example cy.shouldCharacterExists()
     */
    shouldCharacterExists(): Chainable<Element>
  }
}
