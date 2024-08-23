const API_URL = "http://localhost:8000/reviews";
const TOKEN = JSON.parse(localStorage.getItem("__user__"))?.accessToken;

export const getAllReviews = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (!response.ok) throw new Error();
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("Failed to fetch reviews");
  }
};

export const fetchAddReview = async (review) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(review),
    });
    if (!response.ok) throw new Error("Error adding review");
    return await response.json();
  } catch (error) {
    throw new Error("Error adding review");
  }
};

export const fetchDeleteReview = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(id),
    });
    if (!response.ok) throw new Error("Error deleting review");
    return true;
  } catch (error) {
    throw new Error("Error deleting review");
  }
};
