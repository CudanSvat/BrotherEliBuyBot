require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  console.log("Your chat ID is:", chatId);

  bot.sendMessage(chatId, '👋 Buybot is active!');
});
