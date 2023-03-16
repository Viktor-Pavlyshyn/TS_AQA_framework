import {LoginPage} from "../../pages/login.page";
import {ProductsPage} from "../../pages/products.page";
import users from "../../data/users";

describe('Login to the application', () => {
const loginPage = new LoginPage();

    beforeEach(async () => {
        await loginPage.openApp();
        await loginPage.waitForPageToBeLoaded();
        await loginPage.waitForSeconds(3);
    });

    it('Verify a user can login to the application', async () => {
        await loginPage.login(users.standardUser);
        await loginPage.waitForSeconds(3);

        const productsPage = new ProductsPage();
        let label = productsPage.productsLabel().getText();
        let logoLabel = productsPage.logoLabel().getText();
        expect(label).toEqual(logoLabel);

        productsPage.productsLabel().then(label => {
            expect(label.getText()).toEqual("Products");
        })

        productsPage.productsLabel().then(label => {
            productsPage.logoLabel().then(logoLabel => {
                console.log(label.getText());
                console.log(logoLabel.getText());
                expect(label.getText()).toEqual(logoLabel.getText());
            })
        });

    });

});
