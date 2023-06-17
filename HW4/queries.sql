
-- create
CREATE TABLE EMPLOYEE (
  Id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  adress TEXT NOT NULL
);

-- insert
INSERT INTO EMPLOYEE VALUES (0001, 'Иван', '25', 'Казань');
INSERT INTO EMPLOYEE VALUES (0002, 'Елена', '32', 'Москва');
INSERT INTO EMPLOYEE VALUES (0003, 'Сергей', '21', 'Калиниград');
INSERT INTO EMPLOYEE VALUES (0004, 'Юлия', '43', 'Москва');

-- fetch 
SELECT * FROM EMPLOYEE WHERE adress = 'Москва';
