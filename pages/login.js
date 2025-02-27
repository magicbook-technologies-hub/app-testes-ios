const { I } = inject();

module.exports = {

  buttons:{
   pular: '//XCUIElementTypeOther[@name="Pular"]'
  },

  text:{
    entrar: '//XCUIElementTypeStaticText[@label="Entrar"]'
   },


  clickButtonPular(){
    I.wait(5)
    I.tap(this.buttons.pular)
  },

  clickTextEntrar(){
    I.tap(this.text.entrar)
  },

  doLogin(email,password){
    
  },
}
