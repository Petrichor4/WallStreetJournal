module.exports = {
    clickButtonByText: function(text){
        this.api.useXpath()
        this.click(`//href[contains(text(), '${text}')]`)
        this.api.useCss()
        return this
    }
}