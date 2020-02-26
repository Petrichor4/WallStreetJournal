module.export = {
    beforeEach: browser => {
        browser.url('https://www.youtube.com')
    },
    after: browser => {
        browser.end()
    },
    'sign in test': browser => {
        browser
            .pause(3000)
            .click('[class="authLinks redButton"]')
            .pause(3000)
    }
}