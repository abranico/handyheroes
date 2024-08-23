import services from "@/mocks/services.json"; // Importa el JSON local

export const getAllServices = async () => {
  try {
    // Retorna directamente los servicios desde el archivo JSON
    return services;
  } catch (e) {
    throw new Error("Failed to fetch services");
  }
};

export const fetchAddService = async (service) => {
  try {
    // Simula la adición de un nuevo servicio al JSON local (no persistente)
    const newId = services.length ? services[services.length - 1].id + 1 : 1;
    const newService = { id: newId, ...service };
    services.push(newService);
    return newService;
  } catch (error) {
    throw new Error("Error adding service");
  }
};

export const serviceUpdate = async (id, service) => {
  try {
    // Simula la actualización de un servicio en el JSON local (no persistente)
    const serviceIndex = services.findIndex((s) => s.id === id);
    if (serviceIndex === -1) throw new Error("Service not found");
    const updatedService = { ...services[serviceIndex], ...service };
    services[serviceIndex] = updatedService;
    return updatedService;
  } catch (e) {
    throw new Error("Failed to update service");
  }
};

export const fetchDeleteService = async (id) => {
  try {
    // Simula la eliminación de un servicio en el JSON local (no persistente)
    const serviceIndex = services.findIndex((s) => s.id === id);
    if (serviceIndex === -1) throw new Error("Service not found");
    services.splice(serviceIndex, 1);
    return true;
  } catch (error) {
    console.error(error.message);
    throw new Error(`Error deleting service: ${error.message}`);
  }
};
