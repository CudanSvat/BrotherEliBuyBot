const axios = require('axios');

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

let lastCheckedTimestamp = 0; // Keep track of the last time we checked

async function checkSLAYBuys() {
  try {
    // Replace with the actual AvNu API endpoint to get trades or swaps
    const response = await axios.get('https://api.avnu.fi/v1/swaps?token=0x2ab526354a39e7f5d272f327fa94e757df3688188d4a92c6dc3623ab79894e2');
    
    const swaps = response.data; // Adjust based on the actual response structure
    
    // Filter only buys after the lastCheckedTimestamp
    const newBuys = swaps.filter(swap => swap.timestamp > lastCheckedTimestamp);

    for (const buy of newBuys) {
      // Send Telegram message about the buy
      await sendTelegramMessage(`New SLAY buy detected!\nAmount: ${buy.amount}\nFrom: ${buy.from}`);
      lastCheckedTimestamp = buy.timestamp;
    }
  } catch (error) {
    console.error('Error checking SLAY buys:', error);
  }
}

async function sendTelegramMessage(text) {
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  await axios.post(url, {
    chat_id: TELEGRAM_CHAT_ID,
    text,
  });
}

// Start polling every 30 seconds
setInterval(checkSLAYBuys, 30 * 1000);

module.exports = {};
