import { Given, Then, When } from '@cucumber/cucumber';

import {LoginPage} from "../../../pages/login.page";
import {ProductsPage} from "../../../pages/products.page";
import users from "../../../data/users";

const loginPage = new LoginPage();
const inventoryPage = new ProductsPage();

Given(/^Existing user navigates to the app$/, async () => {
    await loginPage.openApp();
});
When(/^They provide correct credentials$/, async () => {
    await loginPage.login(users.standardUser);
    await inventoryPage.waitForSeconds(3);
});
When(/^They add all products to the cart$/, async () => {
    await inventoryPage.addToCartAllProducts();
    await inventoryPage.waitForSeconds(3);
});
Then(/^All products should be in the cart$/, async () => {
    let text = await inventoryPage.cartNumberLabel().getText();
    await expect(text).toEqual("5");
});
