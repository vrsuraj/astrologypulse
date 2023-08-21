const AP_CONFIG = require("../ap.config.json");
const API_URL = "https://json.astrologyapi.com/v1";
const BASE_URL = "http://192.168.29.76:3003";
//"https://astropages-express.pt8u8ec0fu2dc.ap-south-1.cs.amazonlightsail.com";
const API_KEY = AP_CONFIG.ASTROLOGYAPI_API_KEY; //"3c6f3d429803b6c0c8db5d7b87886365";
const USER_ID = AP_CONFIG.ASTROLOGYAPI_USERID; //"623480";
const X_ASTROPAGES_KEY = AP_CONFIG.X_ASTROPAGES_KEY;
const AUTHORISATION =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJkaGFybWlrLnJhdGhvZEB2ZWRpY3Jpc2hpYXN0cm8uY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjkyMTg4Nzg5LCJleHAiOjE2OTIyNzUxODl9.0nbie_XR3HfUtr9kq9AAhH3954bc7TXBA_x6M5YUYbM";

export async function FetchApi(input) {
  if (input) {
    const arg = `${API_URL}/${input.apiName}`;
    const response = await fetch(arg, {
      method: "POST",
      headers: {
        Authorization: getAuth(USER_ID, API_KEY),
        //"Basic NjIwNDU3OjJiYTdhNTRlNDJmMzlmYTZhMDU2MDJkOTYyZmM5ZWRi",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input.userData),
    });
    return await response.json();
  } else {
    return "loading...";
  }
}

export async function DBEntry(input) {
  const URL = input?.url ? `${BASE_URL}/${input?.url}` : `${BASE_URL}`;
  const ID = input?.id ? input?.id : "";

  if (input) {
    const method = input?.method;
    const arg = `${URL}${ID}`;
    const response = await fetch(arg, {
      method: method,
      headers: {
        "x-astropage-key": X_ASTROPAGES_KEY,
        // "X-AP-KEY": "test_db",
        Authorization: AUTHORISATION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input.body),
    });
    return await response.json();
  } else {
    return "loading...";
  }
}

export function getAuth(userid, apikey) {
  const authorisation = `Basic ${Buffer.from(userid + ":" + apikey).toString(
    "base64"
  )}`;
  return authorisation;
}
