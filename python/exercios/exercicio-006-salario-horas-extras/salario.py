nome_do_funcionario = input ("Digite seu nome:")
hora_trabalhada = float(input("Digite sua hora trabalhada:"))
hora_extra = float (input("Digite sua hora extra trabalhada:"))
valor_por_hora = float (input("digite o valor da hora trabalhada:"))
valor_extra = float(input("digite o valor da hora extra:"))

valor_total_hora = hora_trabalhada * valor_por_hora
valor_total_extra = hora_extra * valor_extra
salario_final = int (valor_total_hora + valor_total_extra)

print (f"Funcionario: {nome_do_funcionario}")
print (f"seu total recebido por horas normais trabalhadas e: R${valor_total_hora:.2f}")
print (f"O seu valor a receber por suas horas extras trabalhadas e: R${valor_total_extra:.2f}")
print (f"Seu salario final e: R${salario_final:.2f}")