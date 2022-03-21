/*CMD
  command: /trx
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var res = Libs.ResourcesLib.userRes("balance");
if(res.value() < 0.2 ){
Bot.sendMessage("❌ Cantidad mínima para retirar 0.2 DGB")
}else{
Bot.sendKeyboard("⬅️ Atrás","📤 _¿Cuántos BTT quiere retirar?_\n\n*Mínimo:* `0.2 DGB`"+"\n"+"*Máximo:* `"+res.value().toFixed(4)+"`* DGB\n"+"*\n_El monto máximo corresponde a su saldo._"+"\n\n"+"*➡️ Envíe ahora la cantidad que desea retirar*")
Bot.runCommand("/withtrx")
}
