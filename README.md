# Social Media Posts Viewer - FullStack Application 🚀

## Descripción del Proyecto 📋  
Aplicación full-stack para visualizar y buscar publicaciones de redes sociales. Desarrollada con:  
🔹 **Backend**: Spring Boot (Java 17) + PostgreSQL (Supabase)  
🔹 **Frontend**: React + Axios  
🔹 **Integración**: Diseño modular y componentes reutilizables  

![Tech Stack](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black) ![Spring](https://img.shields.io/badge/Spring_Boot-6DB33F?logo=springboot) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql)

**Características principales**:  
✅ Listado dinámico de publicaciones  
🔍 Búsqueda en tiempo real (case-insensitive)  
📊 Detalles completos de interacciones  
⚡ Integración fluida frontend/backend  

---

## 🛠️ Instalación y Ejecución  

### Requisitos Previos  
- JDK 17  
- Node.js v16+  
- IDE (IntelliJ recomendado)  

### Pasos para Ejecutar  

#### **Backend (Spring Boot)** 🖥️  
1. Clona el repositorio:  
   ```bash 
   git clone [URL_DEL_REPOSITORIO]
## 🏁 Instrucciones de ejecución

### Backend (Spring Boot)

1. Abre el proyecto en IntelliJ.
2. Navega a `src/main/java/com/example/goapiaplicattion/GoApiApplication.java`.
3. Ejecuta la clase principal (puerto `8080`).

### Frontend (React)

1. Abre la terminal y navega a la carpeta `frontend`:
    ```bash
    cd frontend
    ```
2. Instala las dependencias necesarias:
    ```bash
    npm install
    ```
3. Inicia la aplicación React (puerto `3000`):
    ```bash
    npm start
    ```

## 🔌 Endpoints Disponibles (Backend)

| Método | Endpoint                                | Descripción                           | Ejemplo                                     |
|--------|-----------------------------------------|---------------------------------------|---------------------------------------------|
| GET    | /api/posts                              | Obtiene todas las publicaciones       | [http://localhost:8080/api/posts](http://localhost:8080/api/posts)           |
| GET    | /api/posts/{id}                         | Obtiene publicación por ID            | [http://localhost:8080/api/posts/1](http://localhost:8080/api/posts/1)       |
| GET    | /api/posts/search?q={query}             | Filtra por palabra clave (texto completo) | [http://localhost:8080/api/posts/search?q=tech](http://localhost:8080/api/posts/search?q=tech) |

## ⚠️ Consideraciones Importantes

### Base de Datos 🗃️

La conexión está preconfigurada con **Supabase** (PostgreSQL).

🔒 **Importante**: En producción, asegúrate de usar **variables de entorno** y **autenticación**.

### Pruebas 🧪

Usa herramientas como **Postman** o **Insomnia** para probar los endpoints. Aquí tienes un ejemplo de uso en Postman.

### Diseño 🎨

Los estilos están enfocados en la funcionalidad, con una estructura mínima. Los componentes se encuentran organizados en `src/components`.

## 📂 Estructura del Proyecto

.
├── backend/          
│   ├── src/
│   │   └── main/java/com/example/goapiaplicattion  # Lógica Spring Boot
│   └── resources/application.properties            # Config DB
├── frontend/         
│   ├── public/                # Assets estáticos
│   └── src/                   
│       ├── components/        🧩 Componentes reutilizables
│       ├── services/          ⚡ Lógica de APIs (Axios)
│       └── App.js             # Punto de entrada
└── README.md   

## 📝 Conclusión

Este proyecto demuestra habilidades full-stack con:
- Integración entre **React** y **Spring Boot**.
- Gestión de estados y consumo de APIs REST.
- Buenas prácticas de documentación.

¡Gracias por tu interés! 👨💻👩💻
