/*CMD
  command: 👥 Invitar
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Button
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*¡Perdón! Ahora no puedes usar este bot porque esta baneado 😕*");
return
}
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 El bot está desactivado actualmente*");
}else{


let res = Libs.ResourcesLib.userRes("referral");
let reflink=Libs.ReferralLib.currentUser.getRefLink("CryptoPayFaucetBot","12");
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
var key = [[{title:"👤 Informe detallado",command:"/detref"}]]

Bot.sendInlineKeyboard(key,"*Por cada referido gana: 0.05 DGB\n\nTotal invitados: "+refList.length+" Usuarios\n\n*Enlace para Invitar ⬇️*\n"+reflink+"*")

}
