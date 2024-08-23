import reviews from "@/mocks/reviews.json"; // Importa el JSON local

export const getAllReviews = async () => {
  try {
    // Retorna directamente las reviews desde el archivo JSON
    return reviews;
  } catch (e) {
    throw new Error("Failed to fetch reviews");
  }
};

export const fetchAddReview = async (review) => {
  try {
    // Simula la adición de una nueva review al JSON local (no persistente)
    const newId = reviews.length ? reviews[reviews.length - 1].id + 1 : 1;
    const newReview = { id: newId, ...review };
    reviews.push(newReview);
    return newReview;
  } catch (error) {
    throw new Error("Error adding review");
  }
};

export const fetchDeleteReview = async (id) => {
  try {
    // Simula la eliminación de una review en el JSON local (no persistente)
    const reviewIndex = reviews.findIndex((review) => review.id === id);
    if (reviewIndex === -1) throw new Error("Error deleting review");
    reviews.splice(reviewIndex, 1);
    return true;
  } catch (error) {
    throw new Error("Error deleting review");
  }
};
