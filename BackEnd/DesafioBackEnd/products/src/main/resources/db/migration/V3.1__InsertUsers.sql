
INSERT INTO users
(username, password,enabled)
VALUES
('usuario1','$2a$10$eg901jc2O6rWwkjsLObmFeW4iX12pDVSdaVbbceLm6lo0ILUijQYe', true);

INSERT INTO users
(username, password,enabled)
VALUES
('usuario2', '$2a$10$sdW54ruflH.jVRR0fh6jPeelWU.7luP3g2ul6d2XY3nutHnfLfgsm', true);

INSERT INTO users
(username, password,enabled)
VALUES
('usuario3','$2a$10$HaxwYAWA2XmjdqkkC3SsFOdABeHqIaVcWYYZAScLDMdxp5.AxiXC6', true);

INSERT INTO authorities
(username,
authority)
VALUES
('usuario1',
'USER');

INSERT INTO authorities
(username,
authority)
VALUES
('usuario3',
'USER');

INSERT INTO authorities
(username,
authority)
VALUES
('usuario2',
'USER');