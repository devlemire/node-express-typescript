DROP TABLE users;
DROP TABLE shelfs;
DROP TABLE books;

CREATE TABLE users (user_id SERIAL PRIMARY KEY);
CREATE TABLE shelfs (shelf_id SERIAL PRIMARY KEY, user_id INT REFERENCES users(user_id) ON DELETE CASCADE);
CREATE TABLE books (book_id SERIAL PRIMARY KEY, shelf_id INT REFERENCES shelfs(shelf_id) ON DELETE CASCADE, name TEXT NOT NULL);
