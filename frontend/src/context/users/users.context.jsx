import { createContext } from "react";
import useUsers from "../../hooks/useUsers";
import useReviews from "../../hooks/useReviews";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const { users, loading, error, partialUpdate, removeUser, addUser, getAll } =
    useUsers();

  const { reviews, removeReview } = useReviews();

  const handleUpdate = (id, data) => {
    partialUpdate(id, data);
  };

  const handleAddUser = (newUser) => {
    addUser(newUser);
  };

  const handleDeleteUser = (id) => {
    removeUser(id).then(() => {
      reviews.forEach((review) => {
        if (review.client.id === id || review.professional.id === id) {
          removeReview(review.id);
        }
      });
    });
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        loading,
        error,
        handleUpdate,
        handleAddUser,
        handleDeleteUser,
        getAll,
      }}
    >
      {!loading && children}
    </UsersContext.Provider>
  );
};
