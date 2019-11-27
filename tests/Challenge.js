var inputs = [
    {
        in: 'lanjdlkjanlskdjnf',
        Out: 'lanjdlkjanlskdjnf'
    },
    {
        in: 'djfaskdsnfaksfjs',
        out: 'djfaskdsnfaksfjs'
    },
    {
        in: 'jhjhjhjhjhjh',
        out: 'jhjhjhjhjhjh'
    },
    {
        in: 'blahblhblahblah',
        out: 'blahblhblahblah'
    },
    {
        in:'hLHlLHlLHLhlwefl',
        out:'hLHlLHlLHLhlwefl'
    },
    {
        in:'lohlohlhohlhohlhoh',
        out:'lohlohlhohlhohlhoh'
    },
    {
        in: 'aggagadsgasdgasdga',
        out:'aggagadsgasdgasdga'
    },
    {
        in: 'hDF3CEadsefqdwfs',
        out:'hDF3CEadsefqdwfs'
    }
]
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
                for (i = 1; i < 17; i++) {
                    browser.useXpath()
                    browser.forEach(test => {
                        browser.setValue(`(//input[@class="materialInput"])[${i}]`, inputs.in)
                            .verify.value(`(//input[@class="materialInput"])[${i}]`, ipnuts.out)
                    })
                }
            })
    }
}