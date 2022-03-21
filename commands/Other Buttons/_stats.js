/*CMD
  command: /stats
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Other Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
  let tota = Libs.ResourcesLib.anotherChatRes("tota", "global")

Bot.sendMessage("*📊 Usuarios Totales:* `"+tota.value().toFixed() + "`\n\n*🔻Total Retirado:\n* `"+userPayment.value()+ "` *DGB*")
