CREATE DATABASE crypton;

USE crypton;

CREATE TABLE criptomoeda (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome varchar(50)
);

INSERT INTO criptomoeda (nome)
VALUES
('Bitcoin'),
('Ethereum'),
('Litecoin');

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(50)
);

CREATE TABLE log (
	id INT PRIMARY KEY AUTO_INCREMENT,
	valor decimal(12,6),
	datahora datetime,
	fk_crypto int,
	foreign key (fk_crypto) references criptomoeda(id)
);