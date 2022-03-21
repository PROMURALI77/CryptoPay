/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendKeyboard("✅ Verificar","*💡 Para usar el bot debe unirse a:*\n👤 @CriptoPayPagos\n💰 @CryptoPayGrupo") 
function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*Está tratando de invitarse a si mismo ❌*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
 balance.add(0)
Bot.sendMessageToChatWithId(refUser.chatId, "*🏧 ¡Nuevo referido!\n\n¡Espere que su referido ingrese a los canales para recibir la recompensa!*");
}

function doAlreadyAttracted(){
  Bot.sendMessage("*Ya inicio este bot no puede usar otro enlace de referido ❌*");
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);

Bot.sendMessageToChatWithId(1498810624,"*🔊Nuevo Usuario\n\n1️⃣Nombre: "+user.first_name+ "\n\n2️⃣Apellido: "+user.last_name+ "\n\n3️⃣Usuario: @"+user.username+ "\n\n4️⃣USERID:* `"+user.telegramid+ "`");
