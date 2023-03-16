export default class BasePage {

    async waitForPageToBeLoaded(){
        return this;
    }

    async waitForSeconds(value: number) {
        await browser.pause(value * 1000);
    }

    protected async open(path: string) {
        await browser.maximizeWindow();
        await browser.url(path)
    }
}
