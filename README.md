# Monorepo Setup with React, Node.js, and Nginx

- **Frontend**: React, TypeScript, ApolloClient, MaterialUI 
- **Backend**: Node.js, TypeScript, ApolloServer, GraphQL
- **Reverse Proxy**: Nginx

## Project Structure

The project is organized into the following directories:

- /frontend # React frontend application
- /backend # Node.js backend application with GraphQL
- /nginx # Nginx configuration
- /docker-compose.yml # Docker Compose configuration

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Node.js**: JavaScript runtime for server-side applications.
- **GraphQL**: A query language.
- **MongoDB**: A no relational database 
- **Nginx**: A high-performance HTTP server and reverse proxy.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)

### Running the Application

1. **Clone the Repository**

```bash
git clone https://github.com/christopher-leal/keanu-react-node.git
cd keanu-react-node
```

2. **Run with Docker Compose**
```bash
docker compose up
```


3. **Access to the application**

- http://localhost:8080
   