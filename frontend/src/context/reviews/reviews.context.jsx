import { createContext } from "react";
import useReviews from "../../hooks/useReviews";
export const ReviewsContext = createContext();

export const ReviewsContextProvider = ({ children }) => {
  const { reviews, loading, removeReview, addReview } = useReviews();

  const deleteReview = (id) => {
    removeReview(id);
  };

  const handleAddReview = (review) => {
    addReview(review);
  };

  return (
    <ReviewsContext.Provider value={{ reviews, deleteReview, handleAddReview }}>
      {!loading && children}
    </ReviewsContext.Provider>
  );
};
