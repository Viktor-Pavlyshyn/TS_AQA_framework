export class ShoppingCartPage {
    private checkoutButton() { return $("//button[@id='checkout']"); }

    public async clickOnCheckout(){ 
        await this.checkoutButton().click();
        return this;
    }
}