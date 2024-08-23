import users from "@/mocks/users.json"; // Importa el JSON local

export const login = async (request) => {
  try {
    // Simula la verificación de credenciales
    const user = users.find(
      (u) => u.email === request.email && u.password === request.password
    );

    if (!user) throw new Error("Invalid credentials");

    // Simula la respuesta con un token de autenticación
    const token = "fake-jwt-token"; // Puedes generar un token ficticio
    return user;
  } catch (error) {
    throw new Error("Error login user");
  }
};

export const register = async (request) => {
  try {
    // Verifica si el usuario ya existe
    const usernameExists = users.some((u) => u.username === request.username);
    if (usernameExists) throw new Error("Username already exists");
    const emailExists = users.some((u) => u.email === request.email);
    if (emailExists) throw new Error("Email already exists");

    // Simula la adición del nuevo usuario al JSON local (no persistente)
    const newId = users.length ? users[users.length - 1].id + 1 : 1;
    const newUser = { id: newId, ...request };
    users.push(newUser);

    // Simula la respuesta con un token de autenticación
    const token = "fake-jwt-token"; // Puedes generar un token ficticio
    return newUser;
  } catch (error) {
    throw new Error("Error register user");
  }
};
