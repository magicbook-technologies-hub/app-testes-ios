const { I } = inject();

module.exports = {

  buttons:{
   pular: '//XCUIElementTypeOther[@name="Pular"]'
  },


  clickButtonPular(){
    I.wait(5)
    I.tap(this.buttons.pular)
  }
}
