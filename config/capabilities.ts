export const chromeCapabilities = [
    {
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--no-sandbox',
                '--disable-infobars',
                '--disable-gpu',
                '--window-size=1440,735'
            ],
        }
    }
]
