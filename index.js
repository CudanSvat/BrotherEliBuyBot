require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

// ✅ Dummy web server to keep Render free plan happy
const app = express();
app.get("/", (req, res) => res.send("Buybot is running."));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Web server running on port ${PORT}`));

// ✅ Telegram Bot setup
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  console.log("Your chat ID is:", chatId);
  bot.sendMessage(chatId, '👋 Buybot is now active!');
});
bot.sendMessage(process.env.TELEGRAM_CHAT_ID, "✅ Bot connected to the private group!");
