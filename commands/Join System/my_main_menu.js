/*CMD
  command: my_main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Join System
  answer: 
  keyboard: 
  aliases: 
CMD*/

var setwelcome = 
Bot.getProperty("welcome")
let res = Libs.ResourcesLib.userRes("balance");

let active = Libs.ResourcesLib.userRes("active")
let admin = Bot.getProperty("admin")
if (admin == user.telegramid) {

Bot.sendKeyboard("💳 Saldo,👥 Invitar,\n💼 Wallet,🎁 Bonus,📤 Retirar\n📊 Estadísticas,📞 Soporte,🏆 Top referidos\n📮 Panel de Admin 📮",""+setwelcome+"")
Bot.runCommand("ref")


} else {
  let user = User.getProperty("status")
  if ((user == "member") | (user == "administrator") | (user == "creator")) {
    
    Bot.sendKeyboard("💳 Saldo,👥 Invitar\n🎁 Bonus,📊 Estadísticas,📤 Retirar\n💼 Wallet,📞 Soporte",""+setwelcome+"")}}
Bot.runCommand("ref")
