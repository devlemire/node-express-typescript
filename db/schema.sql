DROP TABLE books;
CREATE TABLE books (book_id SERIAL PRIMARY KEY, name TEXT NOT NULL, created_at TIMESTAMP DEFAULT NOW());

INSERT INTO books (name) VALUES
('My Greatest Adventure'),
('My Boringest Adventure');