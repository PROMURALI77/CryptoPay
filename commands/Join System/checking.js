/*CMD
  command: checking
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Join System
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.runCommand("my_main_menu")
User.addToGroup("user")
}

if (user=="left"){
Bot.sendMessage("*š” Para usar el bot debe unirse a:*\nš¤ @CriptoPayPagos\nš° @CryptoPayGrupo")
}
