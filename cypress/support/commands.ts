// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Add testing library commands
import '@testing-library/cypress/add-commands'

Cypress.Commands.add('visitLelabsChallenge', () => cy.visit('/'))

Cypress.Commands.add('shouldAddToCart', (characterName = 'Mord') => {
  cy.route('**/show/houses', 'fixture:houses/houses.json').as('getHouses')
  cy.route('**/show/characters/**', 'fixture:characters/byName.json').as(
    'getCharacter'
  )

  cy.visit('/')

  cy.wait('@getHouses')

  cy.get('input[type="search"]').should('exist').type(characterName)

  cy.wait('@getCharacter')
})

Cypress.Commands.add('shouldCharacterExists', () => {
  cy.get('.grid-wrapper').within(() => {
    cy.get('.character').should('have.length', 1)
  })

  cy.findByTestId('character_1').within(() => {
    cy.findAllByLabelText(/icon favorite outline/i).should('exist')

    cy.findByRole('button', { name: /add/i }).should('exist').click()

    cy.findAllByLabelText(/icon favorite/i).should('exist')
  })

  cy.get('.shopping-cart-content').within(() => {
    cy.get('.cart-items').should('exist').should('have.text', '1')
  })
})
