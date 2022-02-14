
INSERT INTO users (name) VALUES ('sumaya');

INSERT INTO category ( name, workout) 
VALUES 
('arms','bicepcurls'),
('legs', 'stairs');

INSERT INTO activity (name, link, category_id)
VALUES
  ('Sylvia Palmer', 'https://www.youtube.com/watch?v=ykJmrZ5v0Oo', 1),
  ('Tori Malcolm', 'https://www.youtube.com/watch?v=lKs1CjqCjyU', 2);



INSERT INTO category_user (category_id, user_id)
VALUES 
(1, 1);

INSERT INTO user_activity (user_id, activity_id, date)
VALUES 
(1, 1, now() );


