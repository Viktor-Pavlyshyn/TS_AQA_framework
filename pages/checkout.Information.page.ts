export class CheckoutInformationPage {

    private firstNameInput() { return $("//input[@id='first-name']"); }

    private lastNameInput() { return $("//input[@id='last-name']"); }

    private postalCodeInput() { return $("//input[@id='postal-code']"); }

    private continueButton() { return $("//input[@id='continue']"); }
    

    async fillInCheckoutInformation(firstName: string, lastName: string, postalCode: string,) {
        await this.firstNameInput().setValue(firstName);
        await this.lastNameInput().setValue(lastName);
        await this.postalCodeInput().setValue(postalCode);

        await this.continueButton().click();
    }
    

} 