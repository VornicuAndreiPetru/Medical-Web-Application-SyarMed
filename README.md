# **Medical Web Application - SyarMed** 🏥

SyarMed is a web-based medical application designed to help manage hospital data, including patient information, doctor appointments, and medical records. It simplifies healthcare management and provides an intuitive interface for users.

<img src="https://github.com/VornicuAndreiPetru/Medical-Web-Application-SyarMed/blob/ccc2b7a3b5f0964dce64ad37e88436c27595fbf1/home.PNG" alt="image_alt" width="750">

## ✨ **Features:** 
- **User Management**: Manage patient and doctor profiles with role-based permissions.
- **Appointment Scheduling**: Patients can schedule appointments, which doctors can confirm or adjust.
- **Email Verification**: Users verify their email addresses during registration to ensure secure access.
- **Patient History**: Doctors access patient histories to make informed decisions.
- **Diagnosis and Treatment**: After a consultation, doctors add a diagnosis and treatment to the patient’s medical history.
- **Feedback System**: After completing an appointment, patients can provide feedback on their experience.

## 🔄 **Flow:** 
1. **Patient makes an appointment**: The patient schedules an appointment based on available doctor slots.
2. **Doctor reviews patient history**: The doctor accesses the patient's medical records and consultation history.
3. **Consultation**: The doctor diagnoses the patient and suggests a treatment plan, which is stored in the patient’s medical history.
4. **Feedback**: After the consultation, the patient can provide feedback on the appointment experience.

## 💻 **Technologies Used:** 
- **Frontend**:
  - **Angular**: A TypeScript-based framework for building dynamic, responsive single-page applications with efficient data binding and component-driven architecture.
  - **OpenAPI**: For API documentation and automated client code generation, making integration between frontend and backend seamless.
  - **HTML5 & SCSS**: HTML5 for structuring content and SCSS for styling, providing a flexible, maintainable, and responsive design.
  - **Bootstrap**: For responsive design and fast prototyping, helping with the layout and component styling.
  - **RxJS**: Used with Angular for reactive programming, allowing better management of asynchronous data streams and events.

- **Backend**:
  - **Java** with **Spring Boot**: A powerful backend framework that simplifies the development of production-ready applications with built-in features like security, database integration, and microservices support.
  - **PostgreSQL**: A robust and scalable relational database system, widely used for storing and managing structured data, providing advanced features like support for JSON and complex queries.
  - **JWT (JSON Web Tokens)**: For secure user authentication and authorization, ensuring that only authorized users can access specific application features.
  - **Spring Security**: For implementing authentication and authorization processes in the backend.
  - **JPA (Java Persistence API)**: For ORM (Object-Relational Mapping) to easily interact with the database using Java objects.

- **Containerization**:
  - **Docker**: For packaging the application into containers, ensuring it runs consistently across different environments. Used for the deployment of email functionality (mailing service) and overall container management.

- **Version Control & Collaboration**:
  - **Git**: A distributed version control system to manage source code and track changes across various development stages.
  - **GitHub**: Hosting and collaboration platform for version control using Git, allowing for code sharing, issue tracking, and collaborative development.
 
- **Others**:
  - **Postman**: For testing APIs, making it easier to send requests and validate responses.
  - **Swagger UI**: For providing an interactive API documentation, making it easier for developers to explore and test the API endpoints.

## ⚙️ **Setup:** 
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the application: `npm start`.
