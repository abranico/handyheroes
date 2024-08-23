const API_URL = "http://localhost:8000/services";

export const getAllServices = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw new Error();
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("Failed to fetch services");
  }
};

export const fetchAddService = async (service) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    });
    if (!response.ok) throw new Error("Error adding service");
    return await response.json();
  } catch (error) {
    throw new Error("Error adding service");
  }
};

export const serviceUpdate = async (id, service) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    });
    if (!response.ok) throw new Error();
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("Failed to update service");
  }
};

export const fetchDeleteService = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return true; // Retornar true si la eliminación fue exitosa
  } catch (error) {
    console.error(error.message); // Log adicional para depuración
    throw new Error(`Error deleting service: ${error.message}`);
  }
};
