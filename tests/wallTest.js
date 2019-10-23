var news
var tabs = require('../testAssets/newsAssets')
module.exports = {
    before: browser => {
        news = browser.page.poopy()
        news.navigate()
    },
    after: browser => {
        news.end()
    },
    "sign in": browser => {
    //signing into the site using my login info.
    //the test is taking to long there needs to be improved performance.
    //goes to home page of wall street journal then navigates to the sign in page(the selector for sign in would not cooperate).
        news
            .signIn()
        news.expect.element('[class="style--customer-nav-login-closed--2D4pebKj "]').to.contain.text('Joe Stone')
    },
    "search": browser => {
        news
            .search()
        news.assert.value('[class="KeywordSearchInput"]', 'tech')
        news.useXpath()
        .waitForElementVisible('(//div[@class="zonedModule"])[6]')
        news.assert.containsText('(//div[@class="zonedModule"])[6]', 'Technology')
    },
    "saved articles": browser => {
        //clicking on the first article on the page then clicking the save button
        //navigating to saved articles page and checking if the article appears in the page.
        news
            .savedArticles()
            .clearSaved()
            .waitForElementPresent('[class="has-no-saved-content"]')
            .assert.elementPresent('[class="has-no-saved-content"]')
    }
    // "category tabs": browser => {
    //     news
    //     tabs.forEach(test => {
    //         news.categoryTabs(test)
    //     })
    //     news.click('(//a[@class="style--section-link--3qFFDClt "])[12]')
    //     .expect.element('[class="WSJTheme--title-logo-section--1a976dMr "]').text.to.contain("https://www.wsj.com/news/magazine")

    // }
}