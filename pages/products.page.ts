import BasePage from "./BasePage";

export class ProductsPage extends BasePage {
    public constructor() {
        super();
    }

    private addToCartButtonForFitstProduct() { return $("//div[@class='inventory_item'][1]//button"); }

    private products() { return $$(".inventory_item button[id^=add-to-cart]"); }

    public inventoryPageLogoLabel() { return $(".app_logo"); }

    public productsLabel() { return $(".header_secondary_container > .title"); }

    public logoLabel() { return $(".app_logo"); }

    public cartNumberLabel() { return $(".//*[contains(@class, 'shopping_cart_badge')]"); }

    public shoppingCartLink () {
        return $("//div[@id='shopping_cart_container']");
    }

    public addToCartAllProducts() {
        this.products().forEach( element => {
            element.click();
        });
        return this;
    }

    public async addFirstProductToCart() {
        await this.addToCartButtonForFitstProduct().click();
    }

}

//export default new ProductsPage();
