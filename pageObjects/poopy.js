var asset = require('../testsAssets/newsAssets')
var poopycommands = {
    closePopup: function (){
        this
    },
    search: function () {
        this
            .waitForElementVisible('@searchButton', 50000)
            .useXpath()
            .waitForElementVisible('//a[@href="https://accounts.wsj.com/login?target="]')
            .click('//a[@href="https://accounts.wsj.com/login?target="]')
            .useCss()
            .clearValue('@username')
            .setValue('@username', 'stonepreston05@gmail.com')
            .clearValue('@password')
            .setValue('@password', 'Home1305')
    }
}
module.exports = {
    url: 'https://www.wsj.com',
    commands: [poopycommands, asset],
    elements: {
        searchButton: '[class="style--search-button--1U43LWwP "]',
        searchbox: '[id="searchInput"]',
        signIn: {
            selector: '//a[@href="https://accounts.wsj.com/login?target="]',
            locateStrategy: 'xpath'
        },
        username: '[name="username"]',
        password: '[name="password"]',
        X: {
            selector: '//img[@src="https://a248.e.akamai.net/f/248/67675/6h/s2.wsj.net/img/cxense/icon-close2x.png"]',
            locateStrategy: 'xpath',
        },
        signInButton: '[class="solid-button basic-login-submit"]',
    }
}