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
  - **Angular** for dynamic UI
  - **OpenAPI** for API documentation and integration
  - HTML, SCSS for styling
- **Backend**:
  - **Java** with Spring Boot for backend logic
  - **MySQL** for database management
  - **JWT** (JSON Web Tokens) for user authentication
- **Containerization**: **Docker** for email functionality (mailing service)
- **Version Control**: Git for source code management

## ⚙️ **Setup:** 
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the application: `npm start`.
