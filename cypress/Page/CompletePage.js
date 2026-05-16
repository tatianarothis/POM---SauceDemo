const elements = {
    field: {
        NameProd: '[data-test="inventory-item-name"]',
        PriceTotal: '[data-test="total-info-label"]',
    },
    buttons: {
        btnBackHome: '#back-to-products',
    },

    title: {
        CheckComplete: '[data-test="title"]',
    },
    msn: {
        ThankForOrder: '[data-test="complete-header"]',
    },

}
export default {

    checkUrlComplete() {
        cy.url().should('contain','complete')
    },
    checkTitle() {
        cy.get(elements.title.CheckComplete).should('contain','Checkout: Complete!')
    },
    checkMsnOrder() {
        cy.get(elements.msn.ThankForOrder).should('contain','Thank you for your order!')
    },
    clickBtnBackHome() {
        cy.get(elements.buttons.btnBackHome).should('exist').click()
    },

      
    
}