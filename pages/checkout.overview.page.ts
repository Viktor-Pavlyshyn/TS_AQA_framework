export class CheckoutOverviewPage {
    private finishButton() { return $("//button[@id='finish']"); }

    public async clickOnFinish(){ 
        await this.finishButton().click();
        return this;
    }

}