# URL Shortener

Welcome to **URL Shortener**! Follow the instructions below to set up and run the application.

## Prerequisites

Ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/products/docker-desktop)
- [Node.js](https://nodejs.org/) (including npm) version 22.11.0
- [Prisma CLI](https://www.prisma.io/docs/getting-started/quickstart)
- Access to modify the `/etc/hosts` file.

## Getting Started

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Aram-Abovyan/url_shortener.git
   cd url_shortener
   ```

2. Add the following entry to your /etc/hosts file:
  127.0.0.1 db

3. Install dependencies for the client:
   ```bash
   cd client
   npm i
   ```

4. Install dependencies for the server:
   ```bash
   cd ../server
   npm install
   ```

5. Start the application using Docker:
   ```bash
   docker compose up -d
   ```

6. Run Prisma migrations:
  ```bash
  cd server
  npx prisma migrate dev
  ```
7. Open your browser and navigate to:
  ```bash
  http://localhost:8080
```
