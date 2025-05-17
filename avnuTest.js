const axios = require('axios');

const TOKEN_ID = '0x02ab526354a39e7f5d272f327fa94e757df3688188d4a92c6dc3623ab79894e2';  // Replace with the token you want to test

async function testAvnuAPI() {
  try {
    const url = `https://starknet.api.avnu.fi/api/v1/spot/tokens/${TOKEN_ID}/trades?limit=5&sort=desc&filter=buy`;
    const response = await axios.get(url);
    console.log('Avnu API response:', response.data);
  } catch (error) {
    console.error('Error calling Avnu API:', error.message);
  }
}

testAvnuAPI();
