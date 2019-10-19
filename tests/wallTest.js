var news
module.exports = {
    beforeEach: browser => {
        news = browser.page.poopy()
        news.navigate()

    },
    after: browser => {
        news.end()
    },
    "sign in": browser => {
        news
            // .pause()
            .search()
    }
}