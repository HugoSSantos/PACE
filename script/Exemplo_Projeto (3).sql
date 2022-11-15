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
INSERT INTO FORNECEDOR VALUES ("17.469,70/0001-77", "ArcelorMittal", "amcfi@arcelormittal.com.br", 08000151221, 0,"pagamentos@arcelormittal.com.br", "0001", "Avenida Carandai, 1115",
"Funcionários", "Belo Horizonte", "MG", "À vista, parcelado","955285207121S7", "www.arcelormittal.com.br", "30.130-915"), ("18.232,70/0001-88", "Kalunga", "klg@kalunga.com.br", 08000123456, 1,"pagamentos@kalunga.com.br", "0001", "Av. República do Líbano, 251",
"Pina", "Recife", "PE", "À vista, parcelado","pagamentos@kalunga.com.br", "www.kalunga.com.br", "10.120-700"), ("16.111,77/0001-66", "Sinobras", "snb@sinobras.com.br", 07000654321, 0,"pagamentos@sinobras.com.br", "0001", "Rodovia PA, 150",
"Nova Marabá", "Marabá", "PA", "À vista","pagamentos@sinobras.com.br", "www.sinobras.com.br", "11.111-111");   

CREATE TABLE `Funcionario` (
  `ID` int(11) NOT NULL,
  `Setor` varchar(45) DEFAULT NULL,
  `Nome` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Telefone` varchar(15) DEFAULT NULL,
  `Localidade` varchar(45) NOT NULL,
  PRIMARY KEY (`ID`)
);
INSERT INTO Funcionario VALUES (1, "Infraestrutura", "Junior", "jjj@cesar.org", 819999999999, "CESAR - RECIFE, PE"), (2, "Papelaria", "André", "aaa@cesar.org", 81988888888, "CESAR - MANÁUS, AM");

CREATE TABLE `Pedido` (
  `ID` int(11) NOT NULL,
  `Item` varchar(45) DEFAULT NULL,
  `Status` varchar(45) DEFAULT NULL,
  `Dia` int(2) DEFAULT NULL,
  `Mes` int(2) DEFAULT NULL,
  `Ano` int(4) DEFAULT NULL,
  `Valor` int(11) DEFAULT NULL,
  `Nota` float(3,2) DEFAULT NULL,
  PRIMARY KEY (`ID`)
);
INSERT INTO PEDIDO VALUES (1, "Cadeira", "1", "11","10", "2022", 110, 4.5), (2, "Cavaletes e Papel", "0", "20","10", "2022", 50, 4), (3, "Material de construção", "1", "05","09", "2022", 250, 4.5);
INSERT INTO PEDIDO VALUES (4, "Mesa", "1", "01","11", "2022", 110, 4);

CREATE TABLE `Compra` (
  `IdFuncionario` int(11) NOT NULL,
  `IdPedido` int(11) NOT NULL,
  `CNPJCompra` varchar(45) NOT NULL,
  PRIMARY KEY (`IdFuncionario`,`IdPedido`,`CNPJCompra`),
  CONSTRAINT `fk_Projeto_has_Pedido_Compra_idx` FOREIGN KEY (`IdPedido`) REFERENCES `Pedido` (`ID`),
  CONSTRAINT `fk_Projeto_has_Funcionario_Compra_idx` FOREIGN KEY (`IdFuncionario`) REFERENCES `Funcionario` (`ID`),
  CONSTRAINT `fk_Projeto_has_Fornecedor_Compra_idx` FOREIGN KEY (`CNPJCompra`) REFERENCES `Fornecedor` (`CNPJ`)
);
INSERT INTO COMPRA VALUES (1, 1, "17.469,70/0001-77"), (2, 2, "18.232,70/0001-88"), (1, 3, "16.111,77/0001-66"), (1, 4, "17.469,70/0001-77");

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
INSERT INTO AVALIACAO VALUES (1,"17.469,70/0001-77", 5, 5, 5, 5), (2,"18.232,70/0001-88", 4, 5, 4, 5), (1,"16.111,77/0001-66", 5, 4, 5, 4);

