/*CMD
  command: 📊 Estadísticas
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Button
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*Ha sido baneado por eo admin* 😔\n\nHey"+user.first_name+",\nPóngase en contacto con el administrador: @Samuel_Falcon");
return
}
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 El bot está desactivado actualmente*");
}else{
Bot.runCommand("/stats")
    }
