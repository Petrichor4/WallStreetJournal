var number = require ('../testAssets/newsAssets')
module.exports = {
    berfore: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
    },
    after: browser => {
        browser.end()
    },
    "Challenge": browser => {
        browser
        .forEach(
            browser
                .click(`(//li[@class="listText"])${number}`)
        )
    }

}