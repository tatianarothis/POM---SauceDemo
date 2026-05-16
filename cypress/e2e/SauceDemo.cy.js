import CheckOutPage from "../Page/CheckOutPage"
import CompletePage from "../Page/CompletePage"
import OverViewPage from "../Page/OverViewPage"
import ProductsPage from "../Page/ProductsPage"
import YourCartPage from "../Page/YourCartPage"


  beforeEach('Login', () => {
    cy.visit('/')
    cy.login()

  })

  it('TC01 - successful purchase', () => {
    ProductsPage.checkTitleProd()
    ProductsPage.checkUrlProducts()
    ProductsPage.AddTShirt()
    ProductsPage.CheckItemCard()
    ProductsPage.ClickCard()
    YourCartPage.checkUrlCart()
    YourCartPage.checkTitleYourCard()
    YourCartPage.checkNameItem()
    YourCartPage.checkQuantity()
    YourCartPage.clickCheckOut()
    CheckOutPage.checkUrlCheckOut()
    CheckOutPage.checkTitle()
    CheckOutPage.completeFirstName('Tatiana')
    CheckOutPage.completeLastName('Rothis')
    CheckOutPage.completePostalCode('4430-199')
    CheckOutPage.clickBtnContinue()
    OverViewPage.checkUrlCheckOut()
    OverViewPage.checkTitle()
    OverViewPage.checkNameProd()
    OverViewPage.checkPriceTotal()
    OverViewPage.clickBtnFinish()
    CompletePage.checkUrlComplete()
    CompletePage.checkTitle()
    CompletePage.checkMsnOrder()
    CompletePage.clickBtnBackHome()
    ProductsPage.checkUrlProducts()
  })
