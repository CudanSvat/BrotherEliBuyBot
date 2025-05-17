const axios = require('axios');

const TOKEN_ID = 'your-token-id';  // Replace with the token you want to test

async function testAvnuAPI() {
  try {
    const url = `https://api.avnu.fi/api/v1/spot/tokens/${TOKEN_ID}/trades?limit=5&sort=desc&filter=buy`;
    const response = await axios.get(url);
    console.log('Avnu API response:', response.data);
  } catch (error) {
    console.error('Error calling Avnu API:', error.message);
  }
}

testAvnuAPI();
