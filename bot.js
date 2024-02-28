
const TelegramBot = require('node-telegram-bot-api');

const token = '7159428446:AAGIDI9nRWEyMc12MIZX4bF4aIxWhvyhz5Y';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
     const chatId = msg.chat.id
     const messageText = msg.text;


     if (messageText == '/start') {
         bot.sendMessage(chatId, 'Welcome to TeleCourses')
     }
     else if(messageText == '/courses') {
        bot.sendMessage(chatId, 'No Courses!')
     }
})