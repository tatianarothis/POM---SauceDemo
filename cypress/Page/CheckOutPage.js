const elements = {
    field: {
        inputFirstName: '#first-name',
        inputLastName: '#last-name',
        inputPostalCode: '#postal-code'
    },
    buttons: {
        btnContinue: '#continue',
    
    },

    title: {
        CheckOut: '[data-test="title"]',
    },


}
export default {

    checkUrlCheckOut() {
        cy.url().should('contain','checkout')
    },
    checkTitle() {
        cy.get(elements.title.CheckOut).should('contain','Checkout: Your Information')
    },
    completeFirstName(FirstName) {
        cy.get(elements.field.inputFirstName).type(FirstName)
    },
    completeLastName(LastName) {
        cy.get(elements.field.inputLastName).type(LastName)
    },
    completePostalCode(PostalCode) {
        cy.get(elements.field.inputPostalCode).type(PostalCode)
    },
    clickBtnContinue() {
        cy.get(elements.buttons.btnContinue).click()
    },
}