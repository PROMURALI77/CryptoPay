/*CMD
  command: /trxprice
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Other Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

                                                                                                                  
var channel = 
Bot.getProperty("setpaychan")

var result = JSON.parse(data.content);

var TRX = result.market_data.current_price.usd
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
Api.sendPhoto({
photo:"https://su-link.herokuapp.com/dl/0/AgADZKoxG_KoyUU.jpg",
caption:"📈 *Precio del BTT hoy:* \n1 BTT= $ `" + TRX.toFixed(8) + "`\n\n" + "*🕓 Hora del Servidor:*" +"\n" +time+"" + "\n\n" + "🌐 Canal de pago en vivo: "+channel+ "",parse_mode : "Markdown" , disable_web_page_preview: true
});

