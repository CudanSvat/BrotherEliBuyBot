const axios = require('axios');

async function checkTrades() {
  try {
    const res = await axios.get("https://starknet.api.avnu.fi/v1/trades?tokenBuy=0x02ab526354a39e7f5d272f327fa94e757df3688188d4a92c6dc3623ab79894e2&tokenSell=0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d&limit=10");
    console.log(res.data);
  } catch (error) {
    console.error("Error calling Avnu API:", error.message);
  }
}

checkTrades();
