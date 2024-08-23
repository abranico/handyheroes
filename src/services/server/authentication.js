const API_URL = "http://localhost:8000";

export const login = async (request) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(request),
    });
    if (!response.ok) throw new Error();
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error login user");
  }
};

export const register = async (request) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(request),
    });
    if (!response.ok) throw new Error();
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error register user");
  }
};
