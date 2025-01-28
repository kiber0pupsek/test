const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://api.solsense.ai/v1";

// Get real-time token data
fetch(`${BASE_URL}/tokens/Ej5Sm...`, {
    headers: { Authorization: `Bearer ${API_KEY}` }
})
.then(response => response.json())
.then(data => console.log(data));

// Predict token performance
fetch(`${BASE_URL}/predictions`, {
    method: "POST",
    headers: { Authorization: `Bearer ${API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ token_address: "Ej5Sm...", timeframe: "7d" })
})
.then(response => response.json())
.then(data => console.log(data));
