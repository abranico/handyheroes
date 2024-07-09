const API_URL = "https://localhost:7011/api/Authentication/authenticate";

export const authenticate = async (authenticationRequest) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(authenticationRequest),
    });
    if (!response.ok) throw new Error("Error authenticate user");
    const data = await response.text();
    return decodeToken(data);
  } catch (error) {
    throw new Error("Error authenticate user");
  }
};

const decodeToken = (token) => {
  try {
    const [, payloadBase64] = token.split(".");
    const decodedPayload = base64UrlDecode(payloadBase64);
    return JSON.parse(decodedPayload);
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

const base64UrlDecode = (str) => {
  // Decodes base64 URL-encoded string
  const base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  return decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );
};
