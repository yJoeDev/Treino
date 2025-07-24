nome_do_produto = input ("Nome do produto:")
preco_original = float(input ("Qual o Valor do Produto?"))
porcentagem_de_desconto = float(input ("Qual seria o desconto?"))

desconto = (preco_original * porcentagem_de_desconto) / 100
preco_final = preco_original - desconto

print (f"Produto: {nome_do_produto} Preco original:{preco_original} desconto:{porcentagem_de_desconto} Preco Final: R${preco_final:.2f}")