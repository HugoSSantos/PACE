CREATE TABLE `Fornecedor` (
  `CNPJ` varchar(45) NOT NULL,
  `Nome` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Telefone` varchar(15) DEFAULT NULL,
  `IsLocal` int(1) DEFAULT NULL,
  `Contato_Financeiro` varchar(45) DEFAULT NULL,
  `Banco` varchar(45) DEFAULT NULL,
  `Rua` varchar(45) DEFAULT NULL,
  `Bairro` varchar(45) DEFAULT NULL,
  `Cidade` varchar(45) DEFAULT NULL,
  `Estado` varchar(45) DEFAULT NULL,
  `Forma_Pagamento` varchar(45) DEFAULT NULL,
  `Chave_Pix` varchar(45) DEFAULT NULL,
  `Site` varchar(45) DEFAULT NULL,
  `InstituicaoEstadual` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`CNPJ`)
);
INSERT INTO FORNECEDOR VALUES ("17.469,70/0001-77", "ArcelorMittal", "amcfi@arcelormittal.com.br", 08000151221, 1,"pagamentos@arcelormittal.com.br", "0001", "Avenida Carandai, 1115",
"Funcionários", "Belo Horizonte", "MG", "À vista, parcelado","955285207121S7", "www.arcelormittal.com.br", "30.130-915");   

CREATE TABLE `Funcionario` (
  `ID` int(11) NOT NULL,
  `Setor` varchar(45) DEFAULT NULL,
  `Nome` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Telefone` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`ID`)
);
INSERT INTO Funcionario VALUES (1, "Infraestrutura", "Junior", "jjj@cesar.org", 819999999999); 

CREATE TABLE `Pedido` (
  `ID` int(11) NOT NULL,
  `Item` varchar(45) DEFAULT NULL,
  `Setor` varchar(45) DEFAULT NULL,
  `Dia` int(2) DEFAULT NULL,
  `Mes` int(2) DEFAULT NULL,
  `Ano` int(4) DEFAULT NULL,
  `Valor` int(11) DEFAULT NULL,
  `Nota` float(3,2) DEFAULT NULL,
  PRIMARY KEY (`ID`)
);
INSERT INTO PEDIDO VALUES (1, "Cadeira", "Infraestrutura", "11","10", "2022", 110, 4.5);

CREATE TABLE `Compra` (
  `IdFuncionario` int(11) NOT NULL,
  `IdPedido` int(11) NOT NULL,
  `CNPJ` varchar(45) NOT NULL,
  PRIMARY KEY (`IdFuncionario`,`IdPedido`,`CNPJ`),
  CONSTRAINT `fk_Projeto_has_Pedido_Compra_idx` FOREIGN KEY (`IdPedido`) REFERENCES `Pedido` (`ID`),
  CONSTRAINT `fk_Projeto_has_Funcionario_Compra_idx` FOREIGN KEY (`IdFuncionario`) REFERENCES `Funcionario` (`ID`),
  CONSTRAINT `fk_Projeto_has_Fornecedor_Compra_idx` FOREIGN KEY (`CNPJ`) REFERENCES `Fornecedor` (`CNPJ`)
);
INSERT INTO COMPRA VALUES (1, 1, "17.469,70/0001-77");

CREATE TABLE `Avaliacao` (
  `IdFuncionario` int(11) NOT NULL,
  `CNPJ` varchar(45) NOT NULL,
  `Preco` varchar(45) DEFAULT NULL,
  `DataEntrega` varchar(45) DEFAULT NULL,
  `Qualidade` varchar(45) DEFAULT NULL,
  `CondicoesPagamento` int(11) DEFAULT NULL,
  PRIMARY KEY (`IdFuncionario`,`CNPJ`),
  CONSTRAINT `fk_Projeto_has_Funcionario_Ava_idx` FOREIGN KEY (`IdFuncionario`) REFERENCES `Funcionario` (`ID`),
  CONSTRAINT `fk_Projeto_has_Fornecedor_Ava_idx` FOREIGN KEY (`CNPJ`) REFERENCES `Fornecedor` (`CNPJ`)
);
INSERT INTO AVALIACAO VALUES (1,"17.469,70/0001-77", 5, 5, 5, 5);
