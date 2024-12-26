import{slowCypressDown}from'cypress-slow-down'

slowCypressDown(1000) //общий слоудаунер https://github.com/bahmutov/cypress-slow-down

describe('AUTO: Покупка аватара', function () {
    it('покупаем аву', function () {
         cy.visit('https://pokemonbattle.ru/');                         
         cy.get('input[type="email"]').type('USER_LOGIN');
         cy.get('input[type="password"]').type('USER_PASSWORD');
         cy.get('button[type="submit"]').click();
         cy.wait(1234);
         cy.get('.header__container > .header__id').click({ force: true });
         cy.get('[href="/shop"]').click();
         cy.get('.available > button').first().click({ force: true });
         cy.get('.credit').type('4620869113632996');
         cy.get('.k_input_ccv').type('125');
         cy.get('.k_input_date').type('1225');
         cy.get('.k_input_name').type('USER');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
		 cy.wait(1234);
         cy.contains('Покупка прошла успешно').should('be.visible');
     });
 });