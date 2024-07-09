const API_URL = "https://localhost:7011/api/Review";

export const fetchAllReviews = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch reviews");
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
        "content-type": "application/json",
      },
      body: JSON.stringify(id),
    });
    if (!response.ok) throw new Error("Error deleting review");
    return true;
  } catch (error) {
    throw new Error("Error deleting review");
  }
};
