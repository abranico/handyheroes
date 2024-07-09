const API_URL = "https://localhost:7011/api/User";

export const fetchAllUsers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch users");
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("Failed to fetch users");
  }
};

export const fetchAddUser = async (user) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) throw new Error("Error adding user");
    return await response.json();
  } catch (error) {
    throw new Error("Error adding user");
  }
};
