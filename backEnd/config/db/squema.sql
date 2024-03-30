// Creacion de la base de datos

CREATE DATABASE columpios;

\c columpios

// Creacion de las tablas

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL
);

INSERT INTO roles (role_name) VALUES ('Administrator'), ('User');

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    role_id INT REFERENCES roles(id),
    firstName VARCHAR (50) NOT NULL,
    lastName VARCHAR (50) NOT NULL,
    avatarURL VARCHAR (1000) NOT NULL,
    email VARCHAR (50) UNIQUE NOT NULL,
    password VARCHAR(250) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()   
);

UPDATE users SET role_id = 1 WHERE id = 42;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(300) NOT NULL,
    price INT NOT NULL,
    imageURL VARCHAR (1000) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()   
);

CREATE TABLE users_favorites (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

