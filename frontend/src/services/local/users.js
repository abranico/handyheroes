import users from "@/mocks/users.json"; // Importa el JSON local

export const getAllUsers = async () => {
  try {
    // Retorna directamente los usuarios desde el archivo JSON
    return users;
  } catch (e) {
    throw new Error("Failed to fetch users");
  }
};

export const getUserByUsername = async (username) => {
  try {
    // Busca el usuario por nombre de usuario dentro del JSON local
    const user = users.find((user) => user.username === username);
    if (!user) throw new Error();
    return user;
  } catch (e) {
    throw new Error("Failed to fetch user");
  }
};

export const userPartialUpdate = async (id, partialData) => {
  try {
    // Simula la actualización de un usuario en el JSON local (no persistente)
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) throw new Error();
    const updatedUser = { ...users[userIndex], ...partialData };
    users[userIndex] = updatedUser;
    return updatedUser;
  } catch (e) {
    throw new Error("Failed to update user");
  }
};

export const createUser = async (newUser) => {
  try {
    // Simula la creación de un nuevo usuario en el JSON local (no persistente)
    const newId = users.length ? users[users.length - 1].id + 1 : 1;
    const user = { id: newId, ...newUser };
    users.push(user);
    return user;
  } catch (e) {
    throw new Error("Failed to add user");
  }
};

export const deleteUser = async (id) => {
  try {
    // Simula la eliminación de un usuario en el JSON local (no persistente)
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) throw new Error("Error deleting user");
    users.splice(userIndex, 1);
    return true;
  } catch (error) {
    throw new Error("Error deleting user");
  }
};
