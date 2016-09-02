BEGIN TRANSACTION;
DROP TABLE IF EXISTS data;
CREATE TABLE data (id INTEGER PRIMARY KEY ASC, name VARCHAR(255));

INSERT INTO data (name) VALUES ('First data field');
INSERT INTO data (name) VALUES ('Second data field');
INSERT INTO data (name) VALUES ('Third data field');
INSERT INTO data (name) VALUES ('Fourth data field');
INSERT INTO data (name) VALUES ('Fifth data field');
COMMIT;