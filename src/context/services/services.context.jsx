import { createContext } from "react";
import useServices from "../../hooks/useServices";
import useUsers from "../../hooks/useUsers";

export const ServicesContext = createContext();

export const ServicesContextProvider = ({ children }) => {
  const { services, loading, addService, removeService, editService } =
    useServices();

  const { users, partialUpdate } = useUsers();

  const handleUpdate = (id, data) => {
    editService(id, data);
  };

  const handleAdd = (newService) => {
    addService(newService);
  };

  const handleDelete = (id) => {
    removeService(id).then(() => {
      const usersWithThisServices = users.filter(
        (user) => user.serviceId === id
      );
      usersWithThisServices.forEach((user) => {
        partialUpdate(user.id, { serviceId: null });
      });
    });
  };

  return (
    <ServicesContext.Provider
      value={{ services, handleAdd, handleDelete, handleUpdate }}
    >
      {!loading && children}
    </ServicesContext.Provider>
  );
};
