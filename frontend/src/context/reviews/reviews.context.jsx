import { createContext } from "react";
import useReviews from "../../hooks/useReviews";
export const ReviewsContext = createContext();

export const ReviewsContextProvider = ({ children }) => {
  const { reviews, loading, removeReview } = useReviews();
  const deleteReview = (id) => {
    removeReview(id);
  };

  return (
    <ReviewsContext.Provider value={{ reviews, deleteReview }}>
      {!loading && children}
    </ReviewsContext.Provider>
  );
};
