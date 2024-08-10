

# Handy Heroes

**Handy Heroes** es un proyecto de trabajo práctico para la universidad que se centra en cumplir con una serie de requisitos específicos para demostrar habilidades en el desarrollo con React.

#### El proyecto se centra en cumplir los siguientes requisitos:

- [x] **Autenticación**: Implementa un sistema de autenticación con al menos tres roles diferentes.
- [x] **Sin Librerías Externas**: No se utilizan librerías externas para el desarrollo del proyecto.
- [x] **Enrutado Dinámico**: Incluye enrutado dinámico para manejar las diferentes vistas de la aplicación.
- [x] **Consumo de API**: Consume una API para obtener y manejar datos.
- [x] **Uso de Context**: Utiliza Context para manejar el estado global de la aplicación.
- [x] **Custom Hook**: Implementa al menos un custom hook para un caso de uso específico.
- [x] **Protección de Rutas**: Protege las rutas para garantizar que solo los usuarios autorizados puedan acceder a ciertas vistas.
- [x] **ABM por Rol de Usuario**: Implementa operaciones de Alta, Baja y Modificación (ABM) específicas por rol de usuario.
- [x] **Hooks Avanzados**: Utiliza hooks avanzados como `useMemo` y `useCallback` para optimizar el rendimiento.


## Descripción

Handy Heroes es una aplicación web desarrollada con React que permite a los usuarios registrarse como profesionales o clientes. Los profesionales pueden ofrecer sus oficios, y los clientes pueden dejar reseñas sobre los servicios recibidos. La aplicación utiliza una [FAKE API](https://github.com/robinhuy/fake-api-nodejs) como backend para simular las funcionalidades de un sistema real.

## Funcionalidades

- **Registro y Autenticación**: Los usuarios pueden registrarse como profesionales o clientes.
- **Oficios**: Los profesionales pueden ofrecer sus servicios a través de la aplicación.
- **Reseñas**: Los clientes pueden dejar reseñas sobre los servicios recibidos.
- **Dashboard Admin**: El usuario tipo admin tiene acceso a un dashboard para gestionar la aplicación.
- **Visualización**: Los usuarios pueden ver y gestionar las reseñas y los oficios ofrecidos.

## Tecnologías Utilizadas

- **Frontend**: React
- **Backend**: [Fake API (simulada para este proyecto)](https://github.com/robinhuy/fake-api-nodejs)

## Instalación y Ejecución

Para instalar las dependencias y ejecutar el proyecto tanto en el frontend como en el backend, sigue estos pasos:

1. Navega a la carpeta `frontend`:
    ```bash
    cd frontend
    ```

2. Ejecuta el siguiente comando para instalar las dependencias y ejecutar ambos proyectos:
    ```bash
    npm run install-and-run
    ```

Este comando realiza lo siguiente:
- Instala las dependencias en la carpeta `frontend` y `backend`.
- Ejecuta `npm run dev` en la carpeta `frontend` y `backend` simultáneamente.

