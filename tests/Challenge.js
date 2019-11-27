var inputs = require('../testAssets/newsAssets')
module.exports = {
    before: browser => {
        browser.url('https://devmountain-qa.github.io/enter-wanted/1.3_Assignment/index.html')
    },
    after: browser => {
        browser.end()
    },
    'challenge': browser => {
        browser
            .useXpath()
            .getText('(//span[@class="placeholderText"])[2]', function (result) {
                text = result.value
                console.log('text is:', result.value)
                for (i = 1; i < 18; i++) {
                    browser.useXpath()
                        browser.setValue(`(//input[@class="materialInput"])[${i}]`, `${i}`)
                            .verify.value(`(//input[@class="materialInput"])[${i}]`, `${i}`)
                }
            })
    }
}