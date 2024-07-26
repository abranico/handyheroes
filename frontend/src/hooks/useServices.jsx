import { useState, useEffect } from "react";
import {
  getAllServices,
  fetchAddService,
  fetchDeleteService,
  serviceUpdate,
} from "../services/services";

const useServices = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(null);
    setLoading(true);
    getAllServices()
      .then((data) => setServices(data))
      .catch((e) => {
        console.error(e.message);
        setError({ error: e.message });
      })
      .finally(() => setLoading(false));
  }, []);

  const addService = (service) => {
    setError(null);
    setLoading(true);
    fetchAddService(service)
      .then((newService) =>
        setServices((prevServices) => prevServices.concat(newService))
      )
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const editService = (id, partialData) => {
    setLoading(true);
    setError(null);
    serviceUpdate(id, partialData)
      .then((updatedService) => {
        setServices((prevServices) =>
          prevServices.map((service) => {
            return service.id === id
              ? { ...service, ...updatedService }
              : service;
          })
        );
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const removeService = async (id) => {
    try {
      setError(null);
      setLoading(true);
      const result = await fetchDeleteService(id);
      if (result) {
        setServices((prevServices) =>
          prevServices.filter((service) => service.id !== id)
        );
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { services, error, loading, addService, removeService, editService };
};

export default useServices;
