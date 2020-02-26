var poopycommands = {
    closePopup: function () {
        this
            .isVisible('[class="close-btn"]', function (result) {
                this.click('[class="close-btn"]')
            })
    },
    signIn: function () {
        this
            .useXpath()
            .waitForElementPresent('//*[@id="root"]/div/div/div/div[1]/header/div[1]/div/div[1]/div/a[2]')
            .click('//*[@id="root"]/div/div/div/div[1]/header/div[1]/div/div[1]/div/a[2]')
            // .navigate('//*[@id="root"]/div/div/div/div[1]/header/div[1]/div/div[1]/div/a[2]')
            .useCss()
            .clearValue('@username')
            .setValue('@username', 'stonepreston@ymail.com')
            .clearValue('@password')
            .setValue('@password', 'Home1305')
            .pause(3000)
            .click('@signInButton')
        return this
    },
    search: function () {
        this
            .waitForElementPresent('@searchButton')
            .click('@searchButton')
            .setValue('@searchbox', 'tech')
        // .closePopup()
        this.click('@searchButton2')
        return this
    },
    // categoryTabs: function (tabs) {
    //     this
    //         .useXpath()
    //         .click(`(//a[@class="style--section-link--3qFFDClt "])${tabs.number}`)
    //         .useCss()
    //         .expect.element('[class="clearfix"]').text.to.contain(`${tabs.name}`)
    // this.expect.element('[class="WSJTheme--title-logo-section--1a976dMr "]').text.to.contain("https://www.wsj.com/news/magazine")
    // },
    savedArticles: function () {
        this
        let title = ''
        // .pause()
        this
            .api.useXpath()
        this
            .waitForElementVisible('(//h3[@class="headline"])[1]')
            .getText('(//h3[@class="headline"])[1]', function (result) {
                title = result.value
                console.log('Article name:', title)
            })
            this.api.useXpath()
        
            // if (('(//div[@class="category"])[1]').containsText('Video')){
            //     this.click('(//h3[@class="headline"])[2]')
            // } else {
            //     this.click('(//h3[@class="headline"])[1]')
            // }
            this.api.pause(1000)
            this.moveToElement('(//h3[@class="headline"])[1]', 0, 0)
            this.waitForElementVisible('(//h3[@class="headline"])[1]', 200000)
            this.click('(//h3[@class="headline"])[1]')
            // .api.useCss()
            this.api.pause(5000)
            this.waitForElementPresent('(//span[contains(text(), "Save")])[2]', 2000)
            this.click('(//span[contains(text(), "Save")])[2]')
            // this.waitForElementVisible('(//li[@WSJTheme__tool_d7-0lZbdKxib8fS9OSHB WSJTheme__save-tool_17Qf7SZmap6IDfQ75OykwG "])[1]', 200000)
            // this.click('(//li[@WSJTheme__tool_d7-0lZbdKxib8fS9OSHB WSJTheme__save-tool_17Qf7SZmap6IDfQ75OykwG "])[1]')
            .api.useCss()
            this
            .click('@accountButton')
            .api.useXpath()
            this
            .pause(1000)
            .click('(//li[@class="style__customer-nav-items_q8m_wCZgM33fd-u1fYYoL "])[4]')
            .api.useCss()
            this
            .pause(1000)
            // .waitForElementVisible('[class="content-wrapper"]')
            .pause(1000)
            .perform(() => {
                // this.verify.containsText('[class="content-wrapper"]', "1 Saved Articles EDIT")
                this.useXpath()
                this.verify.containsText('//h2//a', title)
            })
        return this
    },
    clearSaved: function () {
        this
            .useXpath()
            .click('(//a[@id="editButton"])[1]')
            .click('(//li[@class="delete-undo"])')
            .click('//a[@class="done"]')
            .useCss()
        return this
    },
    plop: function () {

    }
}
module.exports = {
    url: 'https://www.wsj.com',
    commands: [poopycommands],
    elements: {
        searchButton: '[class="style--search-button--1U43LWwP "]',
        searchbox: '[placeholder="Enter News, Quotes, Companies or Videos"]',
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
        searchButton2: '[class="style--search-submit--36AD7RDg "]',
        accountButton: '[class="style__fullname_3RYDOD92IoqSzkhjexp6sF "]'
    }
}