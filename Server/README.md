# Server - Finance Tracker API 🚀

The backend engine for the Finance Tracker application, responsible for secure data management, user authentication, and transaction processing.

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express 5](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/)
- **Security**: 
    - [JWT](https://jwt.io/) for session management.
    - [BcryptJS](https://github.com/dcodeIO/bcrypt.js) for industrial-strength password hashing.
- **Development**: [Nodemon](https://nodemon.io/) for auto-reloading.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
# or
yarn install
```

### 2. Environment Configuration
Create a `.env` file in the root of the `/Server` directory:
```env
PORT=8000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

### 3. Run the Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## 🔌 API Documentation

### User Routes (`/api/v1/users`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/` | Register a new user | No |
| POST | `/login` | Authenticate user & get token | No |
| GET | `/` | Get current user's details | Yes |

## 🛡️ Security Features
- **Password Hashing**: Never stores plain-text passwords.
- **JWT Authentication**: Secure, stateless session management.
- **CORS Enabled**: Configured for secure frontend-backend communication.
- **Custom Error Middleware**: Uniform error responses across all endpoints.

---
*Built with scalability and security in mind.*
