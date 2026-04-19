# CineTix - Movie Ticket Booking Website

CineTix is a full-stack movie ticket booking website built to match the rubric shown in the provided project image. It includes a responsive React frontend, an Express REST API backend, JWT authentication, role-based access control, CRUD operations, and deployment-ready documentation.

## Tech Stack

- Frontend: React, Vite, React Router DOM
- Backend: Node.js, Express
- Authentication: JWT, bcryptjs
- Database: MongoDB with Mongoose models and startup seeding
- Environment variables: `.env` support on both frontend and backend

## Features Implemented

### Definition of Project
- Topic selected: Movie Ticket Booking Website
- Problem solved: Online discovery of movies, show browsing, secure login, seat reservation, and admin-side content management
- Functional modules: authentication, movies, shows, bookings, dashboard, admin CRUD

### Frontend Design & Development
- Responsive React interface for customer and admin
- Distinct cinematic UI with festival-inspired cards, glassmorphism, spotlight gradients, and ticket styling
- Form validation on login, registration, movie management, and show management
- Routing with React Router

### Backend Development & Database Connectivity
- Node.js and Express REST APIs
- MongoDB collections: `users`, `movies`, `shows`, `theaters`, `bookings`
- CRUD operations for movies and shows
- Booking logic with seat conflict prevention

### Authentication & Security
- JWT based authentication
- Password hashing using bcryptjs
- Role-based access control for admin routes
- Rate limiting, secure headers, unsafe payload rejection, and environment-based secrets
- Environment variable usage for API URL, MongoDB URI, port, and JWT secret

### Final Submission Readiness
- Source code separated into `frontend` and `backend`
- README included
- Ready for deployment on platforms like Vercel/Netlify for frontend and Render/Railway for backend

## Database Schema

### users
- `id`
- `name`
- `email`
- `passwordHash`
- `role`
- `createdAt`

### movies
- `id`
- `title`
- `genre`
- `duration`
- `language`
- `rating`
- `price`
- `releaseDate`
- `poster`
- `banner`
- `description`

### shows
- `id`
- `movieId`
- `theaterId`
- `screenName`
- `showDate`
- `showTime`
- `totalSeats`
- `bookedSeats`

### theaters
- `id`
- `name`
- `city`
- `screens`

### bookings
- `id`
- `bookingCode`
- `userId`
- `movieId`
- `theaterId`
- `showId`
- `seats`
- `totalAmount`
- `status`
- `createdAt`

## Demo Accounts

- Admin: `admin@cinetix.com` / `Admin@123`
- Customer: `user@cinetix.com` / `User@123`

## Run Locally

### Backend
1. Go to `backend`
2. Copy `.env.example` to `.env`
3. Make sure MongoDB is running locally or set `MONGODB_URI` to your MongoDB Atlas/database URL
4. Install dependencies with `npm install`
5. Start server with `npm run dev`

### Frontend
1. Go to `frontend`
2. Copy `.env.example` to `.env`
3. Install dependencies with `npm install`
4. Start app with `npm run dev`

## Suggested Deployment

- Frontend: Netlify or Vercel
- Backend: Render or Railway
- Set `VITE_API_URL` to your deployed backend `/api` URL
- Set backend `CLIENT_URL` to your deployed frontend URL
- Set backend `MONGODB_URI` to your hosted MongoDB connection string

## Important Note

This project now boots against MongoDB and will seed the starter admin, customer, movies, theaters, and shows automatically when the database is empty. Run `npm install` in both `frontend` and `backend`, then ensure your MongoDB server is reachable before demo or deployment.
