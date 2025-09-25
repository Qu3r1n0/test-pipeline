# Conta Bancaria - Flow Chart #

class ContaBancaria:
    def __init__(self):
        self.saldo = 0
        self.numero_conta = None

class Sistema:
    def __init__(self):
        self.contas = {}

    def visualizar_menu(self):
        while True:
            print("\n=== MENU BANCO ===")
            print("1. Criar Conta")
            print("2. Depositar")
            print("3. Sacar")
            print("4. Transferir")
            print("5. Visualizar Saldo")
            print("6. Sair")
            
            opcao = input("\nEscolha uma opção: ")
            
            if opcao == "1":
                self.criar_conta()
            elif opcao == "2":
                self.depositar()
            elif opcao == "3":
                self.sacar()
            elif opcao == "4":
                self.transferir()
            elif opcao == "5":
                self.visualizar_saldo()
            elif opcao == "6":
                print("Obrigado por usar nosso banco!")
                break
            else:
                print("Opção inválida!")

    def criar_conta(self):
        numero = len(self.contas) + 1
        self.contas[numero] = ContaBancaria()
        self.contas[numero].numero_conta = numero
        print(f"Conta {numero} criada com sucesso!")

    def depositar(self):
        numero = int(input("Digite o número da conta: "))
        if numero in self.contas:
            valor = float(input("Digite o valor para depositar: "))
            self.contas[numero].saldo += valor
            print(f"Depósito de R${valor:.2f} realizado com sucesso!")
        else:
            print("Conta não encontrada!")

    def sacar(self):
        numero = int(input("Digite o número da conta: "))
        if numero in self.contas:
            valor = float(input("Digite o valor para sacar: "))
            if self.contas[numero].saldo >= valor:
                self.contas[numero].saldo -= valor
                print(f"Saque de R${valor:.2f} realizado com sucesso!")
            else:
                print("Saldo insuficiente!")
        else:
            print("Conta não encontrada!")

    def transferir(self):
        origem = int(input("Digite o número da conta de origem: "))
        destino = int(input("Digite o número da conta de destino: "))
        if origem in self.contas and destino in self.contas:
            valor = float(input("Digite o valor para transferir: "))
            if self.contas[origem].saldo >= valor:
                self.contas[origem].saldo -= valor
                self.contas[destino].saldo += valor
                print(f"Transferência de R${valor:.2f} realizada com sucesso!")
            else:
                print("Saldo insuficiente!")
        else:
            print("Uma das contas não foi encontrada!")

    def visualizar_saldo(self):
        numero = int(input("Digite o número da conta: "))
        if numero in self.contas:
            print(f"Saldo da conta {numero}: R${self.contas[numero].saldo:.2f}")
        else:
            print("Conta não encontrada!")

if __name__ == "__main__":
    sistema = Sistema()
    sistema.visualizar_menu()
