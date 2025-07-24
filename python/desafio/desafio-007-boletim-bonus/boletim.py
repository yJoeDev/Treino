nome_do_aluno = input("Digite seu nome:")
materia = input ("Digite o nome da materia:")
nota1 = float (input("Digite a nota da sua prova:"))
nota2 = float (input("Digite a nota do seu trabalho:"))
nota3 = float (input("Digite a nota da sua atividade:"))
bonus = float (input("Digite quantos pontos de bonos recebeu:"))

media_simples = (nota1 + nota2 + nota3) / 3
media_final = media_simples + bonus

print(f"Aluno:{nome_do_aluno}")
print(f"Materia:{materia}")
print(f"notas: {nota1:.2f}, {nota2:.2f}, {nota3:.2f}")
print(f"Bonus de participacao: {bonus:.2f}")
print(f"Media sem bonus: {media_simples:.2f}")
print(f"Media final com bonus: {media_final:2f}")