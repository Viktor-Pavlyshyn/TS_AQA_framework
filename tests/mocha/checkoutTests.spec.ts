import {LoginPage} from "../../pages/login.page";
import {ProductsPage} from "../../pages/products.page";
import users from "../../data/users";
import { ShoppingCartPage } from "pages/shoppingcart.page";
import { CheckoutInformationPage } from "pages/checkout.Information.page";
import { CheckoutOverviewPage } from "pages/checkout.overview.page";
import { CheckoutCompletePage } from "pages/checkout.complete.page";

describe('Checkout tests', () => {
    let loginPage = new LoginPage();
    let productsPage = new ProductsPage();
    let shoppingCartPage = new ShoppingCartPage();
    let checkoutInformationPage = new CheckoutInformationPage();
    let checkoutOverviewPage = new CheckoutOverviewPage();
    let checkoutCompletePage = new CheckoutCompletePage();

    beforeEach(async () => {
        await loginPage.openApp();
        await loginPage.waitForPageToBeLoaded();
    });

    it('Checkout with one product', async () => {
        await loginPage.login(users.standardUser);

        await productsPage.addFirstProductToCart();

        await productsPage.shoppingCartLink().click();

        await shoppingCartPage.clickOnCheckout();

        await checkoutInformationPage.fillInCheckoutInformation('first name', 'last name', 'B555');

        await checkoutOverviewPage.clickOnFinish();

        checkoutCompletePage.message().then(text => {
            expect(text.getText()).toEqual('Thank you for your order!');
        });
    })

})