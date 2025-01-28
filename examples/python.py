import requests

API_KEY = "YOUR_API_KEY"
BASE_URL = "https://api.solsense.ai/v1"

# Get real-time token data
response = requests.get(
    f"{BASE_URL}/tokens/Ej5Sm...",
    headers={"Authorization": f"Bearer {API_KEY}"}
)
print(response.json())

# Predict token performance
response = requests.post(
    f"{BASE_URL}/predictions",
    headers={"Authorization": f"Bearer {API_KEY}"},
    json={"token_address": "Ej5Sm...", "timeframe": "7d"}
)
print(response.json())