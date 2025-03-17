# Social Media Posts Viewer - FullStack Application

## Descripción del Proyecto  
Aplicación full-stack que permite visualizar y buscar publicaciones de redes sociales. Desarrollada con **Spring Boot (Java 17)** en el backend y **React** en el frontend. La base de datos utiliza **PostgreSQL** gestionada mediante Supabase para facilitar el acceso.  

**Características principales**:  
- Listado de publicaciones con texto, fecha, autor e interacciones.  
- Búsqueda en tiempo real (insensible a mayúsculas/minúsculas).  
- Detalle completo de cada publicación.  
- Integración fluida entre frontend y backend.  

## Tecnologías Utilizadas  
- **Backend**:  
  - Java 17 + Spring Boot  
  - Supabase (PostgreSQL)  
  - Endpoints REST: Spring Web  
- **Frontend**:  
  - React + Axios (para consumo de APIs)  
  - Estilos CSS básicos  
- **Herramientas**:  
  - IntelliJ IDEA  
  - Node.js (v16+)  

---

## Instalación y Ejecución  

### Requisitos Previos  
- JDK 17 instalado.  
- Node.js y npm instalados (para el frontend).  
- Cliente de PostgreSQL o acceso a Supabase (opcional para revisión de datos).  

### Pasos para Ejecutar  

1. **Clonar el repositorio**:  
   ```bash
   git clone [URL_DEL_REPOSITORIO]
Backend (Spring Boot):

Abrir el proyecto en IntelliJ.

Navegar a: src/main/java/com/example/goapiaplicattion/GoApiApplication.java.

Ejecutar la clase GoApiApplication (puerto: 8080).

Frontend (React):

Abrir una terminal en la carpeta frontend.

Instalar dependencias:
npm install
Iniciar la aplicación:
npm start
La aplicación se ejecutará en: http://localhost:3000.
Endpoints Disponibles (Backend)
Endpoint	Descripción	Ejemplo de Uso
GET /api/posts	Obtiene todas las publicaciones	http://localhost:8080/api/posts
GET /api/posts/{id}	Obtiene una publicación por ID	http://localhost:8080/api/posts/1
GET /api/posts/search?q={query}	Filtra publicaciones por palabra/clave	http://localhost:8080/api/posts/search?q=hola
Consideraciones Importantes
Base de datos:

Utiliza Supabase con PostgreSQL. La conexión está preconfigurada para simplificar la prueba.

Nota de seguridad: En un entorno real, se recomienda restringir el acceso y usar variables de entorno.

Pruebas:

Los endpoints pueden probarse directamente desde Postman o navegador mientras el backend esté activo.

Diseño:

El frontend incluye estilos básicos. Se priorizó la funcionalidad sobre el diseño visual.

Estructura del Proyecto
├── backend/           # Código Spring Boot (Java)
│   └── src/main/java/com/example/goapiaplicattion
├── frontend/          # Aplicación React
│   ├── src/components # Componentes reutilizables
│   └── src/services   # Lógica de consumo de APIs (Axios)
└── README.md  

✨ Nota Final: Este proyecto fue desarrollado como evaluación técnica, priorizando buenas prácticas, integración full-stack y documentación clara. ¡Gracias por revisarlo!
