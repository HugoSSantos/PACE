#COMPRAS DO MES
SELECT COUNT(*) FROM PEDIDO WHERE MES = 10;

#COMPRAS EM ABERTO
SELECT COUNT(*) FROM PEDIDO WHERE STATUS = '1';

#ULTIMAS COMPRAS FINALIZADA
SELECT * FROM PEDIDO WHERE STATUS = '0';

#ULTIMAS COMPRAS FEITAS
SELECT nome, item, valor, nota FROM pedido AS p 
    INNER JOIN compra AS c ON (p.id = c.idpedido)
    INNER JOIN FORNECEDOR as f on (f.cnpj = c.cnpjcompra)
    ORDER BY (ano)desc, (mes)desc, (dia)desc;
    
#ULTIMAS COMPRAS FEITAS DE UM FORNECEDOR ESPECÍFICO
SELECT nome, item, valor, nota FROM pedido AS p 
    INNER JOIN compra AS c ON (p.id = c.idpedido)
    INNER JOIN FORNECEDOR as f on (f.cnpj = c.cnpjcompra)
    WHERE nome = "ArcelorMittal"
    ORDER BY (ano)desc, (mes)desc, (dia)desc;

#LISTA DE FORNECEDORES ORDENADO POR NOTAS
SELECT Nome, COUNT(*), islocal, round(AVG(pedido.nota),2) as avaliação_geral
FROM fornecedor, pedido, compra
where (cnpj = CNPJCompra and idpedido = id)
group by Nome
order by avg(pedido.nota) desc;

#LISTA DE FORNECEDORES ORDENADO POR COMPRAS FEITAS COM ESSE FORNECEDOR
SELECT Nome, COUNT(*) as compras, islocal, round(AVG(pedido.nota),2) as avaliação_geral
FROM fornecedor, pedido, compra
where (cnpj = CNPJCompra and idpedido = id)
group by Nome
order by COUNT(*) desc;

#SELECIONAR TUDO DE UM FORNECEDOR ESPECÍFICO
SELECT * FROM FORNECEDOR 
WHERE CNPJ = "17.469,70/0001-77"; 

#NOTA MÉDIA FORNECEDOR
SELECT round(AVG(NOTA),2) FROM PEDIDO 
WHERE ID IN (SELECT IDPEDIDO FROM COMPRA WHERE CNPJCOMPRA = "17.469,70/0001-77"); 

#QUANTOS PEDIDOS FEITOS COM UM FORNECEDOR
SELECT COUNT(*) FROM PEDIDO 
WHERE ID IN (SELECT IDPEDIDO FROM COMPRA WHERE CNPJCOMPRA = "17.469,70/0001-77"); 

#PEDIDOS FEITOS COM UM FORNECEDOR ESPECÍFICO ORDENADO DA MAIOR NOTA PARA A MENOR
SELECT ITEM, STATUS, DIA, MES, ANO, VALOR, NOTA FROM PEDIDO 
WHERE ID IN (SELECT IDPEDIDO FROM COMPRA WHERE CNPJCOMPRA = "17.469,70/0001-77") 
ORDER BY NOTA DESC; 

#FORNECEDOR DO MES
SELECT Nome, COUNT(*), islocal, AVG(pedido.nota)
FROM fornecedor, pedido, compra
where (cnpj = CNPJCompra and idpedido = id) and pedido.mes = '10'
group by Nome
order by avg(pedido.nota) desc limit 1;

#Compras Avaliadas
SELECT count(*)
FROM PEDIDO as p
INNER JOIN compra AS c ON (p.id = c.idpedido)
INNER JOIN FORNECEDOR as f on (f.cnpj = c.cnpj)		
where idFuncionario = 1 and STATUS = 0;

#Avaliações pendentes do comprador X
SELECT ID, item, dia,mes,ano, valor
FROM PEDIDO as p
INNER JOIN compra AS c ON (p.id = c.idpedido)
INNER JOIN FORNECEDOR as f on (f.cnpj = c.cnpj)		
where idFuncionario = 1 and STATUS = 1;

#Perfil Comprador
Select nome,telefone,email,localidade
from Funcionario
where ID = 1;

#Nota media Fornecedor
SELECT NOTA FROM PEDIDO WHERE ID IN (SELECT IDPEDIDO FROM COMPRA WHERE CNPJCOMPRA = "17.469,70/0001-77"); 