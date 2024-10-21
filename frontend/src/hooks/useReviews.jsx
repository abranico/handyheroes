import {
  getAllReviews,
  fetchAddReview,
  fetchDeleteReview,
} from "../services/local/reviews"; // local/server
import { useState, useEffect } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setLoading(true);
    getAllReviews()
      .then((data) => setReviews(data))
      .catch((e) => {
        console.error(e.message);
        setError({ error: e.message });
      })
      .finally(() => setLoading(false));
  }, []);

  const addReview = (review) => {
    setError(null);
    setLoading(true);
    fetchAddReview(review)
      .then((newReview) =>
        setReviews((prevReviews) => prevReviews.concat(newReview))
      )
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const removeReview = async (id) => {
    try {
      setError(null);
      setLoading(true);
      const check = await fetchDeleteReview(id);
      if (check)
        setReviews((prevRevies) =>
          prevRevies.filter((review) => review.id !== id)
        );
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { reviews, error, loading, addReview, removeReview };
};

export default useReviews;
