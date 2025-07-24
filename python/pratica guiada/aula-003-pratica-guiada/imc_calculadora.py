
nome = input("digite seu nome:")
peso = float(input("digite o seu peso:"))
altura = float(input("digite a sua altura"))
imc = int (peso / (altura ** 2) )


print(f"Olá {nome}, seu peso é {peso}kg, sua altura é {altura}m e seu IMC é {imc}")