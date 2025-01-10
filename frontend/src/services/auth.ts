const API_URL = "https://localhost:7084/api";

export const login = async (request) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(request),
    credentials: "include",
  });
  if (!response.ok)
    throw new Error(`Login failed with status ${response.status}`);
};

export const logout = async () => {
  const response = await fetch(`${API_URL}/logout`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!response.ok)
    throw new Error(`Logout failed with status ${response.status}`);
};

export const me = async () => {
  const response = await fetch(`${API_URL}/me`, {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok)
    throw new Error(`Refresh failed with status ${response.status}`);
};
