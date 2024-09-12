# 🛹💍 Skate Jewelry Store - Backend 🛠️🖥️

## Table of Contents
- [📝 Project Description](#project-description)
- [💡 Technical Competencies](#technical-competencies)
- [🛠️ Technologies](#technologies)
- [🧰 Tools](#tools)
- [✨ Key Features](#key-features)
- [⚙️ Installation and Execution](#installation-and-execution)
- [🚀 Project Development](#project-development)
- [📚 Useful Resources](#useful-resources)
- [👥 Contributors](#contributors)

## 📝 Project Description
The backend of the Skate Jewelry Store application is built using Java and Spring Boot. It manages the application's data and business logic, connecting with a PostgreSQL database. The backend provides APIs for user management, product management, and order processing. It also integrates with pgAdmin for database management and Postman for API testing.

## 💡 Technical Competencies
- **RESTful API Development**: Provides endpoints for user and product management, order processing, etc.

- **Database Management**: Utilizes PostgreSQL for data storage, with pgAdmin used for database management.

- **Security**: Implements security measures for user authentication and authorization.

- **Integration**: Integrates with third-party tools like Postman for API testing.

## 🛠️ Technologies
- **[Java](https://www.java.com/en/)**: Version 17.

- **[Spring Boot](https://spring.io/projects/spring-boot)**: Framework for building the application.

- **[PostgreSQL](https://www.postgresql.org/)**: Database system used for data storage.

- **[pgAdmin](https://www.pgadmin.org/)**: Tool for managing PostgreSQL databases.

## 🧰 Tools
- **[Postman](https://www.postman.com/)**: Tool for testing and interacting with RESTful APIs.

- **[pgAdmin](https://www.pgadmin.org/)**: Tool for managing PostgreSQL databases.

- **[Visual Studio Code (VSC)](https://code.visualstudio.com/)**: Main IDE used for development.

- **[Git](https://git-scm.com/)**: Version control tool.

- **[GitHub](https://github.com/)**: Repository hosting platform for collaboration and version control.

## ✨ Key Features
- **REST API Endpoints**: Provides endpoints for creating, reading, updating, and deleting users, products, and orders.

- **Database Integration**: Connects with a PostgreSQL database for persistent data storage.

- **User Authentication**: Manages user login and registration with secure authentication mechanisms.

- **Order Processing**: Handles order creation and management, including status updates.

- **API Testing**: Use Postman to test and interact with the API endpoints.

## ⚙️ Installation and Execution
To set up and run the backend locally, follow these steps:

1. Clone the repository:  
   `git clone https://github.com/ShailaGonzalez/SkateJewelryStoreBackend`

2. Navigate to the project directory:  
   `cd skate-jewelry-store-backend`

3. Configure the database connection:
   - Create a `application.properties` file in `src/main/resources` with the following content:
     ```properties
     spring.datasource.url=jdbc:postgresql://localhost:3001/U!Dagger
     spring.datasource.username=postgres
     spring.datasource.password=1980
     ```

4. Build the project:  
   `./mvnw clean install`

5. Run the application:  
   `./mvnw spring-boot:run`

The backend server will start, and the API will be available at [http://localhost:3001/](http://localhost:3001/).

## 🚀 Project Development
This project was developed using Agile methodologies, with the following key functionalities:

- **Modular Architecture**: Built using Spring Boot for a modular and scalable application.

- **Database Integration**: Configured PostgreSQL with Spring Data JPA for ORM.

- **Security**: Implemented security features using Spring Security for authentication and authorization.

- **Testing**: Utilized Postman for testing API endpoints.

## 📚 Useful Resources
- [Java Documentation](https://docs.oracle.com/en/java/)

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

- [pgAdmin Documentation](https://www.pgadmin.org/docs/)

- [Postman Documentation](https://learning.postman.com/docs/)

## 👥 Contributors
- **Shaila González** (Backend Developer): [GitHub Profile](https://github.com/ShailaGonzalez)



